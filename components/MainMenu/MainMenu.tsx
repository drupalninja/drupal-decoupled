import React from 'react';
import { Navbar, Nav, Offcanvas, Container } from 'react-bootstrap';
import { MainMenuItem, MainMenuProps } from './Types';
import Image from 'next/image';
import './MainMenu.scss';

const MainMenu: React.FC<MainMenuProps> = ({
  modifier,
  linkModifier,
  siteLogo,
  menuItems,
}) => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark" className={`py-2 ${modifier}`}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={siteLogo} alt="Site Name" width={312} height={96} style={{ marginRight: '4px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="d-lg-none"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <MainMenuItems items={menuItems} linkModifier={linkModifier} depth={0} isDesktop={false} />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Navbar.Collapse id="navbarSupportedContent" className="d-none d-lg-block">
          <Nav className="ms-auto">
            <MainMenuItems items={menuItems} linkModifier={linkModifier} depth={0} isDesktop={true} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const MainMenuItems: React.FC<{
  items: MainMenuItem[];
  linkModifier?: string;
  depth: number;
  isDesktop: boolean;
}> = ({ items, linkModifier, depth, isDesktop }) => {
  return (
    <ul className={`${depth === 0 ? 'navbar-nav mr-auto' : 'dropdown-menu'} ${depth === 0 && isDesktop ? 'nav-desktop gap-4' : ''}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`nav-item ${item.isExpanded ? 'dropdown' : ''}`}
        >
          {item.below ? (
            <>
              <a
                href={item.url}
                className={`nav-link fs-5 ${item.isExpanded ? 'dropdown-toggle' : ''} ${linkModifier ?? ''} ${item.inActiveTrail ? 'active' : ''}`}
                role="button"
                data-bs-toggle={item.isExpanded ? 'dropdown' : undefined}
                aria-expanded={item.isExpanded}
              >
                {item.title}
              </a>
              <MainMenuItems items={item.below} linkModifier={linkModifier} depth={depth + 1} isDesktop={isDesktop} />
            </>
          ) : (
            <a href={item.url} className={`${depth > 0 ? 'dropdown-item' : 'nav-link fs-5'} ${linkModifier ?? ''} ${item.inActiveTrail ? 'active' : ''}`}>
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;
