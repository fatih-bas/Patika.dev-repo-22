import React from "react";
import { Box, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../../redux/noteSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Note = () => {
  const filterText = useSelector((state) => state.notes.filterText);
  let items = useSelector((state) => state.notes.items);
  const dispatch = useDispatch();
  let filteredNotes = items.filter((item) => {
    return Object.keys(item).some(
      (prop) =>
        prop === "text" &&
        item[prop] !== undefined &&
        item[prop].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <Wrap>
      {filteredNotes.map((item, key) => {
        return (
          <WrapItem key={key}>
            <Box className="note" bg={item.color}>
              <Text className="text" fontSize="lg">
                {item.text}
              </Text>

              <FontAwesomeIcon
                className="trash"
                icon={faTrash}
                onClick={() => dispatch(deleteNote(item.id))}
              />
            </Box>
          </WrapItem>
        );
      })}
    </Wrap>
  );
};

export default Note;
