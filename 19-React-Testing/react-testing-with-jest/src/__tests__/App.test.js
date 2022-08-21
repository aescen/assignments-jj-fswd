import { AddTodo } from '../components/helper';

describe('AddTodo helper', () => {
  const todos = [
    {
      id: 1,
      name: 'Learn JSX',
      isComplete: false,
    },
  ];
  const newTodo = {
    id: 2,
    name: 'Learn Jest',
    isComplete: false,
  };

  it('Should add todo to the list', () => {
    // Arrange

    // Act
    const newTodos = AddTodo(todos, newTodo);

    // Assert
    expect(newTodos[0]).toBe(newTodo);
  });

  it('should not mutate the existing todo array', () => {
    // Arrange

    // Act
    const newTodos = AddTodo(todos, newTodo);

    // Assert
    expect(newTodos[1]).not.toBe(newTodo);
  });
});
