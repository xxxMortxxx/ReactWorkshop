import React from 'react';
import TodosList from '../todos-list/TodosList';

const todo1 = { id:1, text: 'todo 1'};
export default () => (
  <div>
    <h2>Todos List</h2>
    <TodosList
      inputValue="fdsfsd"
      todos={ [todo1] }
      onAddTodoClick={() => console.log('click')}
      onNewTodoInputChange={(newInput) => console.log(newInput)}
    />
  </div>
)