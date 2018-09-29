import React from 'react';
import TodosList from '../todos-list/TodosList';

const todo1 = { id:1, text: 'todo 1'};
export default () => (
  <div>
    <h2>Todos List</h2>
    <TodosList
      todos={ [todo1] }
      onAddTodoClick={(todoText) => console.log(todoText)}
      onNewTodoInputChange={(newInput) => console.log(newInput)}
    />
  </div>
)