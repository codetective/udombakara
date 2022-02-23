import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Image,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

const Logo = (props) => {
  return (
    <Link href="/">
      <a style={{ display: "flex" }}>
        <Box overflow="hidden">
          <Image src="/images/logo.svg" alt="logo" w="90%" />
        </Box>
      </a>
    </Link>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      rounded={"full"}
      fontSize={"60px"}
      cursor={"pointer"}
      as={"a"}
      color="green.400"
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        color: "#479442",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"green.900"} color="white" py="60px">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={"4"}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo />
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/MacaireOfficial"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"Facebook"}
            href={"https://www.facebook.com/MacaireOfficial"}
          >
            <FaFacebook />
          </SocialButton>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
          className="mfont"
        >
          <Text>© 2021 Macaire. All rights reserved</Text>
          <Text>Designed by Eddytech ICT.</Text>
        </Container>
      </Box>
    </Box>
  );
}
