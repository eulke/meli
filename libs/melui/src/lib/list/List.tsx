import React, { FunctionComponent, HTMLAttributes } from 'react';

import './List.scss';

/* eslint-disable-next-line */
export interface ListProps extends HTMLAttributes<HTMLUListElement> {}

interface ListComposition {
  Item?: FunctionComponent<ItemProps>;
}

const List: FunctionComponent<ListProps> & ListComposition = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul {...props} className="list">
      {children}
    </ul>
  );
};

export interface ItemProps extends HTMLAttributes<HTMLLIElement> {}

const Item: FunctionComponent<ItemProps> = ({ children, ...props }) => (
  <li {...props} className="list-item">
    {children}
  </li>
);

List.Item = Item;

export { List };
