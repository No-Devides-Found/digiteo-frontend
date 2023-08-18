import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Favorite, TypeSpecimenTwoTone } from "@mui/icons-material";
import { Paginations } from "../../components";
import { server } from "../../constants";

function EvaluationList({ reviews }) {
  //   "reviews": [
  //     {
  //         "id": 1,
  //         "user_profile": {
  //             "id": 1,
  //             "user_id": 1,
  //             "nickname": "하람",
  //             "birth": "2002-08-09",
  //             "job": "student",
  //             "grade": "3",
  //             "department": "국민대학교",
  //             "img": "accounts/profile/20230817/playground_WPU5ca9.jpg"
  //         },
  //         "created_at": "2023-08-18T06:45:00.034058",
  //         "updated_at": "2023-08-18T06:45:00.034058",
  //         "score": 5,
  //         "content": "조숩니다 아주 조와요",
  //         "user": 1,
  //         "program": 1
  //     }
  // ],

  return reviews.length ? (
    <div style={{ margin: "0", padding: "0" }}>
      {reviews.map((review, index) => (
        <Box
          style={{
            margin: "0 0 1rem 0",
            backgroundColor: "#F1F8E9",
            borderRadius: "1rem",
            fontFamily: "Kumbh Sans",
          }}
          sx={{ width: "100%", margin: "0", padding: "1.5rem 2rem" }}
          key={index}
        >
          <Grid container style={{ height: "100%" }}>
            <Grid
              item
              xs={1}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Avatar
                alt={review.user_profile.nickname}
                src={`${server}` + review.user_profile.img}
              />
            </Grid>

            <Grid item xs={11}>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography
                    fontFamily={"Krona Ones"}
                    fontWeight={"bold"}
                    variant="h6"
                    gutterBottom
                  >
                    {review.user_profile.nickname}
                  </Typography>

                  <Button style={{ color: "gray" }}>
                    {" "}
                    삭제하기 <DeleteOutlineIcon />
                  </Button>
                  {/* <Button style={{color:"gray"}}>신고하기 <CampaignRoundedIcon /></Button> */}
                </Grid>

                <Grid item xs={12}>
                  <Typography fontFamily={"Kumbh Sans"}>
                    {review.content}
                  </Typography>
                </Grid>

                <Grid item xs={12} mt={2} flex>
                  <Stack
                    direction="row"
                    style={{ display: "flex", justifyContent: "end" }}
                  >
                    <Typography variant="body2">
                      {review.created_at.slice(0, 10)}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      ))}

      <Grid item xs={12} mt={4} mb={5}>
        <Paginations />
      </Grid>
    </div>
  ) : (
    <>댓글이 없습니다.</>
  );
}

export default EvaluationList;

const label = { inputProps: { "aria-label": "Checkbox demo" } };
