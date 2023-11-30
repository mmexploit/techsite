import { Box, Flex } from "@mantine/core";
import bgTop2 from "../../../public/bgTop2.svg"

export default function About() {
  return (
    <>
      <Box className="h-[30dvh] pt-24 bg-no-repeat bg-center bg-cover w-full" style={{backgroundImage: `url(${bgTop2.src})`}}/>
    <Box className="container mx-auto mt-5">
      <Box className="flex justify-around items-center flex-col md:flex-row p-6">
        
        <Box>
          <p className="text-5xl font-bold text-primary-900 text-center my-5">
            About Us
          </p>
          <p className="text-lg font-semibold ">
            {"You've"} built an amazing business. We make sure people will
            remember it.
          </p>
          <p className="text-lg font-semibold mt-4">
            We are a technology company established in 2023 based in Addis
            Ababa, Ethiopia. Kachamalle concentrates in developing innovative
            and user-friendly technology solutions. We believe that technology
            can be used to solve real-world problems and improve {"people's"}{" "}
            lives. Our mission is to create software that is both powerful and
            easy to use.
          </p>
          <p className="text-lg font-semibold mt-4">
            We want our products to be accessible to organizations and end
            users. We also believe that software should be sustainable and
            ethical. We are committed to creating products that have a positive
            impact to the society. We are a team of people who are passionate
            about technology and making a difference in the world.
          </p>
        </Box>
        <img src="/about.svg" width="500px" />
      </Box>
    </Box>
    </>
  );
}
