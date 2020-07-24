import React, { FunctionComponent } from 'react';
import './Header.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  logo?: string;
  brand?: 'mercadolibre' | 'mercadopago';
}

interface HeaderComposition {
  Brand?: FunctionComponent<BrandProps>;
  Item?: FunctionComponent<ItemProps>;
}

const Header: FunctionComponent<HeaderProps> & HeaderComposition = ({
  brand = 'mercadolibre',
  children,
  ...props
}) => {
  return (
    <nav {...props} className={`navbar ${brand}`}>
      {children}
    </nav>
  );
};

interface BrandProps {}

const Brand: FunctionComponent<BrandProps> = ({ children, ...props }) => (
  <span {...props} className="logo">
    {children}
  </span>
);

interface ItemProps {}

const Item: FunctionComponent<ItemProps> = ({ children, ...props }) => (
  <span {...props} className="navbar-item">
    {children}
  </span>
);

Header.Brand = Brand;
Header.Item = Item;

export { Header };
