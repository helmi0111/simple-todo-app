import {
  Button,
  Container,
  FormControl,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

const EditTask = ({ editTodo, todo }) => {
  const [value, setValue] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, todo.id);
    setValue("");
    toast({
      description: "Task added to your list.",
      status: "success",
      duration: 1200,
    });
  };

  return (
    <Container>
      <Stack className="my-4">
        <FormControl>
          <Input
            borderColor="purple.400"
            type="text"
            placeholder="Update task?"
            _placeholder={{ color: "purple.300" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="purple" onClick={handleSubmit}>
          Update Task{<IconPlus color="white" size={16} />}
        </Button>
      </Stack>
    </Container>
  );
};

export default EditTask;
