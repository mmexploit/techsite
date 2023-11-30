import { Box, Flex, Text } from "@mantine/core";
import { ServiceCard } from "./cards";
import bgTop3 from "../../../public/bgTop3.svg"

export default function Services() {
  return (
    <>
      <Box
        className="h-[30dvh] pt-24 bg-no-repeat bg-center bg-cover w-full"
        style={{ backgroundImage: `url(${bgTop3.src})` }}
      />
      <Box className="container mx-auto my-8 min-h-[90dvh] flex justify-center flex-col mb-6">
        <p className="text-4xl text-center">
          We Provide The Best{" "}
          <span className="font-bold text-primary-900">IT Solutions</span>
        </p>

        <Box className="flex flex-col justify-between flex-wrap md:flex-row p-4 md:p-0">
          <ServiceCard
            title="Web Development"
            svg="/web-dev.svg"
            size="300px"
          />
          <ServiceCard
            title="Mobile Development"
            svg="mobile-dev.svg"
            size="500px"
          />
          <ServiceCard
            title="Cloud Computing"
            svg="/web-dev.svg"
            size="300px"
          />
          <ServiceCard
            title="Software Consultancy"
            svg="/mobile-dev.svg"
            size="300px"
          />
          <ServiceCard
            title="Cloud Computing"
            svg="/web-dev.svg"
            size="300px"
          />
          <ServiceCard
            title="Cloud Computing"
            svg="/mobile-dev.svg"
            size="300px"
          />
        </Box>
      </Box>
    </>
  );
}
