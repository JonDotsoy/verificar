import React, { useState } from "react";
import styled from 'styled-components';
import ArrowDropDown from "../icons/ArrowDropDown.component";

interface PropsComp {
    options: any[];
    handleSelect(item: string): void;
}

export default ({ options, handleSelect }: PropsComp) => {
    const [showOptions, setShowOptions] = useState(false);
    const handleOptions = () => setShowOptions(!showOptions);

 

    const clickEvent = (item:string,index:number)=> {
        handleSelect(item);
        handleOptions();
 
    }

    return (
        <>
            <ContentIcon onClick={() => handleOptions()}>
                <ArrowDropDown />
            </ContentIcon>
            {
                showOptions ?
                    <ContentOptions>
                        {
                            
                            options.map((item, index) =>
                                <li className="option" onClick={() => clickEvent(item,index)} key={index}>{item}</li>
                            )
                        }
                    </ContentOptions>
                    :
                    null
            }
        </>
    )
}
const ContentOptions = styled.ul`
    position:absolute;
    z-index:1;
    right:0;
    .option{
        background:rgba(208,108,13,.75);
        min-width:180px;
        color:white;
        text-transform:uppercase;
        padding:12px 10px;
        text-align:center;
        cursor:pointer;
        border-radius:10px;
        border-bottom:3px solid rgba(208,108,13,.7);
        transition:all .3s;
        &:hover{
            background:#E8CF2F;
            
        }
    }
`;
const ContentIcon = styled.div`
    cursor:pointer;
    svg{
        fill:black;
        transform:scale(1.3);
    }
`;