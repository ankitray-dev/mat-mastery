"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import ChevronDown from "./Style/icons";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Courses",
    "Contact",
    "Log Out",
  ];
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={20} />,
  };


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-3xl font-roboto bg-clip-text text-transparent bg-gradient-to-b from-blue-100 to-blue-400">MatMastery</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="font-bold text-xl">
            Home
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                <p className="font-bold text-xl">Our Courses</p>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Beginner_Judo"
              description="Learn basic judo techniques over 8 weeks."
            >
              <Link href="/">Beginner&apos;s Judo</Link>
            </DropdownItem>
            <DropdownItem
              key="Karate_Kata_Workshop"
              description="Perfect traditional karate forms in 4 weeks."
            >
              <Link href="/">Karate Kata Workshop</Link>
            </DropdownItem>
            <DropdownItem
              key="Judo_Randori_Clinic"
              description="Enhance sparring skills over 6 weeks."
            >
              <Link href="/">Judo Randori Clinic</Link>
            </DropdownItem>
            <DropdownItem
              key="Karate_Self-Defense_Seminar"
              description="Gain self-defense skills in a weekend."
            >
              <Link href="/">Karate Self-Defense Seminar</Link>
            </DropdownItem>
            <DropdownItem
              key="Judo_for_Kids"
              description="Introduce kids to judo through fun activities."
            >
              <Link href="/">Judo for Kids</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="#" className="font-bold text-xl">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
            <Link>
                <Avatar isBordered color="primary" src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
