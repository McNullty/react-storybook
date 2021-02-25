import React, {useEffect, useState} from "react";
import {
    Button,
    Container,
    Grid, IconButton, InputAdornment,
    makeStyles,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    field: {
        margin: theme.spacing(2, 20, 0),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const SignUpForm: React.FC = () => {
    const classes = useStyles();

    const [visible, setVisible] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const toggleVisibility = () => {
        setVisible(!visible)
    };

    useEffect(() => {
        const enableButton =
            firstName.length > 0 &&
            lastName.length > 0 &&
            email.length > 0 &&
            password.length > 0 && password === confirmPassword;

        setDisableButton(!enableButton);
    }, [firstName, lastName, email, password, confirmPassword]);

    return (
        <React.Fragment>
            <Container maxWidth="md">
                <Paper className={classes.paper}>
                    <Typography align={"center"} component={"h1"} variant={"h4"}>Create account</Typography>

                    <Grid container spacing={2} >
                        <Grid item xs={12} className={classes.field}>
                            <TextField
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                required
                                fullWidth
                                autoFocus
                                variant="outlined"
                                autoComplete="fname"
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.field}>
                            <TextField
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                required
                                fullWidth
                                variant="outlined"
                                autoComplete="lname"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.field}>
                            <TextField
                                id="email"
                                name="email"
                                label="Email Address"
                                required
                                fullWidth
                                variant="outlined"
                                autoComplete="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.field}>
                            <TextField
                                id="password"
                                type={visible ? 'text' : 'password'}
                                name="password"
                                label="Password"
                                required
                                fullWidth
                                variant="outlined"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={toggleVisibility}>
                                                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                value={password}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.field}>
                            <TextField
                                id="confirmPassword"
                                type={visible ? 'text' : 'password'}
                                name="confirmPassword"
                                label="Confirm Password"
                                required
                                fullWidth
                                variant="outlined"
                                autoComplete="confirm-password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={toggleVisibility}>
                                                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                                value={confirmPassword}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            disabled={disableButton}
                            className={classes.submit}
                            fullWidth={
                                false
                            }
                        >
                            Create Account
                        </Button>
                    </Grid>
                </Paper>
            </Container>
        </React.Fragment>
    );
};