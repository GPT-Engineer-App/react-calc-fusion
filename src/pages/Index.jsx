import { useState } from "react";
import { Container, VStack, HStack, Button, Input, Box } from "@chakra-ui/react";

const Index = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Note: eval can be dangerous in production code
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Input value={input} isReadOnly placeholder="0" size="lg" />
        <Box fontSize="2xl" fontWeight="bold">{result}</Box>
        <HStack spacing={2}>
          <Button onClick={() => handleClick("1")}>1</Button>
          <Button onClick={() => handleClick("2")}>2</Button>
          <Button onClick={() => handleClick("3")}>3</Button>
          <Button onClick={() => handleClick("+")}>+</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleClick("4")}>4</Button>
          <Button onClick={() => handleClick("5")}>5</Button>
          <Button onClick={() => handleClick("6")}>6</Button>
          <Button onClick={() => handleClick("-")}>-</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleClick("7")}>7</Button>
          <Button onClick={() => handleClick("8")}>8</Button>
          <Button onClick={() => handleClick("9")}>9</Button>
          <Button onClick={() => handleClick("*")}>*</Button>
        </HStack>
        <HStack spacing={2}>
          <Button onClick={() => handleClick("0")}>0</Button>
          <Button onClick={handleClear}>C</Button>
          <Button onClick={handleCalculate}>=</Button>
          <Button onClick={() => handleClick("/")}>/</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;