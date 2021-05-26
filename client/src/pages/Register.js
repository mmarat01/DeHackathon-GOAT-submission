import { Box, Button, Container, Grid, IconButton, InputAdornment, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(()=>({
    root: {
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center",
        alignItems:"center",
        justifyContent: "center",
    },
    pageTitle:{
        alignItems:"center",
        justifyContent:"center",
        flex:"1",
        marginBottom:"2rem",
    },
    formContainer:{
        display:"flex",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center"
    },
    textbox:{
        margin:8
    },
    submitButton:{
        backgroundColor: "#ff6961",
        borderRadius: "25px",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "24px",
        "&:hover": {
            backgroundColor: "#e6463e",
            textShadow: "none",
        },
    }
}));

export default function Register(){
    const classes = useStyles();
    const [email,setEmail]=useState("");
    const [pw,setPW]=useState("");

    const [showPW, setshowPW] = useState(false)
    const handleShowPW = ()=>{
        setshowPW(!showPW);
    }
    const handleMouseDownPW = (e) => {
    e.preventDefault();
    };

    const handleEmailChange = e => setEmail(e.target.value);
    const handlePWChange = e => setPW(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email,pw);
        const userData = {
            userEmail: email,
            userPassword: pw,
        };
        //add fetch
    }

    return(
        <Container className={classes.root}>
            <Box>
                <Container className={classes.pageTitle}>
                    <Typography variant="h2" component='h1'>Become a member</Typography>
                </Container>
                <Container className={classes.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="h3">Email:</Typography>
                                <TextField
                                    fullWidth
                                    placeholder='user@example.com'
                                    variant='filled'
                                    type='text'
                                    value={email}
                                    onChange={handleEmailChange}
                                    inputProps={{minLength:"1"}}
                                    className={classes.textbox}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" component="h3">Password:</Typography>
                                <TextField
                                        fullWidth
                                        placeholder='*****'
                                        variant='filled'
                                        type={showPW ? 'text' : 'password'}
                                        value={pw}
                                        onChange={handlePWChange}
                                        onMouseDown={handleMouseDownPW}
                                        inputProps={{minLength:"1"}}
                                        className={classes.textbox}
                                        InputProps={{ //from MaterialUI docs
                                            endAdornment:
                                            <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleShowPW}
                                                onMouseDown={handleMouseDownPW}
                                                >
                                                {showPW ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }}
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <Button type='submit' variant="contained" className={classes.submitButton}>
                                Register
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Box>
        </Container>
    )
}