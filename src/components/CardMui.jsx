import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Link} from 'react-router-dom'


export default function CardMui({ paginated }) {
    return (
      <div>
        {paginated.map((character) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"              
              alt={character.name}
              image={character.image}
              title={character.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {character.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {character.status}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {character.species}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {character.type}
              </Typography>
            </CardContent>
            <CardActions>

              <Button 
              size="small" 
              color="primary" 
              component={Link} 
              to={`/details/${character.id}`}>
                Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
        }