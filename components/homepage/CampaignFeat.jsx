import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import WrapContent from "../global/WrapContent";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight="600" color="green.900" fontSize="20px">
        {title}
      </Text>
      <Text color={"gray.100"}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box py="80px" bg="green.400" data-aos="fade-up">
      <WrapContent>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={[10, 10, 5]}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={"Community Care."}
            text={
              " The impact of a community centered agenda will be felt by every citizen  "
            }
          />
          <Feature
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={"Inclusive Governance."}
            text={
              "As a sailor cannot abandon his crew, Nsiskak's agenda takes every citizen into account"
            }
          />
          <Feature
            icon={<Icon as={FcInTransit} w={10} h={10} />}
            title={"Create a Constituency we love."}
            text={
              "         The outcome of your collective contribution will shape the constituency into one we desired"
            }
          />
        </SimpleGrid>
      </WrapContent>
    </Box>
  );
}
