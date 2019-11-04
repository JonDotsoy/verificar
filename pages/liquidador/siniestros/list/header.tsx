import React from "react";
import ViewHeaderBox from "../../../../libs/components/viewHeaderBox";
import SearchSelect from "../../../../libs/components/inputSelect";


export default () => {
  return (
    <ViewHeaderBox>

      <SearchSelect options={options}  />
     
    </ViewHeaderBox>
  )
}

const options = [
  "ID",
  "Cliente",
  "Marca",
  "Placa"
  
];