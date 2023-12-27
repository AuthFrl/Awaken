
"use client";
import { Button,Navbar } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";


export const NavbarComponent = (props) => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container
          tag="ul"
          className="lg:flex hidden items-center justify-between gap-8"
        >
          <Navbar.Link linkName="Dashboard" href="/dashboard"/>
          <Navbar.Link linkName="Products" href="/products"/>
          <Navbar.Link linkName="Blogs" />
        </Navbar.Container>
     

        <Navbar.Collapse collapseType="sidebar">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Navbar.Link linkName="Dashboard" href="/dashboard"/>
            <Navbar.Link linkName="Products" href="/products" />
            <Navbar.Link linkName="Blogs" />
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
        </Navbar.Collapse>

        <Navbar.Container className="flex items-center gap-3">
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-5"
          >
            <Navbar.Link linkName="News" />
            <Navbar.Link linkName="Resources" />
          </Navbar.Container>
          <Button size="sm" type="link">
            <span>
              <MagnifyingGlass size={20} color="#444" />
            </span>
            <span className="ml-2 text-metal-600">Search</span>
          </Button>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}

export default NavbarComponent;