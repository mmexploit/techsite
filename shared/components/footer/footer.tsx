import { Box, Divider, Flex, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandYoutube,
  IconMapPin,
} from "@tabler/icons-react";
import React from "react";

const links = [
  { link: "/services", label: "Services" },
  { link: "/about", label: "About" },
  { link: "/vacancy", label: "Vacancy/Career" },
  { link: "/contact", label: "Contact Us" },
];

const footerLinks = [
  { link: "/about", label: "Email Newsletter" },
  { link: "/about", label: "Join Group" },
  { link: "/about", label: "Follow on Twitter" },
  { link: "/about", label: "Book a call" },
];

export default function Footer() {
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className="block leading-4 py-2 rounded-sm no-underline text-white dark:text-dark-0 text-sm font-medium hover:bg-primary-400 dark:hover:bg-dark-6"
    >
      {link.label}
    </a>
  ));

  const community = footerLinks.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className="block leading-4 py-2 rounded-sm no-underline text-white dark:text-dark-0 text-sm font-medium hover:bg-primary-400 dark:hover:bg-dark-6"
    >
      {link.label}
    </a>
  ));

  return (
    <div>
      <Box className="flex flex-col items-center min-h-[40dvh] bg-primary-700 pt-4">
        <Box>
          <Box className="flex flex-col items-center justify-center">
            <Flex className="items-center">
              <IconMapPin size={35} color="white" />
              <p className="font-bold text-white">KACHAMALE</p>
            </Flex>
            <Text fz={"sm"} className="text-center" c={"white"}>
              Jorney of excellence
            </Text>
            <Box className="text-white">+25199999999 | +251911111111</Box>
          </Box>
        </Box>
        <Box className="flex flex-row justify-around w-full p-6">
          <Box className="text-white">
            <Text fz={"lg"} fw={"bold"}>
              About
            </Text>
            {items}
          </Box>
          <Box className="text-white">
            <Text fz={"lg"} fw={"bold"}>
              Community
            </Text>
            {community}
          </Box>
        </Box>
        <Divider my={10} className="w-[100dvw]" color="white" />
        <Box className="flex flex-row justify-between items-center w-full p-4 md:px-8">
          <Text fz={"sm"} c={"white"}>
            © 2023 Kachamale. All rights reserved.
          </Text>
          <Box className="flex flex-row gap-4">
            <IconBrandTelegram color="white" />
            <IconBrandYoutube color="white" />
            <IconBrandInstagram color="white" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
