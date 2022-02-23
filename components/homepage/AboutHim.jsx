import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Text,
  Button,
  Center,
  Stack,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

export default function About() {
  return (
    <Box>
      <Container maxW={"container.xl"} py={"80px"} px={8}>
        <Text
          as="h2"
          textTransform={"capitalize"}
          fontWeight={"bolder"}
          className="mfont"
          color="green.400"
          fontSize={["4xl", "4xl", "5xl", "5xl"]}
          textAlign={"center"}
          py="10"
        >
          Meet The Visionary
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <Flex>
            <Image
              m="auto"
              rounded={"md"}
              alt={"feature image"}
              src={"/images/aboutudo.jpg"}
              objectFit={"cover"}
            />
          </Flex>
          <Stack spacing={4}>
            <Text color={"gray.700"} fontSize={"md"} className="ofont">
              Udo Mbakara is the founder and the life patron of Udo Mbakara
              Foundation, an NGO he established in year 2000 for the sole
              purpose of providing scholarship awards to the youths of Aka Ikot
              Udo Eno community.
            </Text>
            <Text color={"gray.700"} fontSize={"md"} className="ofont">
              Born in Aka Ikot Udo Eno in Ibiono Ibom Local Government Area of
              Akwa Ibom State. He is an accomplished engineer who has carved a
              niche for himself in his professional career. But, that is only
              one side of his many proficiencies. He is also a prolific writer
              with efficient communication skills.
            </Text>
            <Center>
              <Link passHref href={"/founder"}>
                <Button
                  display={"block"}
                  fontWeight={"bold"}
                  className="mfont"
                  textTransform={"uppercase"}
                  aria-controls="example-panel"
                  m="auto"
                  outline="none"
                  variant="flushed"
                  _focus={{
                    boxShadow: "none",
                  }}
                  _hover={{
                    color: "white",
                    bg: "#ee5c27",
                  }}
                  textAlign={"center"}
                  color="#ee5c27"
                >
                  <a>
                    <Text>View Profile</Text>
                  </a>
                </Button>
              </Link>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
