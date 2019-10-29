import React, { Fragment } from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import Loader from '../components/Loader'
import PageError from '../components/PageError'

class BadgeNew extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = e => {
        console.log('Button was clicked')
    }
    handleSubmit = async e => {
        e.preventDefault();
        console.log('form enviadoooooo')
        this.setState({ loading: true, error: null });
        try {
            await api.badges.create(this.state);
            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }
    render() {
        if (this.state.loading === true) {
            return <Loader />
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }
        return (
            <Fragment>
                <div className="BadgeNew__hero">
                    <img className=" BadgeNew__hero-image img-fluid" src={header} alt="logo" />
                </div>
                <div className="container">
                    <div className="row badge-card">
                        <div className="col-6 col-1">
                            <Badge 
                                firstName={this.state.firstName || 'FIRST_NAME'}
                                lastName={this.state.lastName || 'LAST_NAME'}
                                jobTitle={this.state.jobTitle || 'YOUR_JOB'}
                                twitter={this.state.twitter || 'TWITTER'}
                                email={this.state.email}
                            />
                        </div>
                        <div className="col-6 col-2">
                            <BadgeForm
                                formFirstName={this.state.firstName}
                                formLastName={this.state.lastName}
                                formEmail={this.state.email}
                                formJobTitle={this.state.jobTitle}
                                formTwitter={this.state.twitter}
                                handleChange={this.handleChange}
                                handleClick={this.handleClick}
                                handleSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default BadgeNew;