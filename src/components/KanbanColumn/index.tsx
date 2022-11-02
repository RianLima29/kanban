import React from "react";
import * as C from "./styles";
import KanbanHeader from "../KanbanHeader";
import ColumnContent from "../ColumnContent";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function KanbanColumn(props: Props) {
  const [showColumnContent, setShowColumnContent] =
    React.useState<boolean>(true);

  const HandleClick = () => {
    setShowColumnContent(!showColumnContent);
  };

  return (
    <C.Container>
      <KanbanHeader title="À fazer" onClick={HandleClick} />

      {showColumnContent && <ColumnContent>{props.children}</ColumnContent>}
    </C.Container>
  );
}
