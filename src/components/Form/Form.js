import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Textarea, Box, Button } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { addNewNote, selectColor } from "../../redux/noteSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  let [text, setText] = useState();
  const colors = useSelector((state) => state.notes.colors);
  const selectedColor = useSelector((state) => state.notes.selectedColor);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("color", selectedColor);
  }, [selectedColor]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    text !== "" &&
      dispatch(addNewNote({ id: nanoid(), text, color: selectedColor }));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Textarea
        value={text}
        onChange={handleInputChange}
        size="md"
        maxW={1000}
        placeholder="Enter your notes here..."
        bg="white"
      />

      <Box mt="5" mb="10" display="flex">
        <Box display="flex">
          {colors.map((item, i) => {
            return (
              <Box
                key={i}
                mr="2"
                className={selectedColor === item ? "colors selected" : "colors"}
                bg={item}
                onClick={() => dispatch(selectColor(item))}
              >
                {selectedColor === item ? (
                  <FontAwesomeIcon className="check" icon={faCheck} />
                ) : null}
              </Box>
            );
          })}
        </Box>

        <Button className="addbtn" type="submit" variant="outline">
          ADD
        </Button>
      </Box>
    </form>
  );
};

export default Form;
