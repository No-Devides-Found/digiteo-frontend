import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography, Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from "@mui/material/styles";
 

const StyledCard = styled(Card)({
  margin: "0 1rem", 
  maxwidth: "20rem",
  display: "inline-block",
  borderTopLeftRadius: "3rem",
  borderTopRightRadius: "3rem",

  
})

const StyledCardMedia  = styled(CardMedia)({
  borderRadius: "3rem", 
})

function Program(props) {
  return (
        <StyledCard sx={{ maxWidth: 345 }}>
          <CardActionArea>
              <StyledCardMedia
                  component="img"
                  height="200"
                  
                  image={props.image}
                  alt={props.alt}
                />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
    
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.info}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            {props.button1}
           
            </Button>
            <Button size="small" color="primary">
            {props.button2}
            </Button>
          </CardActions>
        </StyledCard>

        

    
  );
}
export default Program;