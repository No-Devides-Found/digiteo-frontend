import * as React from "react";
import { styled } from "@mui/material/styles";
import Chips from "../common/Chips/Chips";
import { Link } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Chip,
  Avatar,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Stack,
} from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

// const Img = styled('img')({
//   margin: 'auto',
//   display: 'block',
//   maxWidth: '100%',
//   maxHeight: '100%',
// });

// 제목 페이퍼
const StyledPaper = styled(Paper)({
  backgroundColor: "#F1F8E9",
  borderRadius: "20px",
  padding: "1rem",
  margin: "1rem 0",
});
//칩

const StyledChip = styled(Chip)({
  width: "50%",
  backgroundColor: "#C5E1A5",
});
const handleClick = () => {
  console.info("You clicked the Chip.");
};

export default function CreationTemplate({ practice }) {
  return (
    <StyledPaper>
      <Grid container>
        <Grid item xs={3}>
          {/* 링크 아이디 연결 필요 */}
          <Link to={"/detailedpractice/" + practice.id}>
            <img src="img/video.png" alt="video-box" width="100%" />
          </Link>
        </Grid>
        <Grid item xs={9} style={{ padding: "0 2rem" }}>
          <Grid container>
            <Grid item xs={12} mt={2}>
              <Stack
                direction="row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="h6" fontWeight="bold">
                  {practice.title}
                </Typography>
                <Typography variant="body2" style={{ color: "gray" }}>
                  {practice.created_at.slice(0, 10)}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={5} mt={2}>
              <Stack direction="row">
                <Avatar
                  src={practice.user_profile.img}
                  style={{ marginRight: "1rem" }}
                >
                  {practice.user_profile.nickname}
                </Avatar>
                <Typography style={{ lineHeight: "40px" }}>
                  {practice.user_profile.nickname}
                </Typography>
              </Stack>
            </Grid>
            {/*  칩 태그들 */}
            <Grid item xs={7} mt={2} style={{ width: "100%" }}>
              <Grid direction="row" spacing={1}>
                {practice.tag.length <= 4
                  ? practice.tag.map((tag_name) => {
                      return (
                        <StyledChip label={tag_name} onClick={handleClick} />
                      );
                    })
                  : practice.tag.slice(0, 4).map((tag_name) => {
                      return (
                        <StyledChip label={tag_name} onClick={handleClick} />
                      );
                    })}
              </Grid>
            </Grid>

            <Grid item xs={12} mt={1}>
              <Stack direction="row">
                <Typography variant="body2">좋아요</Typography>{" "}
                <FavoriteRoundedIcon style={{ color: "red" }} />
                <Typography Typography variant="body2">
                  {practice.liked_cnt}명
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </StyledPaper>
  );
}
