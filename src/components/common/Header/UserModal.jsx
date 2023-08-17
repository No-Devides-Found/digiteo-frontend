import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Container,
  Stack,
  Avatar,
  Typography,
  Modal,
  Grid,
  Box,
} from "@mui/material";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import { useRecoilValue } from "recoil";
import { withProfile, withProgram } from "../../../recoil/user";

const style = {
  position: "absolute",
  top: "14rem",
  right: 0,
  transform: "translate(-50%, -50%)",
  p: 2,
  "&:focus": {
    outline: "none",
  },
};

const cursorStyle = {
  "&:hover": {
    cursor: "pointer",
  },
};

function UserModal({ open, setOpen }) {
  // 유저 프로필 상태관리
  const userProfile = useRecoilValue(withProfile);
  const userProgramInfo = useRecoilValue(withProgram);
  const userPrograms = userProgramInfo.program_user_maps;

  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      componentsProps={{
        backdrop: {
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        },
      }}
    >
      <Card sx={style}>
        <Stack spacing={"1.5rem"}>
          <Grid container>
            <Grid item xs={3}>
              <Avatar width="100%" src={userProfile.img} />
            </Grid>
            <Grid item xs={7}>
              <Typography
                fontWeight={"bolder"}
                sx={cursorStyle}
                onClick={() => {
                  navigate("/mypage/profile");
                  window.location.reload();
                  handleClose();
                }}
              >
                {userProfile.nickname} 님 &gt;
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <NotificationsNoneRoundedIcon />
            </Grid>
            <Grid item xs={3} />
            <Grid item xs={7}>
              <Typography>
                보유 스템프
                <MilitaryTechRoundedIcon fontSize={"small"} />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography>
                {userProfile.stemp ? userProfile.stemp : 0} 개
              </Typography>
            </Grid>
          </Grid>
          <Container>
            <Stack>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>참여 중인 프로그램</Typography>
                <Typography>
                  {
                    userPrograms.filter(
                      (el) => el.participate === true && el.progress < 100
                    ).length
                  }
                  개
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>이수한 프로그램</Typography>
                <Typography>
                  {
                    userPrograms.filter(
                      (el) => el.participate === true && el.progress === 100
                    ).length
                  }
                  개
                </Typography>
              </Box>
            </Stack>
          </Container>
          <Container>
            <Stack>
              <Typography
                sx={cursorStyle}
                onClick={() => {
                  navigate("/mypage/courses");
                  window.location.reload();
                  handleClose();
                }}
              >
                프로그램 참여 현황
              </Typography>
              <Typography
                sx={cursorStyle}
                onClick={() => {
                  navigate("/mypage/posts");
                  window.location.reload();
                  handleClose();
                }}
              >
                나의 커뮤니티 활동
              </Typography>
              <Typography
                sx={cursorStyle}
                onClick={() => {
                  navigate("/mypage/mypractice");
                  window.location.reload();
                  handleClose();
                }}
              >
                나의 창작마루
              </Typography>
              {/* <Typography sx={cursorStyle}>프로그램 기획자 신청</Typography> */}
            </Stack>
          </Container>
        </Stack>
      </Card>
    </Modal>
  );
}

export default UserModal;
