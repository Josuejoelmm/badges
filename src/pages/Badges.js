import React, { Component, Fragment } from 'react'
import BadgesList from '../components/BadgesList'
import configLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import { Link } from 'react-router-dom'
import api from '../api'
import Loader from '../components/Loader'
import PageError from '../components/PageError'
import MiniLoader from '../components/MiniLoader'

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

        this.Interval = setInterval(this.fetchData, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.Interval)
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
        if (this.state.loading === true && !this.state.data) {
            return <Loader />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error.message} />
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
                    {this.state.loading && <MiniLoader />}
                </div>
            </Fragment>
        )
    }
}
export default Badges;
