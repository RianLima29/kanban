import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { COLOR_MID } from "../../config";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${COLOR_MID};
  display: flex;
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  transition: 0.5s;
`;

export const Title = styled.h3``;

export const Chevron = styled(FiChevronDown)`
  font-size: 30px;
  cursor: pointer;
`;
