
import React, {useState} from 'react';

import {GoogleLogin} from "react-google-login"
import {LOGIN_CLIENT_ID} from "../constants"

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
//import { useContext } from "react"
//import { LoginContext } from "../App"

export default function Auth() {

    const navigate = useNavigate()
    //const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext)    // eslint-disable-next-line

    const doLogin = () => {
        setIsLoggedIn(true)
        navigate('/Pets')
    }

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [profilePic, setProfilePic] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const responseGoogle = (response) => {
        const { profileObj: {name, email, imageUrl}} = response
        setName(name)
        setEmail(email)
        setProfilePic(imageUrl)
        setIsLoggedIn(true)
    }

    return (
         <div>
            <form>
                <Box 
                    display="flex" 
                    flexDirection={"column"} 
                    maxWidth={400} 
                    alignItems={"center"} 
                    justifyContent={"center"}
                    margin={"auto"}
                    marginTop={4}
                    padding={2}
                    borderRadius={2}
                    boxShadow={"2px 2px 4px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "4px 4px 8px #ccc"},
                        }
                    }
                >
                    <Typography variant="h4" padding={1} >Login</Typography>
                        <TextField margin="normal" variant="outlined" placeholder="Email"/>
                        <TextField margin="normal" id="outlined-basic" variant="outlined" placeholder="Password"/>
                    <Button 
                        sx={{ marginTop: 3, borderRadius: 2 }}
                        variant="contained" 
                        color="secondary" 
                        onClick={doLogin}
                    >
                        Entrar
                    </Button>
                    {/* <Typography variant="h6" padding={3}>Esqueceu a senha?</Typography> */}
                    <GoogleLogin
                        clientId={LOGIN_CLIENT_ID}
                        buttonText='Faça seu login com Google'
                        onSuccess={navigate('/Pets')}
                        onFailure={responseGoogle}
                    />
                    { isLoggedIn ? (
                        <div>
                            <img src={profilePic} alt="profile"/>
                            <p>Name: {name}</p>
                            <p>E-mail: {email}</p>
                        </div>
                    ): '' }
                </Box>
            </form>
        </div> 
    )
}

