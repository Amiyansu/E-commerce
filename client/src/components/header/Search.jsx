import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 7px;
  margin-left: 35px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size:unset;
`;

const SearchIconWrapper = styled(Box)`
color:red;
padding:5px;
display:flex;
`;

function Search() {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products, brand and more..." />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
}

export default Search;
