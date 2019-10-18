import React from "react";
import styled from "styled-components";
//import InputS from "../../../../libs/components/inputSearch";
import ViewHeaderBox from "../../../../libs/components/viewHeaderBox";
import SearchSelect from "./search";

export default () => {
  return (
    <ViewHeaderBox>

      <SearchSelect />
     
    </ViewHeaderBox>
  )
}


/*
<InputS />
 <SelectList>
        <select defaultValue={selectOptions[0]}>
          {
            selectOptions.map((option,index) => 
              <option key={index} value={option}>{option}</option>
            )
          }
        </select>
      </SelectList>
*/
const SelectList = styled.div`
    margin:0 auto 0 auto;
    max-width:400px;
    background:rgba(255,255,255,.3);
    padding:0 20px;
    border-radius:20px;
    position:relative;
    
    select{
        height: 40px;
        border:1px solid rgba(235,120,14,.9);
        background:transparent;
        width:100%;
        font-size:16px;
        font-weight:bold;
        color:rgba(255,255,255,.8);
        text-transform:uppercase;
        outline: none;
        scroll-behavior: smooth;
        &:focus{
          outline: none;
        }
        option{
          
          color:white;
          background:rgba(235,120,14,.7);
          border-bottom:rgba(255,255,255,.8);
          border-radius:15px;
          font-weight:bold;
          text-transform:uppercase;
        }
    }
`;



const selectOptions = [
  "id",
  "liquidador",
  "marca",
  "placa"
]