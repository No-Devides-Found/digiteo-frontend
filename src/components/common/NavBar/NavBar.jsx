import React from "react";
import { Button, Menu, MenuItem, Grid } from "@mui/material";
import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import { useNavigate } from "react-router-dom";

const NavMenu = ({ data }) => {
  // console.log("pops.items??", props.items.length);
  // console.log(window.location.pathname);
  const navigate = useNavigate();

  const onMenuClick = (length, to) => {
    console.log(length, to);
    if (length === 0) {
      navigate(to);
    }
  };

  return (
    <PopupState variant="popover" popupId="popup-menu">
      {(popupState) => (
        <>
          <Button
            variant="contained"
            {...bindHover(popupState)}
            style={{
              color: "#000",
              backgroundColor: "#FFA000",
              margin: "2rem 0",
            }}
            onClick={() => {
              onMenuClick(data.items.length, data.to);
            }}
          >
            {data.name}
          </Button>
          {data.items.length > 0 ? (
            <Menu {...bindMenu(popupState)}>
              {data.items.map((item, idx) => (
                <MenuItem
                  key={idx}
                  onClick={() => {
                    popupState.close();
                    navigate(`/${item.to}`);
                  }}
                >
                  {item.title}
                </MenuItem>
              ))}
            </Menu>
          ) : null}
        </>
      )}
    </PopupState>
  );
};

export default function NavBar() {
  const navMenuItems = [
    {
      name: "홍보마당",
      items: [
        { title: "홍보·이벤트", to: "홍보마당url" },
        { title: "정보마당", to: "" },
      ], // Menu items for "홍보마당"
      to: "",
    },
    {
      name: "커뮤니티",
      items: [
        { title: "배움터", to: "agora" },
        { title: "나눔터", to: "tip" },
      ], // Menu items for "커뮤니티"
      to: "",
    },
    {
      name: "창작마루",
      items: [], // Menu items for "커뮤니티"
      to: "practiceHome",
    },
    // Menu items for "소개"
    {
      name: "자료실",
      items: [], // Menu items for "커뮤니티"
      to: "",
    },
  ];

  return (
    <div>
      <Grid container justifyContent={"center"}>
        {navMenuItems.map((item, index) => (
          <Grid
            item
            xs={2}
            key={index}
            display={"flex"}
            justifyContent={"center"}
          >
            <NavMenu data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
