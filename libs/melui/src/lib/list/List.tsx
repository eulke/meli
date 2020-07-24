import React, { FunctionComponent } from 'react';

import './List.scss';

/* eslint-disable-next-line */
export interface ListProps {}

interface ListComposition {
  Item?: FunctionComponent<ItemProps>;
}

const List: FunctionComponent<ListProps> & ListComposition = ({
  children,
  ...props
}) => {
  return (
    <ul {...props} className="list">
      {children}
    </ul>
  );
};

export interface ItemProps {}

const Item: FunctionComponent<ItemProps> = ({ children, ...props }) => (
  <li {...props} className="list-item">
    {children}
  </li>
);

List.Item = Item;

export { List };
