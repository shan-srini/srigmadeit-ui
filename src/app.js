import { ThemeProvider, CssBaseline, CircularProgress } from '@material-ui/core'
import React, { Suspense, lazy } from 'react'
import routes from './routes.js'
import theme from './theme.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar.js'
import Footer from './components/footer/Footer'
// Pages
import Home from './pages/home/Home'
import Photos from './pages/photos/Photos'
import AllEvents from './pages/events/allEvents/AllEvents'
import EventPage from './pages/events/singleEventPage/EventPage'
import Videos from './pages/videos/Videos'
import Contact from './pages/contact/Contact'
const Manage = lazy(() => import('./pages/manage/Manage'));
const NotFound = lazy(() => import('./pages/notFound/NotFound'))

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
                            <Route exact path={routes.events + '/:eventId/:categoryName'} component={EventPage} />
                            <Route exact path={routes.events + '/:eventId/'} component={EventPage} />
                            <Route exact path={routes.videos} component={Videos} />
                            <Route exact path={routes.contact} component={Contact} />
                            <Route exact path={'/404'} component={NotFound} />
                            <Route component={NotFound} />
                        </Switch>
                    </Suspense>
                </BrowserRouter>
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App;