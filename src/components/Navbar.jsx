// import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  const menuItems = [
    "Profile",
    "Applications",
    "My Jobs",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar disableAnimation isBordered>
      {/* Responsive Navbar Content */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">FreeBud</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
        <NavbarBrand>
          <p className="font-bold text-inherit">FreeBud</p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            className="hover:underline underline-offset-8"
            color="foreground"
            href="#"
          >
            Careers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="hover:underline underline-offset-8"
            href="/all_jobs"
            aria-current="page"
            color="warning"
          >
            Jobs
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* Login & Sign Up Buttons */}
        <Link to="user_dashboard">
          {" "}
          <NavbarItem>
            <FaRegCircleUser className="text-4xl text-teal-400 hover:bg-yellow-100 cursor-pointer rounded-full p-1 mx-8" />
          </NavbarItem>
        </Link>
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {/* Dynamic Menu Items with Conditional Coloring */}
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning" // Highlight third item (index 2)
                  : index === menuItems.length - 1
                  ? "danger" // Highlight last item
                  : "foreground"
              }
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
