"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react";
import { EvLogo } from "./lib/EvLogo";


export default function Home() {
  return (
    <NextUIProvider>
      <main>
	  <Navbar>
      <NavbarBrand>
        <EvLogo />
        <p className="font-bold text-inherit">FTC 7393</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
		  Main Site
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="https://ftc7393.org/" aria-current="page">
			Order Among Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://github.com/FTC7393/sussy-factory-v2">
            Source
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
		
	  </main>
    </NextUIProvider>
  );
}


