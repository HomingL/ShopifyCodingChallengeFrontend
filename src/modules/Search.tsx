import React, { useState, useEffect, FC } from "react"
import { RouteComponentProps } from "@reach/router"
import { Grid } from "@material-ui/core"
import SearchBox from "./SearchEngine"
import { Movie as MovieType } from "src/types/movie"
import SearchListBox from "./SearchList"
import NominationBox from "./Nomination"
import { Alert } from '@material-ui/lab';


type Props = RouteComponentProps<{
}>


export const Search: FC<Props> = () => {
  // get from local storage
  let nominationsLocalStorage = JSON.parse(localStorage.getItem("nominations") ||"") || []
  const [movies, setMovies] = useState<MovieType[]>([])
  const [nominations, setNominations] = useState<MovieType[]>(nominationsLocalStorage)
  const [title, setTitle] = useState("")

  const handleSearchUpdate = (title: string) => {
      setTitle(title)
    }
  
  const addNomination = (movie: MovieType) => {
    if (nominations.length < 5) {
      setNominations([...nominations, movie])
    } else
      alert("You have finished Nomination!")
  }

  const removeNomination = (movie: MovieType) => {
    setNominations(nominations.filter((m) => m !== movie))
    }
  
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=c15f2303&s=${title}`)
    .then((x) => x.json())
    .then((x) => {setMovies(x.Search)})
    console.log(title)
  },[title])

  useEffect(() => {

    localStorage.setItem("nominations", JSON.stringify(nominations))
    console.log("localstorage :")
    console.log(nominationsLocalStorage)
  }, [nominations])

  return (
    <Grid container>
      <Grid item xs={12}>
        <SearchBox 
        updateSearch={handleSearchUpdate}/>
        </Grid>
        <Grid item md={6} xs={12}>
          <SearchListBox
            movies={movies}
            text={title}
            onAdd={addNomination}
            nominations={nominations}
          />
      </Grid>
      <Grid item md={6} xs={12}>
        <NominationBox movies={nominations} onDelete={removeNomination}/>
      </Grid>
    </Grid>  
      
  )
}

export default Search

