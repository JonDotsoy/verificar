import React from "react";
import styled from "styled-components";
import SearchIcon from "../../../../libs/components/icons/BaselineSearch.component";

export default () => {
  return (
    <SHeader>

      <InputSearch >
        <input className="input_form" name="search" type="text" placeholder="BUSCAR POR" />
        <div className="search_icon">
          <SearchIcon />
        </div>
      </InputSearch >
      <SelectList>
        <select defaultValue={selectOptions[0]}>
          {
            selectOptions.map((option,index) => 
              <option key={index} value={option}>{option}</option>
            )
          }
        </select>
      </SelectList>
    </SHeader>
  )
}



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

const InputSearch = styled.div`
    margin:30px auto 0 auto;
    max-width:400px;
    background:rgba(255,255,255,.3);
    padding:12px 20px;
    border-radius:20px;
    position:relative;
    .input_form{
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
     .input_form::placeholder{
        color:rgba(255,255,255,.7);
    }
    .search_icon{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:10px;
     }
`;

const SHeader = styled.div`
  background:#EB780E;
  color:rgba(255,255,255,.7);
  padding:2rem 1rem 3rem 1rem;
`;

const selectOptions = [
  "id",
  "liquidador",
  "marca",
  "placa"
]