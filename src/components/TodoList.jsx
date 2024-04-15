import { useState } from "react";
import Form from "./Form";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import { Box, Container, Text } from "@chakra-ui/react";
import EditTask from "./EditTask";
uuidv4();

const TodoList = () => {
  const [todoValue, setTodoValue] = useState([]);

  const createTodo = (todo) => {
    setTodoValue([
      ...todoValue,
      {
        id: uuidv4(),
        task: todo,
        isEditing: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodoValue(todoValue.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodoValue(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <Container className="my-4 bg-slate-200 rounded-md">
      <Box className="py-3">
        <Text
          color="purple.400"
          className="flex justify-center font-bold text-lg"
        >
          Simple Todo App
        </Text>
        <Form createTodo={createTodo} />
        <Box className="mx-4">
          {todoValue.map((todo, index) =>
            todo.isEditing ? (
              <EditTask key={index} editTodo={editTask} task={todo} />
            ) : (
              <Todo
                todo={todo}
                key={index}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default TodoList;
