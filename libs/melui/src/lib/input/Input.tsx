import React, { forwardRef, InputHTMLAttributes } from 'react';
import './Input.scss';

/* eslint-disable-next-line */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
));

export default Input;
