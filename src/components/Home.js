import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core";
import background from "../images/background.jpg";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
    },
    title: {
        fontSize: "10vw",
        margin: "1rem 0",
        color: "#fff",
    },
});

export default function Home() {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <div className={classes.root}>
                    <h1 className={classes.title}>Welcome</h1>
                    <Button variant="contained" color="secondary" size="large">
                        SEE MORE
                    </Button>
            </div>
        </>
    );
}
