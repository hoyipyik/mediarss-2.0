import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

// import poster from "../../poster.jpeg"
import "./ItemCard.css"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  cardContent:{
    height: 78,
  }
}));

export default function ItemCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const {item} = props
  const image = item.videoimage 
  const link = item.videolink
  const title = item.videotitle
  const like = item.like

  // const displayTitle = title.length < 57 ? title + holder +"...": title.slice(0,57) + "..."
  // displayTitle = displayTitle + "..."
  return (
<Card className={classes.root} >
      <tag className="card-media">
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      </tag>
      <tag className='card-content'>
      <CardContent className={classes.cardContent}>
        <Typography variant="body2" color="textSecondary" component="p">
          {title}
        </Typography>
      </CardContent>
      </tag>
      <tag className="card-action">
      <CardActions disableSpacing >
        {props.type==="channels"?<tag>
        <IconButton aria-label="add to favorites">
          {like?<FavoriteIcon />:<FavoriteBorderIcon/>}
        </IconButton>
        <IconButton aria-label="share">
          <PlaylistAddIcon />
        </IconButton>
        </tag>:null}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
        >
            <PlayCircleFilledIcon onClick={()=>props.videolinkHandler(link)}/>
        </IconButton>
      </CardActions>
      </tag>
    </Card>
  );
}
