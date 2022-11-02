import React from "react";
import KanbanHeader from "../../KanbanHeader";
import KanbanColumn from "../../KanbanColumn";
import KanbanTask from "../../KanbanTask";
import * as C from "./styles";

export default function KanbanList() {
  const [showColumnContent, setShowColumnContent] =
    React.useState<boolean>(true);

  const HandleClick = () => {
    setShowColumnContent(!showColumnContent);
  };

  return (
    <C.Container>
      <KanbanHeader title="Lista 01" onClick={HandleClick} />

      {showColumnContent && (
        <C.MainContainer>
          <KanbanColumn>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
          </KanbanColumn>
          <KanbanColumn>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
          </KanbanColumn>
          <KanbanColumn>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
            <KanbanTask title="Task"/>
          </KanbanColumn>
        </C.MainContainer>
      )}
    </C.Container>
  );
}
