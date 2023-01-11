import { ITodo } from 'interfaces';
import { Api } from 'providers';

export type TodoSend = Pick<ITodo, 'task' | 'isDone'>;

const getAllTodos = () => Api.get<ITodo[]>('/v1/todos');

const createTodo = (todo: TodoSend) => Api.post('/v1/todos', todo);

const updateTodo = (id: string, todo: TodoSend) =>
  Api.put(`/v1/todos/${id}`, todo);

export const TodoService = {
  getAllTodos,
  createTodo,
  updateTodo,
};
