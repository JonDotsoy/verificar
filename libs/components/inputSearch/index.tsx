import React from "react";
import styled from "styled-components";
import SearchIcon from "../icons/BaselineSearch.component";

interface InputProps {
    stylesInput?: object,
    placeholder?: string,
    stylesContainer?:object
}


export default ({ stylesInput, placeholder,stylesContainer }: InputProps) => {
    return (
        <InputSearch style={stylesContainer}>
            <input style={stylesInput}
                className="talleres_input_form"
                name="search_taller"
                type="text"
                placeholder={placeholder ? placeholder : "buscar por"}
            />
            <div className="talleres_search_icon">
                <SearchIcon />
            </div>
        </InputSearch>
    )
}





const InputSearch = styled.div`
    margin:30px auto 0 auto;
    max-width:400px;
    background:rgba(255,255,255,.3);
    padding:12px 20px;
    border-radius:20px;
    position:relative;
    .talleres_input_form{
        height: 100%;
        border:none;
        background:transparent;
        width:100%;
        font-size:16px;
        font-weight:bold;
        color:rgba(255,255,255,.8);
        text-transform:uppercase;
        &:focus{
          outline: none;
        }
      }
     .talleres_input_form::placeholder{
        color:rgba(255,255,255,.7);
    }
    .talleres_search_icon{
        position:absolute;
        top:50%;
        transform:translateY(-50%);
        right:10px;
     }
`;
