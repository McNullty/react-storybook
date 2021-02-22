import React from "react";
import {
    Button,
    Container,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography
} from "@material-ui/core";

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
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.field}>
                            <TextField
                                id="password"
                                type="password"
                                name="password"
                                label="Password"
                                required
                                fullWidth
                                variant="outlined"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.field}>
                            <TextField
                                id="confirm-password"
                                type="password"
                                name="confirm-password"
                                label="Confirm Password"
                                required
                                fullWidth
                                variant="outlined"
                                autoComplete="confirm-password"
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            disabled={true}
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