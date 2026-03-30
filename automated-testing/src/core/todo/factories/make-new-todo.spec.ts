import { makeNewTodo } from "./make-new-todo";

describe("makeNewTodo", () => {
  test("should return a new valid todo", () => {
    // arrange
    const expectedTodo = {
      id: expect.any(String),
      description: "My new todo",
      createdAt: expect.any(String),
    };

    // act
    const newTodo = makeNewTodo("My new todo");

    // assert
    expect(newTodo.description).toBe(expectedTodo.description);
    expect(newTodo).toStrictEqual(expectedTodo);
  });
});
