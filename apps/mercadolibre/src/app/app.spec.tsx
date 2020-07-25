import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { App } from './app';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render successfully', async () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
