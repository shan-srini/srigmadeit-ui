import { ThemeProvider, CssBaseline, CircularProgress } from '@material-ui/core'
import React, { Suspense, lazy } from 'react'
import theme from './theme.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar.js'
// Pages
import Home from './pages/home/Home'
import Photos from './pages/photos/Photos'
const Manage = lazy(() => import('./pages/manage/Manage'));

const Loading = () => <div>Loading route...</div>;

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter basename="/">
                    <NavBar />
                    <Suspense fallback={<CircularProgress color="secondary" style={{ position: 'absolute', top: '50%', left: '47%' }} />}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/photos" component={Photos} />
                            <Route exact path="/upload" component={Manage} />
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default App;