import React, { FC, useState } from "react"
import BoxLayout from "../components/BoxLayout"
import { Typography, Grid, IconButton, Theme, DialogTitle, DialogContent } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import AddIcon from '@material-ui/icons/Add';
import { Movie } from "src/types/movie"
import { Dialog } from '@material-ui/core';



type SearchListBoxProps = {
  text: string
  movies: Movie[]
  onAdd: (movies: Movie) => void
  nominations: Movie[]
  response: string
}

export const SearchListBox: FC<SearchListBoxProps> = ({ text, movies, onAdd, nominations, response }) => {
  let nominationTitles = nominations.map(nomination => nomination.Title)
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
  const [open, setOpen] = useState(false)

  const handleAdd = (index: number) => {
    onAdd(index)
  }
  const handleOpen = () => setOpen(true)

  return (
    <div className={classes.skill}>
      <Typography variant="subtitle1" className={classes.title} color="primary" onClick={handleOpen}>
        <strong>{movie.Title}  {movie.Year}</strong>
      </Typography>

      {displayAdd && (<IconButton onClick={() => handleAdd(index)}>
        <AddIcon />
      </IconButton>) }
      <SearchListItemDetail open={open} onClose={() => setOpen(false)} movie={movie}/>
    </div>
  )
}

type SearchListItemDetailProps = {
  open: boolean
  onClose: () => void
  movie: Movie
}

const SearchListItemDetail: FC<SearchListItemDetailProps> = ({ open, onClose, movie }) => (

  <Dialog open={open} onClose={onClose} maxWidth="xl" >
    <DialogTitle disableTypography> <Typography> Movie Detail of <b>"{movie.Title}" </b> </Typography> </DialogTitle>
    <DialogContent> 
      <Grid container justify={"center"}>
        <Grid item xs={6}>
          <Typography variant="subtitle1"> Year: {movie.Year} </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1"> imdbID: {movie.imdbID}</Typography>
        </Grid>
        <Grid item xs={12} > <img src={movie.Poster || undefined}></img></Grid>
      </Grid>  
    </DialogContent>
  </Dialog>
)

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

