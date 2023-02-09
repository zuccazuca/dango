import { NextPage } from 'next';
import React, { ReactElement, useState } from 'react';
import { Button } from '../components/Button';

/* [要件]
0 - 9の数字のボタンがあること
四則演算(+, -, *, /)のボタンがあること
=があること
=が押されると結果表示されること
小数点があること、小数計算もできること
(デザインが)電卓の体をなしていること*
一応完成版/

const IndexPage: NextPage = (): ReactElement => {
  const [count, setCount] = useState<string>("0");
  const [memory, setMemory] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");
  
  

  return (
    <div className="m-10 p-4 w-2/3 mx-auto shadow-lg border-1 rounded-2xl">
      <div className="mx-auto">
        <div className="p-3 mb-3 border-2 rounded h-full w-full text-right">
          <span className="text-gray-700 select-none">{count}</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("1");
              }else{
                console.log(count);
                setCount(count+ "1");
              }
            }}>
            <span className="select-none text-xl">1</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
              console.log(count);
              setCount("2");
            }else{
              console.log(count);
              setCount(count +"2");
            }
          }}>
            <span className="select-none text-xl">2</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("3");
              }else{
                console.log(count);
                setCount(count+ "3");}
            }}>
            <span className="select-none text-xl">3</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (operator === "") {
                setMemory(count);
              } else {
                const result = parseFloat(count) / parseFloat(memory);
                setMemory(result.toString());
              }
              setCount("0");
              setOperator("/");
            }}>
            <span className="select-none text-xl">÷</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("4");
              }else{
                console.log(count);
                setCount(count +"4");}
            }}>
            <span className="select-none text-xl">4</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("5");
              }else{
                console.log(count);
                setCount(count+"5");}
            }}>
            <span className="select-none text-xl">5</span>
          </Button>      
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("6");
              }else{
                console.log(count);
                setCount(count+"6");}
            }}>
            <span className="select-none text-xl">6</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (operator === "") {
                setMemory(count);
              } else {
                const result = parseFloat(count) * parseFloat(memory);
                setMemory(result.toString());
              }
              setCount("0");
              setOperator("*");
            }}>
            <span className="select-none text-xl">×</span>
          </Button>
         
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("7");
              }else{
                console.log(count);
                setCount(count+"7");}
            }}>
            <span className="select-none text-xl">7</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("8");
              }else{
                console.log(count);
                setCount(count+"8");}
            }}>
            <span className="select-none text-xl">8</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("9");
              }else{
                console.log(count);
                setCount(count+"9");}
            }}>
            <span className="select-none text-xl">9</span>
          </Button>
       
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (operator === "") {
                setMemory(count);
              } else {
                const result = parseFloat(count) - parseFloat(memory);
                setMemory(result.toString());
              }
              setCount("0");
              setOperator("-");
            }}>
            <span className="select-none text-xl">-</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count ==="0"){
                console.log(count);
                setCount("0");
              }else{
                console.log(count);
                setCount(count+"0");}
            }}>
            <span className="select-none text-xl">0</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (count.includes(".")){
                console.log(count);
              }else{
                console.log(count);
                setCount(count+".");
              }
            }}>
            <span className="select-none text-xl">.</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              switch (operator) {
                case "+":
                  setCount(`${parseFloat(count) + parseFloat(memory)}`);
                  return;
                case "-":
                  setCount(`${parseFloat(memory) - parseFloat(count)}`);
                  return;
                case "*":
                  setCount(`${parseFloat(count) * parseFloat(memory)}`);
                  return;
                case "/":
                  setCount(`${parseFloat(memory) / parseFloat(count)}`);
                  return;
                default:
                  setCount("0");
              }
            }}>
            <span className="select-none text-xl">=</span>
          </Button>
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              if (operator === "") {
                setMemory(count);
              } else {
                const result = parseFloat(count) + parseFloat(memory);
                setMemory(result.toString());
              }
              setCount("0");
              setOperator("+");
            }}>
            <span className="select-none text-xl">＋</span>
          </Button>
        
          <Button
            className="py-2 bg-cyan-600 text-white rounded border border-gray-200 cursor-pointer"
            onClick={() => {
              setCount("0");
              setMemory("0")
              setOperator("")
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
