import React from 'react';
import { Container, ContainerProps } from './Container';

export default {
  component: Container,
  title: 'Container',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ContainerProps = {};

  return <Container />;
};
