import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

import {
  Route,
  Routes,
  Link
} from "react-router-dom";


export const Character = ({ characters = [] }) => {

  console.log(characters)
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
                  <br></br>
                  episodios: {elem.episode.length}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to='/EpisodesByCharacter'> Episodios </Link>
                {
                  elem.episode.map( (e , i) => {
                    
                  })
                }
              </CardActions>
            </Card>
          )
        })
        }

      </div>
    </div>
  )
}


