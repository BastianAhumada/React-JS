import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import ShowInfoEpisode from './ShowInfoEpisodes'
import Locations from './Locations'

import {
  Route,
  Routes,
  Link
} from "react-router-dom";


export const Character = ({ characters = [] }) => {

  function RetrieveEpisode(episode = '1') {
    let url = ' https://rickandmortyapi.com/api/episode/'

    if (episode) {
      url = `${url}${episode}`
    }

    return fetch(url)
      .then(e => e.json())
      .then(data => data)
  }

  //Function Declarations


  console.log('Characters', characters)
  // View 
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        {characters.map((elem, i) => {
          return (
            <Card key={i} sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 280, margin: 3 }}
                image={elem.image}
                title={elem.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{color:"blue"}}>
                  {elem.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  status: {elem.status}
                  <br></br>
                  species: {elem.species}
                  <br></br>
                  episodios: {elem.episode.length}
                  <br></br>
                </Typography>
                <Locations locationInfo={elem.location.url}/>

              </CardContent>
              <CardActions>
              </CardActions>
              <CardActions>
                {
                  elem.episode.map((e, i) => {
                    <h1 key={i}> {i} </h1>
                    {
                      if (i > 5) return (
                        null
                      )
                      else return (
                        <div className='container'>
                          <div className='row m-2'>
                              <ShowInfoEpisode infoEpisodes={RetrieveEpisode(i + 1)}></ShowInfoEpisode>
                          </div>
                        </div>

                      )
                    }


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


