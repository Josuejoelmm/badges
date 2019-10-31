import React, { Component, Fragment } from 'react'

export default class BadgeForm extends Component {
    render() {
        return (
            <Fragment>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.handleChange} className="form-control" name="firstName" type="text" value={this.props.formFirstName}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.handleChange} className="form-control" name="lastName" type="text" value={this.props.formLastName}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.handleChange} className="form-control" name="email" type="email" value={this.props.formEmail}/>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.handleChange} className="form-control" name="jobTitle" type="text" value={this.props.formJobTitle}/>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.handleChange} className="form-control" name="twitter" type="text" value={this.props.formTwitter}/>
                    </div>

                    <button onClick={this.props.handleClick} className="btn btn-primary">Save</button>
                </form>            
            </Fragment>
        )
    }
}
