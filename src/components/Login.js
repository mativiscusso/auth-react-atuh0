import React from "react";
import { TextField, makeStyles, Button, Typography } from "@material-ui/core";
import Navbar from './Navbar'


const useStyles = makeStyles({
    root: {
        height: "100vh",
        display: "flex",
        itemsAlign: "center",
        background: "#12c2e9",
        background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)"
    },
    form: {
        padding: "2rem",
        maxWidth: 400,
        margin: "auto",
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4.0px )",
        borderRadius: 10,
        border: "1px solid rgba( 255, 255, 255, 0.08 )",
    },
});

export default function Login() {
    const classes = useStyles();

    return (
        <>
        <Navbar/>
        <div className={classes.root}>
            <form className={classes.form} noValidate autoComplete="off">
                <Typography variant="h4" align="center">
                    SIGN IN
                </Typography>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="email"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="secondary" fullWidth style={{marginTop: "1rem"}}>
                    Log In
                </Button>
            </form>
        </div>
        </>
    );
}
