import React, { useState } from "react";
import { Button, Menu, MenuItem, Grid } from "@mui/material";
import PopupState, { bindHover, bindMenu } from "material-ui-popup-state";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography } from "@mui/material";

const NavMenu = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 페이지 주소를 가져옵니다.
  const [currentPath, setCurrentPath] = useState(location.pathname); // 상태 초기화

  const onMenuClick = (length, to) => {
    if (length === 0) {
      navigate(to);
    }
  };

  React.useEffect(() => {
    // 페이지 주소 변경 시 상태 업데이트
    setCurrentPath(location.pathname);
  }, [location]);

  const SpicedPath = currentPath?.replace("/", "");
  const Spicedto = data.to?.replace("/", "");

  const isCurrentPath = SpicedPath === Spicedto;

  const itemsTo = data.items.map((item) => item.to);
  const isPathIn = itemsTo.includes(SpicedPath);

  return (
    <PopupState variant="popover" popupId="popup-menu">
      {(popupState) => (
        <>
          <Button
            variant="contained"
            {...bindHover(popupState)}
            style={{
              color: "#000",
              backgroundColor: isCurrentPath || isPathIn ? "#FFA000" : "#fff",
              margin: "2rem 0",
              width: "12vw",
              height: "6vh",
              whiteSpace:"nowrap",
            }}
            onClick={() => {
              onMenuClick(data.items.length, data.to);
            }}
          >
            <Typography
              fontSize={"1vw"}
              fontWeight="bolder"
              fontFamily={"Kumbh Sans"}
              pt={"0.1vw"}
            >
              {data.name}
            </Typography>
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
                  style={{ fontSize: '1vw', width:"12vw",height:"2rem", display:"flex", alignItems: "center", justifyContent: "center"  }}
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

export default function TestNavBar() {
  const navMenuItems = [
    {
      name: "홍보마당",
      items: [
        { title: "홍보·이벤트", to: "#" },
        { title: "정보마당", to: "#" },
      ], // Menu items for "홍보마당", url 추가해야함
    },
    {
      name: "커뮤니티",
      items: [
        { title: "배움터", to: "agora" },
        { title: "나눔터", to: "tip" },
      ], // Menu items for "커뮤니티"
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
      to: "#", //자료실 url추가 필수
    },
  ];

  return (
    <div>
      <Grid container justifyContent={"center"} gap={"4rem"}>
        {navMenuItems.map((item, index) => (
          <Grid
            item
            
            key={index}
            display={"flex"}
            justifyContent={"center"}
            mt={"-2vw"}
            
          >
            <NavMenu data={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
