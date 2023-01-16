import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ListEpisodes({ episodes = {} } = {}) {

  console.log('episodes', episodes)
  return (
    <div>
      {
        episodes.map((e,i) => {
          return (
            <Card key={i} sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Creado: {e.air_date}
                  <br></br>
                  Episode: {e.episode}
                  <br></br>
                  Nombre: {e.name}
                </Typography>
              </CardContent>
            </Card>
          )
        })
      }
    </div>
  )
}