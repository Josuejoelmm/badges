import React, { Component, Fragment } from 'react'
import BadgesList from '../components/BadgesList'
import configLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import { Link } from 'react-router-dom'
import api from '../api'

class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
    }
    
    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.list();
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render() {
        if (this.state.loading === true) {
            return 'Loading...';
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`
        }

        return (
            <Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={configLogo} alt="logo" />
                        </div>
                    </div>
                </div>            
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            Add Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Badges;
