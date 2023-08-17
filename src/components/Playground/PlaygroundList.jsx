import React from "react";
import { Grid } from "@mui/material";
import { Program } from "../index";

function PlaygroundList({ pathname, programs }) {
  const getProgramProps = (program) => {
    return {
      id: program.id,
      image: program.thumbnail,
      alt: program.title,
      title: program.title,
      info: program.introduce,
      participants: program.participants_cnt,
      rating: program.score ? program.score : 0,
    };
  };

  return (
    <Grid sx={{ p: "2rem", gap: "2rem" }}>
      {programs ? (
        programs.map((item, idx) => {
          return (
            <React.Fragment key={item.program_id}>
              <Program maxWidth={200} {...getProgramProps(item)} />
            </React.Fragment>
          );
        })
      ) : (
        <>검색 결과가 없습니다.</>
      )}
    </Grid>
  );
}
export default PlaygroundList;
