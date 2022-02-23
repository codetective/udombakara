/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import WrapContent from "../global/WrapContent";

export default function Hero() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row-reverse" }}>
      <Flex flex={1} align={"center"} justify={"center"}>
        <Box>
          <WrapContent>
            <Stack
              spacing={4}
              w={"full"}
              maxW={"lg"}
              py="5"
              textAlign={"center"}
            >
              <Heading
                textAlign="center"
                as="h1"
                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              >
                <Text as={"h1"}>Youthful</Text>
                <Text color={"green.400"} as={"h1"}>
                  Governance!
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                ...together, we can build a government for all citizens by
                building up the leaders of tomorrow
              </Text>
              <Text
                fontSize={{ base: "md", lg: "lg" }}
                textAlign={"center"}
                fontWeight="bold"
              >
                <Box color="green.400">UDO MBAKARA</Box>
              </Text>
            </Stack>
          </WrapContent>
        </Box>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={"/images/udositting.jpg"}
        />
      </Flex>
    </Stack>
  );
}
