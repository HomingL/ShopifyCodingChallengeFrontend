import React, { useState, useEffect, FC } from "react"
import { RouteComponentProps } from "@reach/router"
import { Grid } from "@material-ui/core"
import SearchBox from "./SearchEngine"
import { Movie as MovieType } from "src/types/movie"
import SearchListBox from "./SearchList"
import NominationBox from "./Nomination"

type Props = RouteComponentProps<{
}>


export const Search: FC<Props> = () => {
  // get from local storage
  // let nominationsLocalStorage = JSON.parse(localStorage.getItem("nominations") ||"") || []
  const [movies, setMovies] = useState<MovieType[]>([])
  const [nominations, setNominations] = useState<MovieType[]>([])
  const [title, setTitle] = useState("")
  const [error, setError] = useState("")

  const handleSearchUpdate = (title: string) => {
      setTitle(title)
    }
  
  const addNomination = (movie: MovieType) => {
    setNominations([...nominations, movie])
  }

  const removeNomination = (movie: MovieType) => {
    setNominations(nominations.filter((m) => m !== movie))
    }
  
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=c15f2303&s=${title}`)
    .then((x) => x.json())
    .then((x) => {{x.Error == "Incorrect IMDb ID." ? setError("") : setError(x.Error)}
    setMovies(x.Search)
    console.log("error:")
    console.log(error)})
    // .then((x) => {setMovies(x.Search)})
    
  },[title])

  // extract nominations from localstorage
  // useEffect(() => {
  //   let nominationsLocalStorage = JSON.parse(localStorage.getItem("nominations") ||"") || []
  //   setNominations(nominationsLocalStorage)
  // },[])

  useEffect(() => {
    if (nominations.length >= 5){
      alert("You have finished Nomination!")
    }
    // localStorage.setItem("nominations", JSON.stringify(nominations))
    // console.log(nominations)
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
            response={error}
          />
      </Grid>
      <Grid item md={6} xs={12}>
        <NominationBox movies={nominations} onDelete={removeNomination}/>
      </Grid>
    </Grid>  
      
  )
}

export default Search

