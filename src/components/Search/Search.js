import React from 'react'
import {Input, Box} from "@chakra-ui/react"
import {filterNotes} from "../../redux/noteSlice"
import { useDispatch } from 'react-redux'

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterNotes(e.target.value));
  }
  return (
    <Box>
      <Input
        maxW={320}
        type="text"
        placeholder="Search"
        onChange={handleChange}
        bg="white"
      />
    </Box>
  )
}

export default Search;