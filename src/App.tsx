import React from "react";
import * as C from "./AppStyles";
import KanbanColumn from "./components/KanbanColumn";
import KanbanList from "./components/containers/KanbanList";

function App() {
  return (
    <>
      <C.Container>
        <C.Sidebar>
          <C.SidebarText>Kanban</C.SidebarText>
        </C.Sidebar>
        <C.MainContainer>
          <KanbanList></KanbanList>
          <KanbanList></KanbanList>
          <C.NewListIcon/>
        </C.MainContainer>
      </C.Container>
    </>
  );
}

export default App;
