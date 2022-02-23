import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <motion.div
      key={router.route}
      initial="pageInit"
      animate="pageAnim"
      variants={{
        pageInit: {
          opacity: 0,
          y: -100,
        },
        pageAnim: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      <ChakraProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </motion.div>
  );
}
export default MyApp;
