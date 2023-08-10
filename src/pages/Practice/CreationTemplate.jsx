import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Avatar from '@mui/material/Avatar';


const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CreationTemplate(key) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 700,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 200, maxHeight:170}}>
            <Img alt="complex" style={{    width:'200px', height:'150px', objectFit:'cover'}} src="\asset\thumbnail.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container  spacing={2}>
            <Grid item xs={12}>
              <Typography gutterBottom component="div">
                  {key.title}
              </Typography>
            </Grid>
              
            <Grid item xs>
              <Grid container wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Avatar>User</Avatar>
                  </Grid>
                  <Grid item>
                    <Typography noWrap>닉네임</Typography>
                  </Grid>
              </Grid>
            </Grid>

            <Grid item XS>
             
            </Grid>
          </Grid>
 
        </Grid>
      </Grid>
    </Paper>
  );
}