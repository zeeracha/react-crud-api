import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function UserCreate() {

    const handleSubmit = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "fname": fname,
        "lname": lname,
        "username": username,
        "email": email,
        "avatar": avatar
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://www.melivecode.com/api/users/create", requestOptions)
        .then(response => response.json())
        // .then(result => console.log(result))
        .then(result => {
            alert(result['message'])
            if (result['status'] === 'ok'){
                window.location.href = '/'
            }
        })
        .catch(error => console.log('error', error));
    } //get above line from postman </> (code snipped), selectd JavaScript - Fetch

    const [fname, setFname] = useState("")
    const [lname, setlname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState("")

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p:2 }}>
        <Typography variant="h6" gutterBottom>
            Create User
        </Typography>
        <form action="" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="fname" label="First Name" variant="outlined" fullWidth required
                    onChange={(e)=> setFname(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="lname" label="Last Name" variant="outlined" fullWidth required
                    onChange={(e)=> setlname(e.target.value)}/>  
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="usename" label="Username" variant="outlined" fullWidth required
                    onChange={(e)=> setUsername(e.target.value)}/>  
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="email" label="email" variant="outlined" fullWidth required
                    onChange={(e)=> setEmail(e.target.value)}/>  
                </Grid>
                <Grid item xs={12}>
                    <TextField id="avatar" label="avatar" variant="outlined" fullWidth required
                    onChange={(e)=> setAvatar(e.target.value)}/>  
                </Grid>
                <Grid item xs={12}>
                <Button type='submit' variant="contained" fullWidth required>CREATE</Button>
                </Grid>
            </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}