import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { COLOR_BG, COLOR_MID } from "../../config";

export const Container = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${COLOR_BG};
  padding: 10px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 40px;
  border-top: 2px solid ${COLOR_BG};
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 10px;
`;

export const AddTaskIcon = styled(IoMdAdd)`
  color: ${COLOR_MID};
  cursor: pointer;
  font-size: 25px;
`;
