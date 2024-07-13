import React from 'react';
import { MainMenuItem, MainMenuProps } from './Types';
import Image from 'next/image';

const MainMenu: React.FC<MainMenuProps> = ({
  modifier,
  linkModifier,
  siteLogo,
  menuItems,
}) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-primary py-2 ${modifier}`} data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <Image src={siteLogo} alt="Site Name" width={100} height={50} style={{ marginRight: '4px' }} />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end d-lg-none" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="d-flex justify-content-end p-2 pb-0">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <MainMenuItems items={menuItems} linkModifier={linkModifier} depth={0} isDesktop={false} />
          </div>
        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <MainMenuItems items={menuItems} linkModifier={linkModifier} depth={0} isDesktop={true} />
        </div>
      </div>
    </nav>
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
