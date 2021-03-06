import React, { Fragment } from 'react'
import header from '../images/platziconf-logo.svg'
import './styles/BadgeEdit.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import api from '../api'
import Loader from '../components/Loader'
import PageError from '../components/PageError'

class BadgeEdit extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: ''
        }
    }
    
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })
        
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            ) 
            
            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
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
            await api.badges.update(
                this.props.match.params.badgeId,
                this.state.form
            );
            this.setState({ loading: false });

            this.props.history.push('/badges');
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
                <div className="BadgeEdit__hero">
                    <img className=" BadgeEdit__hero-image img-fluid" src={header} alt="logo" />
                </div>
                <div className="container space-section">
                    <div className="row badge-card">
                        <div className="col-6 col-1">
                            <Badge 
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'YOUR_JOB'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email}
                            />
                        </div>
                        <div className="col-6 col-2">
                            <h1>Edit Attendant</h1>
                            <BadgeForm
                                formFirstName={this.state.form.firstName}
                                formLastName={this.state.form.lastName}
                                formEmail={this.state.form.email}
                                formJobTitle={this.state.form.jobTitle}
                                formTwitter={this.state.form.twitter}
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
export default BadgeEdit;