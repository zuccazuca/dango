import React, { FC, MouseEvent, PropsWithChildren, ReactElement } from 'react';

type Props = Readonly<{
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  className: string;
}>;

export const Button: FC<PropsWithChildren<Props>> = ({ onClick, className, children }): ReactElement => {
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
