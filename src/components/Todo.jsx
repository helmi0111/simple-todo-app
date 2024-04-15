import { Box, Container, Text } from "@chakra-ui/react";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const Todo = ({ todo, deleteTodo, editTodo }) => {
  return (
    <>
      <Container className="flex justify-between rounded-md my-3 py-3 bg-slate-100">
        <Text className="font-semibold" color="purple.400">
          {todo.task}
        </Text>
        <Box className="flex items-center gap-x-3">
          {/* <IconEdit color="#805AD5" onClick={() => editTodo(todo.id)} /> */}
          <IconTrash color="#805AD5" onClick={() => deleteTodo(todo.id)} />
        </Box>
      </Container>
    </>
  );
};

export default Todo;
