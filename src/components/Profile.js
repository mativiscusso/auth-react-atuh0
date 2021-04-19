import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#12c2e9",
        background: "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
    },
    card: {
        maxWidth: 345,
        maxHeight: 600,
        backgroundColor: "rgba(255,255,255,0.6)",
        boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    },
    media: {
        height: 140,
        backgroundSize: "contain",
    },
}));

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const classes = useStyles();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && (
            <>
                <Navbar />
                <div className={classes.root}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={user.picture}
                                title={user.name}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {user.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    component="p"
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </>
        )
    );
}
