import { validateTodoDescription } from "./validate-todo-description";

describe("validateTodoDescription", () => {
  test("should invalidate if length <= 3 characters", () => {
    const description = "abc";
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([
      "Description must have more than 3 characters",
    ]);
    expect(result.success).toBe(false);
  });

  test("should validate when description > 3 characters", () => {
    const description = "abcd";
    const result = validateTodoDescription(description);

    expect(result.errors).toStrictEqual([]);
    expect(result.success).toBe(true);
  });
});
