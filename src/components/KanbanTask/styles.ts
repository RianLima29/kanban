import styled from "styled-components";
import { COLOR_LIGHTER, COLOR_MID } from "../../config";

export const Container = styled.div`
  display: flex;
  background-color: ${COLOR_MID};
  width: 100%;
  height: max-content;
  margin-bottom: 10px;
  word-break: break-all;
  padding: 10px;
`;

export const Title = styled.h4`
  color: ${COLOR_LIGHTER};
  
`;
