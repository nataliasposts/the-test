import React from "react";
import styled from "styled-components";



const StyledFooter = styled.div`
max-width: 100%;
padding: 30px;
background-color: rgb(33, 33, 33);
flex: 0 0 auto;

.container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}
.footer-title_text{
    font-family: 'Roboto-Regular', sans-serif; 
    font-size: 16px;
    text-align: center;
    color: rgb(255, 255, 255);
}
`

const Footer = (props) =>{
    return(
        <StyledFooter>
            <div className={"container"}>
                 <div className={"footer-title"}>
                     <h3 className={"footer-title_text"}>by Natallia Novik</h3>
                 </div>
             </div>
        </StyledFooter>
    )
}

export default Footer;