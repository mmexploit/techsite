import { Box, Flex, Text } from "@mantine/core";
import { ServiceCard } from "./cards";

export default function Services() {
  return (
    <Box className="container mx-auto mt-3 min-h-[90dvh] flex justify-center md:flex-col mb-6">
      <p className="text-3xl text-center">
        We Provide The Best{" "}
        <span className="font-bold text-primary-900">IT Solutions</span>
      </p>

      <Flex justify="space-between" wrap="wrap">
        <ServiceCard title="Web Development" svg="/web-dev.svg" size="300px" />
        <ServiceCard
          title="Mobile Development"
          svg="mobile-dev.svg"
          size="500px"
        />
        <ServiceCard title="Cloud Computing" svg="/web-dev.svg" size="300px" />
        <ServiceCard title="Software Consultancy" svg="/mobile-dev.svg" size="300px" />
        <ServiceCard title="Cloud Computing" svg="/web-dev.svg" size="300px" />
        <ServiceCard title="Cloud Computing" svg="/mobile-dev.svg" size="300px" />
      </Flex>
    </Box>
  );
}