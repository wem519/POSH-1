import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export const Box = styled.div<{ isTrue: boolean }>`
  display: flex;
  align-items: center;
  background: #fff;
  height: 30px;
  padding: 10px;
  border-radius: 30px;
  outline: ${(props: any) => (props.isTrue ? "1px solid #8915a6;" : "none")};
  transition: all 0.5s ease-in-out;
  margin-top: 1px;
`;
export const Search = styled.input<{ isTrue: boolean }>`
  border: none;
  background: none;
  float: left;
  color: #555;
  font-size: 13px;
  transition: 0.4s;
  width: ${(props: any) => (props.isTrue ? "120px" : "0px")};
  margin-right: ${(props: any) => (props.isTrue ? "120px" : "0px")};
  padding: 0px ${(props: any) => (props.isTrue ? "6px" : "0px")};
  outline: none;
`;
export const Btn = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  color: #eb5757;
  background: transparent;
  border: none;
  transition: 0.4s;
`;
export const Img = styled(SearchIcon)<{ isTrue: boolean }>`
  color: ${(props: any) => (props.isTrue ? "#8915a6" : "#555")};
  width: 20px;
`;

export default function SearchBar01() {
  const [isTrue, setIsTrue] = useState(false);
  const [value, setValue] = useState("");
  const handleIsTrue = () => {
    setIsTrue((prev) => !prev);
    if (!isTrue) {
      setValue("");
    }
  };
  const handleOnChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <Box isTrue={isTrue}>
      <Search
        placeholder="Search"
        onChange={handleOnChange}
        value={value}
        isTrue={isTrue}
      ></Search>
      <Btn onClick={handleIsTrue}>
        <Img isTrue={isTrue}></Img>
      </Btn>
    </Box>
  );
}
