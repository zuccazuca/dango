import { NextPage } from 'next';
import React, { ReactElement, useCallback, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div
        className="m-10 p-3 container w-2/3 mx-auto shadow-lg"
      >
        <div className="mx-auto">
          <div className="p-3 mb-3  border-2 h-full w-full">{count}</div>
          <div className="grid grid-cols-3 gap-2">
            <Button onClick={useCallback(() => {
              console.log(count);

              setCount(count + 1);
            }, [count])}>
              +
            </Button>
            <Button onClick={useCallback(() => {
              console.log(count);

              setCount(count - 1);
            }, [count])}>
              -
            </Button>
            <Button onClick={useCallback(() => {
              setCount(0);
            }, [count])}>
              clear
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

// export const getStaticProps: GetStaticProps = () => {
// };

// eslint-disable-next-line import/no-default-export
export default IndexPage;
