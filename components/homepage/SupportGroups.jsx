import Slider from "react-slick";
import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import WrapContent from "../global/WrapContent";

const groups = [
  {
    name: "Nka Iban Obot Akara",
    caption:
      "We the women of Ikot Obio Awan standstrongly behind Udo Mbakara. There’s no one more suited to represent us than him.",
  },
  {
    name: "Nka Iban Ikot EKpene",
    caption:
      "We the women of Ikot Ekpene stand solidly behind Udo Mbakara. There’s no one more suited to represent us than him.",
  },
  {
    name: "Youths of Ikot EKpene",
    caption:
      "We don’t just want a leader, but a leader who will serve while leading. Udo Mbakara is that leader. ",
  },
  {
    name: "One Voice for Udo Mbakara",
    caption:
      "There is no body who will represent us better at the Federal House better than Udo Mbakara",
  },
];

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      mx="5"
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading fontSize={"xl"}>
      <Text as={"h3"}>{children}</Text>
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function SupportGroups() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <WrapContent>
        <Stack maxW={"7xl"} py={16} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading>
              <Text color="green.400" as="h1">
                Support Groups
              </Text>
            </Heading>
            <Text>
              The following groups show support and solidarty to Udombakara.
            </Text>
          </Stack>
          <Stack
            as={Slider}
            dots={false}
            slidesToShow={isLargerThan914 ? 3 : isLargerThan600 ? 1 : 1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={8000}
            spacing={8}
          >
            {groups.map((num, i) => (
              <Testimonial key={i}>
                <TestimonialContent>
                  <TestimonialText>{num.caption}</TestimonialText>
                </TestimonialContent>
                <TestimonialAvatar name={num.name} />
              </Testimonial>
            ))}
          </Stack>
        </Stack>
      </WrapContent>
    </Box>
  );
}
