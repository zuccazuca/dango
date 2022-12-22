import React, { FC, PropsWithChildren, ReactElement } from 'react';

type Props = Readonly<{
  onClick: () => void;
}>;

export const Button: FC<PropsWithChildren<Props>> = ({ onClick, children }): ReactElement => {
  return (
    <button
      type="button"
      className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
