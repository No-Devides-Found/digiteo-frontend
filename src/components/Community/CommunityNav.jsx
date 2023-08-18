import React from "react";
import { Paper, MenuList, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledMenuList = styled(MenuList)({
  display: "block",
  padding: 0,
  li: {
    justifyContent: "center",
    borderRadius: "0.25rem",
    backgroundColor: "#E9E9E9",
  },
  "li:nth-of-type(1)": {
    backgroundColor: "#FFCC80",
    height: "5rem",
    lineHeight: "5rem",
    fontWeight: "bolder",
  },
  ".currPage": { backgroundColor: "#FFF3E0" },
});




function CommunityNav({page, setPage}) {
  console.log(page); // 배움터 or 나눔터
  const navigate = useNavigate();
  // window.location.pathname.split("/")[2];

  
  //나눔터 or 배움터로 이동
  const handleClick = (event, index) => {
    //setSelectedIndex(index);
    if(index === "tip"){
      navigate('/tip'); 
    }else{
      navigate('/agora');
    }
  };

  return (
    <Paper sx={{ mt: 9 }}>
      <StyledMenuList>
        <MenuItem>커뮤니티</MenuItem>
        <MenuItem
          className={page === "agora" || page==="qa" ? "currPage" : null}
          onClick={(event) => handleClick(event, 'agora')}
        >
          배움터
        </MenuItem>
        <MenuItem
          className={page === "tip" ? "currPage" : null}
          onClick={(event) => handleClick(event, 'tip')}
        >
          나눔터
        </MenuItem>
        
      </StyledMenuList>
    </Paper>
  );
}

export default CommunityNav;





// function LeftList({page}) {
//   console.log(page); // 배움터 or 나눔터

//   const [selectedIndex, setSelectedIndex] = React.useState(page);
//   const navigate = useNavigate();


    
//   //나눔터 or 배움터로 이동
//   const handleListItemClick = (event, index) => {
//     setSelectedIndex(index);
//     if(index === "tip"){
//       navigate('/tip'); 
//     }else{
//       navigate('/agora');
//     }
//   };
 

//   return (
//     <Box sx={{ width: '100%', maxWidth: '20rem', bgcolor: 'orange' ,}}>
//       <List component="nav" aria-label="main mailbox folders">
//         <ListItemButton
//         >
//           <ListItemText primary="커뮤니티" />
//         </ListItemButton>

//       </List>
//       <Divider />
//       <List component="nav" aria-label="secondary mailbox folder">
//         <ListItemButton
//           selected={selectedIndex === 'agora'}
//           onClick={(event) => handleListItemClick(event, 'agora')}
//         >
//           <ListItemText primary="배움터" />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 'tip'}
//           onClick={(event) => handleListItemClick(event, 'tip')}
//         >
//           <ListItemText primary="나눔터" />
//         </ListItemButton>
//       </List>
//     </Box>
//   );
// }

// export default LeftList;