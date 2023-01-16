import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ListLocation({ locations = {} } = {} ) {

  return (
      <div className="container">

        <div className="row"> 
          {
            locations.map( (elem, i) => {
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
                      type: {elem.type}
                      <br></br>
                      dimension: {elem.dimension}
                    </Typography>
                  </CardContent>
                </Card>
    
    
              )
            })
          }
        </div>
      </div>
  )


}