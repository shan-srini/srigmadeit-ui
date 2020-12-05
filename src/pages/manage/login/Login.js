import React from 'react';
import { Container, TextField, Button, Typography, Snackbar } from '@material-ui/core';
import srigmadeitAPI from '../../../services/srigmadeitAPI.service';
import style from './Login.style.js';

/**
 * Only component that will need Login is Upload for now, and most likely forever.
 * Therefore there's really no need to extend Login and ProtectedRoute functionality to the entire site...
 * If in the full site user session persistence is required, preferred route is to set up quick redux store
 * and have ibmConfig on success login in there. UI needs access to COS creds, and cookies is not a safe place
 * to store, since it cannot be httpOnly & sameSite. Authenticated components can just be done via decorator pattern
 * around Routes as required in App.js
 */
function Login(props) {
    const classes = style();
    // callback on success to set IBM secret
    const setIbmConfig = props.setIbmConfig;
    // callback on success to let parent component know success
    const signalLoginSuccess = props.setLoggedIn;
    // state
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loginFail, setLoginFail] = React.useState(false);
    // util
    const loginAttempt = () => {
        srigmadeitAPI.login(username, password)
            .then((response) => {
                if (response.success) {
                    setIbmConfig(response.ibmConfig);
                    signalLoginSuccess(true);
                } else {
                    setLoginFail(true)
                }
            })
    }
    return (
        <Container style={{ height: '100vh' }} maxWidth="xs">
            <div className={classes.paper}>
                <Typography variant="h3">
                    Login
                </Typography>
                <div className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Username"
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => loginAttempt()}
                    >
                        Login
                    </Button>
                    <Container maxWidth="md">
                        <Snackbar className={classes.errorToast} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={loginFail} autoHideDuration={5000}>
                            <Typography>Username/Password invalid</Typography>
                        </Snackbar>
                    </Container>
                </div>
            </div>
        </Container>
    )
}

export default Login;