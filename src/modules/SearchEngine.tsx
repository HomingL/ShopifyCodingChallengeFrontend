import React, { useState, useEffect, FC } from "react"
import BoxLayout from "../components/BoxLayout"
import { TextField, Typography } from "@material-ui/core"

type SearchBoxProps = {
  updateSearch: (text: string) => void
}

export const SearchBox: FC<SearchBoxProps> = ({updateSearch}) => {
  const [text, setText] = useState("")
  useEffect(() =>{
    updateSearch(text)
  },[text])

  return (
    <BoxLayout>
      <Typography> Movie title </Typography>
      <TextField
        value={text}
        onChange={e => {setText(e.target.value)}}
        variant="outlined"
        placeholder="Search by Movie Name"
        style={{ margin: 8 }}
        fullWidth
      />
    </BoxLayout>
  )
}

export default SearchBox

