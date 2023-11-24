import { Box, Button, Paper, Title, Text, Avatar } from "@mantine/core";
import site from "../../public/site.gif";
import Image from "next/image";
import wave from "../../public/wave.svg";
import server from "../../public/server.gif";

const whyContent = [
  {
    title: "Unparalleled Performance Experience",
    content:
      "lightning-fast processing with our state-of-the-art technology. Kachamale is engineered for peak performance, ensuring efficiency and reliability in every task.",
    image: server,
  },
  {
    title: "Intelligent Solutions",
    content:
      "With Our advanced algorithms and machine learning capabilities empower you with intelligent insights, helping you make informed decisions and stay ahead of the curve.",
    image: server,
  },
  {
    title: "Seamless Integration",
    content:
      "Integrate Kachamale effortlessly into your existing workflow. Our user-friendly interface ensures a smooth transition, saving you time and resources.",
    image: server,
  },
];

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Tencent Solutions",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Jane Smith",
    title: "CTO, Techno Mobile",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Mark Johnson",
    title: "CFO, Techub",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  }
]

export default function Home() {
  return (
    <div>
      <Box className="min-h-[90dvh] flex items-center bg-primary-500 p-10">
        <Box className="flex flex-col md:flex-row w-full">
          <Box className="flex flex-col">
            <p className="text-5xl md:pt-32 pt-16 font-bold">
              Welcome To <span className="text-white">Kachamale Solutions</span>{" "}
            </p>
            <p className="text-3xl mt-10">
              {" "}
              <span className="text-white">Empowering</span> Your Ideas With
              Tech!
            </p>
            <Box className="flex mt-10 gap-4">
              <Button color="dark" className="text-primary-600">
                Get Started
              </Button>
              <Button variant="outline" color="dark">
                Learn More
              </Button>
            </Box>
          </Box>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.src}
            alt="site"
            className="ml-auto md:w-[33dvw]"
            width={300}
            height={300}
          />
        </Box>
      </Box>
      <Box className="flex p-5 flex-col min-h-[65dvh] justify-center">
        <p className="text-3xl font-bold mx-auto">About Us</p>
        <Box className="mt-10 md:px-24 px-12 text-lg text-center">
          At Kachamle solutions, we believe in pushing boundaries and redefining
          whats possible in technology. Founded with a passion for innovation,
          we strive to empower businesses like yours with cutting-edge
          technology solutions that make a real impact. Our Mission Empowering
          Businesses through Innovation and Technology. At the core of our
          mission is a commitment to revolutionizing the way business is done.
          We understand the unique challenges you face, and our mission is to
          provide solutions that not only meet but exceed your expectations.
        </Box>
      </Box>
      <Image
        src={wave.src}
        alt="wave"
        width={10}
        height={10}
        className="w-full md:-mt-36"
      />
      <Box className="flex p-5 flex-col min-h-[75dvh] justify-center">
        <p className="text-3xl font-bold mx-auto pt-4">Why Choose Kachamale?</p>
        <Box className="flex flex-col md:flex-row md:my-8 gap-4 pt-4">
          {whyContent.map((item, index) => {
            return (
              <Box key={index} className="mt-4 flex flex-col items-center bg-gray-100 rounded-md p-6 cursor-pointer hover:bg-gray-200">
                <Box
                  style={{ backgroundImage: `url(${item.image.src})` }}
                  className="h-32 w-32 bg-no-repeat bg-center bg-contain rounded-full mt-4"
                />
                <p className="font-semibold text-lg">{item.title}</p>
                <Text mt={8} className="text-center">
                  {item.content}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className="flex p-5 flex-col min-h-[75dvh] justify-center  bg-gray-100">
        <p className="text-3xl font-bold mx-auto">Testimonials</p>
        <Box className="flex flex-col md:flex-row md:my-8 gap-6">
          {testimonials.map((item, index) => {
            return (
              <Box key={index} className="mt-4 flex flex-col items-center rounded-md p-6 cursor-pointer bg-white hover:bg-gray-200">
                <Avatar color="blue" size={80}/>
                <p className="font-semibold text-lg">{item.name},<span className="font-light text-sm italic"> {item.title}</span></p>
                <Text mt={8} className="text-center">
                  {item.content}
                </Text>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className="flex p-5 flex-col min-h-[75dvh] justify-center">
        <p className="text-3xl font-bold mx-auto py-4">Meet The Team</p>
        <Box className="flex flex-col md:flex-row md:my-8 gap-6 justify-center items-center pb-4">
          <Image src="/team.png" width={400} height={300} alt="team"/>
          <Image src="/team2.png" width={400} height={400} alt="team"/>
        </Box>
      </Box>
      <Box>

      </Box>
    </div>
  );
}
