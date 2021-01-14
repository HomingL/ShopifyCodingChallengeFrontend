import React, { FC } from "react"
import BoxLayout from "../components/BoxLayout"
import { Typography, IconButton, Theme, Grid } from "@material-ui/core"
import { Movie } from "src/types/movie"
import { makeStyles } from "@material-ui/core/styles"
import DeleteIcon from '@material-ui/icons/Delete';

type NominationBoxProps = {
  movies: Movie[]
  onDelete: (movie: Movie) => void
}

export const NominationBox: FC<NominationBoxProps> = ({ movies, onDelete }) => {

  const handleDelete = (index :number ) => {
    onDelete(movies[index])
  }

  return (
    <BoxLayout>
      <Grid container>
        <Grid item> 
          <Typography variant="h5"> Nominations </Typography>
        </Grid>
        {movies.map((movie, index) => (
            <Grid item xs={12} key={index}>
                <NominationItem movie={movie} index={index} handleDelete={handleDelete}/>
            </Grid>
        ))}
      </Grid>
    </BoxLayout>
  )
}


type NominationItemProps = {
  movie: Movie
  index: number
  handleDelete: (index: Number) => void
}

const NominationItem: FC<NominationItemProps> = ({ movie, handleDelete, index }) => {
  const classes = useStyles();
  return (
    <div className={classes.skill}>
      <Typography variant="subtitle1" className={classes.title} color="primary">
        <strong>{movie.Title}  {movie.Year}</strong>
      </Typography>
      <IconButton onClick={() => handleDelete(index)}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  title: {
    flex: 1
  },
  skills: {
    maxHeight: 550
  },
  skill: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 3),
    borderTop: "1px solid rgba(0, 0, 0, 0.18)"
  }
}));

export default NominationBox
