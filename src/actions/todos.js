
import * as TODOS_TYPES from '../types/todos';

const addTodo = (todoText) => ({
  type: TODOS_TYPES.ADD_TODO,
  text: todoText,
});

const setTodoInputValue = (value) => ({
  type: TODOS_TYPES.SET_TODO_INPUT_VALUE,
  value
});
