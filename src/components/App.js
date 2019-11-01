import React from 'react'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import BadgeEdit from '../pages/BadgeEdit'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Layout from './Layout'
import NotFound from '../pages/NotFound'
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;