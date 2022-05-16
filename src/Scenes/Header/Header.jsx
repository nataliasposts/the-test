import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { resetResult } from "store/action/resetResult";


const StyledHeader = styled.header`
max-width: 100%;
position: relative;
z-index: 11;
box-shadow: 0 0 10px rgb(0 0 0 / 10%);
padding: 20px;

.container{
    max-width: 1170px;
    margin: auto;
    padding: 0 15px;
}
.header-menu_link{
    font-size: 20px;
    color: black;
    font-family: 'Roboto-Regular', sans-serif;
    border: none;
    outline: none;
    background: white;
}
`

const Header = (props) =>{
    const dispatch = useDispatch();
    const history = useHistory();


    return(
        <StyledHeader>
            <div className={"container"}>
                <div className={"header-row"}>
                    <nav className={"header-menu"}>
                        <ul className={"header-menu_items"}>
                            <li className={"header-menu_item"}>
                                <button className={"header-menu_link"}
                                     onClick={()=>{
                                        dispatch(resetResult());
                                        history.push("/");
                                      }}>
                                            home
                                 </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header;