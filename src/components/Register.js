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
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.07 )",
        backdropFilter: "blur( 4.0px )",
        borderRadius: 20,
        border: "1px solid rgba( 255, 255, 255, 0.09 )",
    },
});

export default function Register() {
    const classes = useStyles();

    return (
        <>
        <Navbar/>
        <div className={classes.root}>
            <form className={classes.form} noValidate autoComplete="off">
                <Typography variant="h4" align="center">
                    SIGN UP
                </Typography>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="pass"
                    label="Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="rePass"
                    label="Repeat Password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="secondary" fullWidth style={{marginTop: "1rem"}}>
                    REGISTER
                </Button>
            </form>
        </div>
        </>
    );
}
