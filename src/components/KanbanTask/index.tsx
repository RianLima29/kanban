import React from 'react'
import * as C from './styles'

interface Props {
    title : string
}

export default function KanbanTask(props : Props) {
  return (
    <C.Container>
        <C.Title>{props.title}</C.Title>
    </C.Container>
  )
}
