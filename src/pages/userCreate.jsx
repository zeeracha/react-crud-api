import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function UserCreate() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p:2 }}>
        <Typography variant="h6" gutterBottom>
            Create User
        </Typography>
        <form action="">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="fname" label="First Name" variant="outlined" fullWidth required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="lname" label="Last Name" variant="outlined" fullWidth required/>  
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="usename" label="Username" variant="outlined" fullWidth required/>  
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="email" label="email" variant="outlined" fullWidth required/>  
                </Grid>
                <Grid item xs={12}>
                    <TextField id="avatar" label="avatar" variant="outlined" fullWidth required/>  
                </Grid>
                <Grid item xs={12}>
                <Button variant="contained" fullWidth required>CREATE</Button>
                </Grid>
            </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}