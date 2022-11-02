import React from "react";
import * as C from "./styles";

interface Props {
    onClick?: ()=>void
    title: string
}

export default function KanbanHeader(props: Props) {
  return (
    <C.Container>
      <C.Title>{props.title}</C.Title>
      <C.Chevron onClick={props.onClick}/>
    </C.Container>
  );
}
