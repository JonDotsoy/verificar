import React from "react";
import styled from "styled-components";
import SearchIcon from "../../../libs/components/icons/BaselineSearch.component";

export default () => {
    return (
        <LiquidadoresHeader>
            
            <div className="talleres_search">
                <input className="talleres_input_form" name="search_taller" type="text" placeholder="BUSCAR POR" />
                <div className="talleres_search_icon">
                    <SearchIcon />
                </div>

            </div>
        </LiquidadoresHeader>
    )
}

const LiquidadoresHeader = styled.div`
  background:#EB780E;
  color:rgba(255,255,255,.7);
  padding:2rem 1rem 3rem 1rem;
   
   .talleres_search{
    margin:30px auto 0 auto;
    max-width:400px;
    background:rgba(255,255,255,.3);
    padding:12px 20px;
    border-radius:20px;
    position:relative;
    & ::placeholder{
      color:rgba(255,255,255,.7);
    }
   
     .talleres_search_icon{
       position:absolute;
       top:50%;
       transform:translateY(-50%);
       right:10px;
    }
     .talleres_input_form{
      height: 100%;
      border:none;
      background:transparent;
      width:85%;
      font-size:16px;
      font-weight:bold;
      color:rgba(255,255,255,.8);
      text-transform:uppercase;
      &:focus{
        outline: none;
      }
    }
  }
`;