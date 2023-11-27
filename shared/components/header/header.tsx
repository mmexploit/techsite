"use client";
import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Box,
  Flex,
  Text,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./header.module.css";
import { IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const links = [
  { link: "/", label: "Home" },
  { link: "/services", label: "Services" },
  { link: "/about", label: "About" },
  { link: "/vacancy", label: "Vacancy/Career" },
  { link: "/contact", label: "Contact Us" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const path = usePathname()
  const router = useRouter()

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className="block leading-4 py-2 px-3 rounded-sm no-underline text-gray-700 dark:text-dark-0 text-sm font-medium hover:bg-primary-400 hover:text-white dark:hover:bg-dark-6"
    >
      {link.label}
    </Link>
  ));

  return (
    <header className="h-14 shadow-sm mb-30 bg-white border-b border-gray-300 dark:border-dark-4 sticky top-0 z-10">
      <Flex className="h-14 justify-between items-center px-3">
        <Flex className="items-center cursor-pointer" onClick={() => {router.push("/")}}>
          <IconMapPin size={35} color="#0088e4" />
          <p className="font-bold">KACHAMALE</p>
        </Flex>
        <Group gap={10} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Flex>
      <Collapse in={opened} className="relative z-10">
        <Flex className="flex flex-col items-center justify-center bg-white gap-3 pt-4 border h-[30dvh]">
          {items}
        </Flex>
      </Collapse>
    </header>
  );
}
