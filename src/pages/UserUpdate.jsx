import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function UserUpdate() {

    // ใช้ดึง id ที่อยู่ท้ายมาใส่
    const { id } = useParams();

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://www.melivecode.com/api/users/"+id, requestOptions)
            .then(response => response.json())
            // .then(result => console.log(result))
            .then(result => {
                setFname(result['user']['fname'])
                setLname(result['user']['lname'])
                setUsername(result['user']['username'])
                setEmail(result['user']['email'])
                setAvatar(result['user']['avatar'])
            })
            .catch(error => console.log('error', error));
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "id": id,
        "fname": fname,
        "lname": lname,
        "username": username,
        "email": email,
        "avatar": avatar
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://www.melivecode.com/api/users/update", requestOptions)
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
    const [lname, setLname] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [avatar, setAvatar] = useState("")

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p:2 }}>
        <Typography variant="h6" gutterBottom>
            Update User
        </Typography>
        <form action="" onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="fname"  variant="outlined" fullWidth required
                    onChange={(e)=> setFname(e.target.value)}
                    value={fname}/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="lname" variant="outlined" fullWidth required
                    onChange={(e)=> setLname(e.target.value)}
                    value={lname}/>  
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="usename" variant="outlined" fullWidth required
                    onChange={(e)=> setUsername(e.target.value)}
                    value={username}/>  
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="email" variant="outlined" fullWidth required
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}/>  
                </Grid>
                <Grid item xs={12}>
                    <TextField id="avatar" variant="outlined" fullWidth required
                    onChange={(e)=> setAvatar(e.target.value)}
                    value={avatar}/>  
                </Grid>
                <Grid item xs={12}>
                <Button type='submit' variant="contained" fullWidth required>UPDATE</Button>
                </Grid>
            </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}