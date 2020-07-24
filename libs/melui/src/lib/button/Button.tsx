import React, { FunctionComponent, useRef, useState, useEffect } from 'react';

import './Button.scss';
import Loader from '../loader/Loader';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'principal' | 'outline';
  isLoading?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  variant = 'principal',
  isLoading,
  ...props
}) => {
  const [showLoader, setShowLoader] = useState(false);

  React.useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    }

    if (!isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, showLoader]);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current?.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current?.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [children]);

  return (
    <button
      {...props}
      className={`${variant}`}
      ref={ref}
      style={
        showLoader
          ? {
              width: `${width}px`,
              height: `${height}px`,
            }
          : {}
      }
    >
      {showLoader ? <Loader /> : children}
    </button>
  );
};

export default Button;
