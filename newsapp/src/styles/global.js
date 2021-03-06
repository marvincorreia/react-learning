import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    *{
      margin:0;
      padding:0;
      outline:0;
      box-sizing:border-box;
    }
    body{
      -webkit-font-smoothing:antialiased;
    }

    body, input, button, li, a{
      font: 14px Roboto sans-serif;
    }

    button{ 
      cursor: pointer;
    }
    #root{
      /* max-width:1020px; */
      /* margin:0 auto; */
      /* padding:0 20px 50px; */
    }

`;
