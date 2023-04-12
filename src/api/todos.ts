import { Todo } from '../types/Todos';
import { client } from '../utils/fetchClient';

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const addTodo = (userId: number, data: Omit<Todo, 'id'>) => {
  return client.post<Todo>(`/todos?userId=${userId}`, data);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodo = (
  todoId: number,
  updatedCompleted: Omit<Todo, 'id' | 'userId' | 'title'>,
) => {
  const { completed } = updatedCompleted;

  return client.patch(`/todos/${todoId}`, completed);
};
