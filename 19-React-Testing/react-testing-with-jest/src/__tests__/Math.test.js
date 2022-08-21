import { Add, Substract, Multiplication } from '../Math'

test('Return sum of two arguments', () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const added = Add(a, b);

  // Assert
  expect(added).toBe(5);

})

test('Return substraction of a - b', () => {
  // Arrange
  const a = 3;
  const b = 2;

  // Act
  const subtracted = Substract(a, b);

  // Assert
  expect(subtracted).toBe(1);
})

test('Return multiplication of two arguments', () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const multiplied = Multiplication(a, b);

  // Assert
  expect(multiplied).toBe(6);
})