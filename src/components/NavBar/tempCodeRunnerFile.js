import React from 'react';

import {Link} from 'react-router-dom'; 
import Grid from '@mui/material/Grid';

function NavBar() {
  

  return(
    <div>
      <Grid container>
        <Grid item xs>
          <Link to="/홍보마당">메인홈페이지</Link>
        </Grid>
        <Grid item xs>
          <Link to="/signin">로그인</Link>
        </Grid>
        <Grid item xs>
          <Link to="/singup">회원가입</Link>
        </Grid>
        <Grid item xs>
          <Link to="/">메인홈페이지</Link>
        </Grid>
        <Grid item xs>
          <Link to="/">메인홈페이지</Link>
        </Grid>
      </Grid>
    </div>
  )

}

export default NavBar;
