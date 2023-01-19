import { useState, useEffect } from "react"
import { Character } from '../Characters'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography';
export default ({ characters }) => {

  
  if (characters) {

    const Characters = [...characters]
    const [characterInfo, setCharacterInfo] = useState([])

    useEffect(() => {
      sdd(Characters)
    }, [])


    function sdd(characters) {
      characters.forEach(e => {
        fetch(e).then(e => e.json()).then(data => {
          setCharacterInfo((oldArray) => [...oldArray, data])
        }).catch(e => console.log(e))
      })
    }

    return (
      <div className="container">
        <div className="row">
          {
            characterInfo.map((elem, i) => {
              return (
                <Card key={i} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 280, margin: 3 }}
                    image={elem.image}
                    title={elem.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{ color: "blue" }}>
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
                  </CardContent>
                </Card>
              )
            })
          }
        </div>

      </div>


    )
    console.log(characterInfo)
    // Characters.map(e => {
    //   fetch(e).then(e => e.json()).then(data => {
    //     setCharacterInfo(data)
    //     return {}
    //   }).catch(e => console.log(e))
    // })
  }
  // } 
}