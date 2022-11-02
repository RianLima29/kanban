import styled from "styled-components";
import { COLOR_LIGHT, COLOR_LIGHTER } from "../../../config";

export const Container = styled.div`
  width: 100%;
  max-width: calc(100% - 100px);
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 15px 0 15px 0;
`;

export const MainContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  background-color: ${COLOR_LIGHT};
`;
