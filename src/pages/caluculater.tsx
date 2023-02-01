import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-1 rounded-2xl">
      <div className="mx-auto">
        <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
          <span className="text-gray-700 select-none">{count}</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count + 1);
              }else{
                console.log(count);
                setCount(count*10+1);
                //setCountを使用するとnumberしか表示できないので、上記のようになった。このままだと小数点ありの計算に苦労するので修正したい
              }
            }}>
            <span className="select-none text-xl">1</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
              console.log(count);
              setCount(count +2);
            }else{
              console.log(count);
              setCount(count*10+2);
            }
          }}>
            <span className="select-none text-xl">2</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">÷</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count +3);
              }else{
                console.log(count);
                setCount(count*10+3);}
            }}>
            <span className="select-none text-xl">3</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count +4);
              }else{
                console.log(count);
                setCount(count*10+4);}
            }}>
            <span className="select-none text-xl">4</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
            
            }}>
            <span className="select-none text-xl">×</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count +5);
              }else{
                console.log(count);
                setCount(count*10+5);}
            }}>
            <span className="select-none text-xl">5</span>
          </Button>      
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count +6);
              }else{
                console.log(count);
                setCount(count*10+6);}
            }}>
            <span className="select-none text-xl">6</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">－</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count +7);
              }else{
                console.log(count);
                setCount(count*10+7);}
            }}>
            <span className="select-none text-xl">7</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count +8);
              }else{
                console.log(count);
                setCount(count*10+8);}
            }}>
            <span className="select-none text-xl">8</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">＋</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count +9);
              }else{
                console.log(count);
                setCount(count*10+9);}
            }}>
            <span className="select-none text-xl">9</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ===0){
                console.log(count);
                setCount(count +0);
              }else{
                console.log(count);
                setCount(count*10+0);}
            }}>
            <span className="select-none text-xl">0</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">=</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count !==0){
                console.log(count);
                setCount(count);//.の表現の仕方がよくわからない
              }
            }}>
            <span className="select-none text-xl">.</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount(0);
            }}>
            <span className="select-none text-xl">C</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = () => {
// };

// eslint-disable-next-line import/no-default-export
export default IndexPage;
