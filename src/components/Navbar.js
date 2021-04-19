import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    navbar: {
        width:"100%",
        position: "fixed",
        backgroundColor: "rgba(255,255,255,0.1)",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.05)"
    },
    menu: {
        width: "20%",
        display: "flex",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto"
    },
    itemsMenu: {
        fontSize: 16,
        textTransform: "uppercase",
        fontWeight: "bold",
        color: "#fff"
    }
})

export default function Navbar() {
    const classes = useStyles()

    return (
        <div>
            <nav className={classes.navbar}>
                <ul className={classes.menu}>
                    <li><Link className={classes.itemsMenu} to="/">Home</Link></li>
                    <li><Link className={classes.itemsMenu} to="/register">Sign Up</Link></li>
                    <li><Link className={classes.itemsMenu} to="/login">Sign In</Link></li>
                </ul>
            </nav>
        </div>
    )
}
