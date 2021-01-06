import React from "react"
import { RandomPerson } from "../modules/RandomPerson"
// import { Search } from "../modules/Search"
import { Router as MyRouter } from "@reach/router"

const Router = () => {
  return (
    <MyRouter>
      <RandomPerson path="/app/random-person/:results" />
      {/* <Search path="/app/movie/:id"/> */}
    </MyRouter>
  )
}

export default Router
