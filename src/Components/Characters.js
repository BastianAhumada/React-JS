import Pagination from '@mui/material/Pagination'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

export const Character = ({ characters = [] }) => {


  

  // View 
  return (
    <div className='container'>
      <div className='row'>
        {characters.map((elem, i) => {
          return (
            <Card key={i} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 280 }}
                image={elem.image}
                title={elem.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elem.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  status: {elem.status}
                  <br></br>
                  species: {elem.species}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Episodios</Button>
              </CardActions>
            </Card>


          )
        })
        }

      </div>
    </div>
  )
}

