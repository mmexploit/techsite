import { Box, Flex } from "@mantine/core";

export default function About() {
  return (
    <Box className="container mx-auto mt-5">
      <Flex justify="space-around" gap="md" align="center">
        <Box>
          <p className="text-5xl font-bold text-primary-900 text-center my-5">
            About Us
          </p>
          <p className="text-lg font-semibold text-center">
            {"You've"} built an amazing business. We make sure people will
            remember it.
          </p>
          <p className="text-lg font-semibold text-center">
            Our Mission is empowering businesses through Innovation and
            Technology. At the core of our mission is a commitment to
            revolutionizing the way business is done. We
            understand the unique challenges you face, and our mission is to
            provide solutions that not only meet but exceed your expectations.
          </p>
        </Box>
        <img src="/about.svg" width="500px" />
      </Flex>
    </Box>
  );
}
