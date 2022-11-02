import React from "react";
import * as C from "./styles";
import { GrFormAdd } from "react-icons/gr";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function ColumnContent(props: Props) {
  return (
    <>
      <C.Container>{props.children}</C.Container>
      <C.Footer>
        <C.AddTaskIcon />
      </C.Footer>
    </>
  );
}
