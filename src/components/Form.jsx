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

const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
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
            placeholder="What task you have today?"
            _placeholder={{ color: "purple.300" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="purple" onClick={handleSubmit}>
          Add Task{<IconPlus color="white" size={16} />}
        </Button>
      </Stack>
    </Container>
  );
};

export default Form;
