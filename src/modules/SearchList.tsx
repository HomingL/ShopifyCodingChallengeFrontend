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
  
}

export const SearchListBox: FC<SearchListBoxProps> = ({ text, movies, onAdd, nominations }) => {
  let nominationTitles = nominations.map(nomination => nomination.Title)

  return (
    <BoxLayout>
      <Typography variant={"h5"}> Results for "{text}" </Typography>
      <SearchList movies={movies} onAdd={onAdd} nominationTitles={nominationTitles}/>
    </BoxLayout>
  )
}

type SearchListProps = {
  movies: Movie[]
  onAdd: (movies: Movie) => void
  nominationTitles: string[]
}

const SearchList: FC<SearchListProps> = ({ movies, onAdd, nominationTitles }) => {

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
            {/* <SearchListItem movie={movie} index={index} onAdd={onAdd}/> */}
          <div className={classes.skill}>
            <Typography variant="subtitle1" className={classes.title} color="primary">
              <strong>{movie.Title}  {movie.Year}</strong>
            </Typography>
            <IconButton onClick={() => handleAdd(index)}>
              <AddIcon />
            </IconButton>
          </div>

        </Grid>)
      } else {
        return (        
        <Grid item xs={12} key={index}>
          {/* <SearchListItem movie={movie} index={index} onAdd={onAdd}/> */}
        <div className={classes.skill}>
          <Typography variant="subtitle1" className={classes.title} color="primary">
            <strong>{movie.Title}  {movie.Year}</strong>
          </Typography>
        </div>
      </Grid>)
      }
    }): <h1> no result</h1>}
    </Grid>
  )
}

// type SearchListItemProps = {
//   movie: Movie
//   index: number
// }

// const SearchListItem: FC<SearchListItemProps> = ({ movie, index}) => {
//   const classes = useStyles();
//   const { movies } = useContext(MoviesContext);

//   return (
//     <div className={classes.skill}>
//       <Typography variant="subtitle1" className={classes.title} color="primary">
//         <strong>{movie.Title}  {movie.Year}</strong>
//       </Typography>
//       <IconButton>
//         <AddIcon onClick={() => handleAdd(index)}/>
//       </IconButton>
//     </div>
//   )
// }

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

