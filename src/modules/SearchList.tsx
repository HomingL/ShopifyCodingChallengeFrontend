import React, { FC } from "react"
import BoxLayout from "../components/BoxLayout"
import { Typography, Grid, IconButton, Theme } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from '@material-ui/icons/Add';
import { Movie } from "src/types/movie"


type SearchListBoxProps = {
  text: string
  movies: Movie[]
  onAdd: (movies: Movie) => void
  nominations: Movie[]
  response: string
}

export const SearchListBox: FC<SearchListBoxProps> = ({ text, movies, onAdd, nominations, response }) => {
  let nominationTitles = nominations.map(nomination => nomination.Title)
  console.log(response)

  return (
    <BoxLayout>
      <Typography variant={"h5"}> Results for "{text}" </Typography>
      <SearchList movies={movies} onAdd={onAdd} nominationTitles={nominationTitles} response={response}/>
    </BoxLayout>
  )
}

type SearchListProps = {
  movies: Movie[]
  onAdd: (movies: Movie) => void
  nominationTitles: string[]
  response: string
}

const SearchList: FC<SearchListProps> = ({ movies, onAdd, nominationTitles, response }) => {

  // movies != undefined ? console.log(movies[0].Title) : console.log("length 0")
  const classes = useStyles();

  const handleAdd = (index: number) => {
    onAdd(movies[index]);
  }

  // const nominated = (nominations: Movie[], movie: Movie) => {

  //   nominations.forEach(element => {
  //     if (element.Title === movie.Title){
  //       return true
  //     }
  //   })
  //   return false
  // }

  return (
    <Grid container>
    {movies ? movies.map((movie: Movie, index: number) => {

      if (!nominationTitles.includes(movie.Title)) {
      return (
        <Grid item xs={12} key={index}>
            <SearchListItem movie={movie} index={index} onAdd={handleAdd} displayAdd={true}/>
        </Grid>)
      } else {
        return (        
        <Grid item xs={12} key={index}>
          <SearchListItem movie={movie} index={index} onAdd={handleAdd} displayAdd={false}/>
        </Grid>)
      }
    }): <Typography> {response} </Typography> }
    </Grid>
  )
}

type SearchListItemProps = {
  movie: Movie
  index: number
  displayAdd: boolean
  onAdd: (index:number) => void
}

const SearchListItem: FC<SearchListItemProps> = ({ movie, index, displayAdd, onAdd }) => {
  const classes = useStyles()
  const handleAdd = (index: number) => {
    onAdd(index)
  } 

  return (
    <div className={classes.skill}>
      <Typography variant="subtitle1" className={classes.title} color="primary">
        <strong>{movie.Title}  {movie.Year}</strong>
      </Typography>
      
      {displayAdd && (<IconButton onClick={() => handleAdd(index)}>
        <AddIcon />
      </IconButton>) }
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

export default SearchListBox

