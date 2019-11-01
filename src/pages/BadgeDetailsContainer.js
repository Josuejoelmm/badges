import React from 'react'
import './styles/BadgeDetails.css'
import Loader from '../components/Loader'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'
import api from '../api'

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
            
        }
    }
    handlerDeleteBadge = async e => {
        this.setState({ loading: true, error: null })

        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            )
            
            this.setState({ loading: false})
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleCloseModal = e => {
        this.setState({
            modalIsOpen: false
        })
    }
    
    handleOpenModal = e => {
        this.setState({
            modalIsOpen: true
        })
    }
    render() {
        if (this.state.loading) {
            return <Loader />
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }
        return(
            <BadgeDetails 
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
                onDeleteBadge={this.handlerDeleteBadge}
                badge={this.state.data} 
            />
        )
    }
}

export default BadgeDetailsContainer;