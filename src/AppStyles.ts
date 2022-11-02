import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { COLOR_ACCENT, COLOR_LIGHTER, COLOR_MID } from "./config";

export const Container = styled.div`
  display: flex;
  max-width: 100vw;
  width: 100%;
  height: fit-content;
`;

export const Sidebar = styled.div`
  background-color: ${COLOR_MID};
  position: fixed;
  width: 100px;
  height: 100vh;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 10px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const SidebarText = styled.h1`
  color: #fdeedc;
  transform: rotate(-90deg);
  margin-bottom: 30px;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  padding: 30px;
  margin-left: 100px;
  height: 100vh;
  max-height: 100%;

  @media (max-width: 800px) {
    margin-left: 0;
  }
`;

export const NewListIcon = styled(IoMdAdd)`

  background-color: ${COLOR_ACCENT};
  color: ${COLOR_LIGHTER};
  border-radius: 30px;
  font-size: 60px;
  margin-top: 10px;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  right: 15px;
`
