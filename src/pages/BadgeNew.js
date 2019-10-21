import React, { Fragment } from 'react'
import Navbar from '../components/Navbar'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

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
    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was submited');
        console.log(this.state);
    }
    render() {
        return (
            <Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.firstName}
                                lastName={this.state.lastName}
                                jobTitle={this.state.jobTitle}
                                twitter={this.state.twitter}
                                avatarUrl="https://lh3.googleusercontent.com/-mHUdgp2DzEY/XQE3n4bqheI/AAAAAAAADNg/4Uq-RTsaSmgA2Ky5KC7cAJQtBK1kI0LmQCEwYBhgL/w140-h140-p/2019-06-12.jpg"
                            />
                        </div>
                        <div className="col-6">
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