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
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={4} width="100%">
        <Input value={input} isReadOnly placeholder="0" size="lg" textAlign="right" />
        <Box fontSize="2xl" fontWeight="bold" height="40px">{result}</Box>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleClick("1")} flex="1">1</Button>
          <Button onClick={() => handleClick("2")} flex="1">2</Button>
          <Button onClick={() => handleClick("3")} flex="1">3</Button>
          <Button onClick={() => handleClick("+")} flex="1">+</Button>
        </HStack>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleClick("4")} flex="1">4</Button>
          <Button onClick={() => handleClick("5")} flex="1">5</Button>
          <Button onClick={() => handleClick("6")} flex="1">6</Button>
          <Button onClick={() => handleClick("-")} flex="1">-</Button>
        </HStack>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleClick("7")} flex="1">7</Button>
          <Button onClick={() => handleClick("8")} flex="1">8</Button>
          <Button onClick={() => handleClick("9")} flex="1">9</Button>
          <Button onClick={() => handleClick("*")} flex="1">*</Button>
        </HStack>
        <HStack spacing={2} width="100%">
          <Button onClick={() => handleClick("0")} flex="1">0</Button>
          <Button onClick={handleClear} flex="1">C</Button>
          <Button onClick={handleCalculate} flex="1">=</Button>
          <Button onClick={() => handleClick("/")} flex="1">/</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;