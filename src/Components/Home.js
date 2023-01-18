import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
      <h1 className="text-center mb-5 mt-5">Bienvenido  a la APi de Rick and Mory </h1>

      <div className='row justify-content-center'>
        <Card sx={{ maxWidth: 345, margin: 2 }} >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Link to='/characters' size="small">Personajes</Link>

            </Typography>
            <Typography variant="body2" color="text.secondary">
              <br></br>
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 345, margin: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <Link to='/episodes' size="small">Episodios</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <br></br>
            </Typography>
          </CardContent>
        </Card>

      </div>

    </div>
  )
}