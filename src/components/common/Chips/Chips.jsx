import * as React from "react";
import { Box, Chip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

// 선택한 프로그램 태그칩
export default function Chips({ tags }) {
  //const tags = ['tag1', 'tag2', 'tag3'];
  // console.log(tags)

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {tags &&
        tags.map((tag, index) => (
          <ListItem key={index}>
            {/* Use program.title instead of program */}
            <Chip label={tag} style={{ background: "#E0F7FA" }} />
          </ListItem>
        ))}
    </Box>
  );
}
