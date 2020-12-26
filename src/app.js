import { ThemeProvider, CssBaseline, CircularProgress } from '@material-ui/core'
import React, { Suspense, lazy } from 'react'
import routes from './routes.js'
import theme from './theme.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar.js'
// Pages
import Home from './pages/home/Home'
import Photos from './pages/photos/Photos'
import AllEvents from './pages/events/allEvents/AllEvents'
import EventPage from './pages/events/singleEventPage/EventPage'
const Manage = lazy(() => import('./pages/manage/Manage'));

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter basename="/">
                    <NavBar />
                    <Suspense fallback={<CircularProgress color="secondary" style={{ position: 'absolute', top: '50%', left: '47%' }} />}>
                        <Switch>
                            <Route exact path={routes.home} component={Home} />
                            <Route exact path={routes.photos} component={Photos} />
                            <Route exact path={routes.upload} component={Manage} />
                            <Route exact path={routes.events} component={AllEvents} />
                            <Route exact path={routes.events + '/:eventName'} component={EventPage} />
                            <Route component={() => <div>notfound</div>} />
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App;