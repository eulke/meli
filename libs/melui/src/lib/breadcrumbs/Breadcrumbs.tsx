import React, { FunctionComponent } from 'react';

import './Breadcrumbs.scss';

/* eslint-disable-next-line */
export interface BreadcrumbsProps {
  items: string[];
}

export const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({
  items = [],
}) => {
  return (
    <div className="breadcrumbs">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
