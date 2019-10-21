import React from 'react'
import Badges from '../pages/Badges'
import BadgeNew from '../pages/BadgeNew'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Layout from './Layout'
import NotFound from '../pages/NotFound'

function App () {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route path="/badges/new" component={BadgeNew} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;