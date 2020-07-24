import React, {
  FunctionComponent,
  forwardRef,
  FormHTMLAttributes,
  RefAttributes,
  ForwardRefExoticComponent,
  ButtonHTMLAttributes,
} from 'react';
import { Input } from '../input/Input';
import './Search.scss';

/* eslint-disable-next-line */
export interface SearchProps extends FormHTMLAttributes<HTMLFormElement> {
  placeholder?: string;
}

interface SearchComposition {
  Button?: FunctionComponent<ButtonProps>;
}

const Search: ForwardRefExoticComponent<
  SearchProps & RefAttributes<HTMLInputElement>
> &
  SearchComposition = forwardRef<HTMLInputElement, SearchProps>(
  ({ placeholder, children, ...props }, ref) => {
    return (
      <form className="search-container" {...props}>
        <Input ref={ref} type="text" placeholder={placeholder} />
        {children}
      </form>
    );
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => (
  <button type="submit" {...props}>
    {children}
  </button>
);

Search.Button = Button;

export { Search };
