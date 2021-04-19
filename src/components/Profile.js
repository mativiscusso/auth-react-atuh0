import React from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        isAuthenticated && (
            <div>
                <Grid container>
                    <Grid item sx={12} md={4}>
                        <Avatar src={user.picture} alt={user.name} />
                    </Grid>
                    <Grid item sx={12} md={8}>
                        <Typography variant="h3">{user.name}</Typography>
                        <Typography variant="h4">{user.email}</Typography>
                    </Grid>
                </Grid>
            </div>
        )
    );
}
