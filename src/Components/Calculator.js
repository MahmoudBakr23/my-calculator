import React, { useState } from 'react';
import * as calcStyle from './Calculator.module.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({});

  const clickHandle = (buttonName) => {
    setObj((obj) => ({ ...obj, ...calculate(obj, buttonName) }));
  };

  const { total, next, operation } = obj;
  const result = next || total || operation || '0';

  return (
    <section className={calcStyle.calculator}>
      <div className={calcStyle.head}>{result}</div>
      <div className={calcStyle.body}>
        <div className={calcStyle.row}>
          <button type="button" name="AC" onClick={((e) => { clickHandle(e.target.name); })}>AC</button>
          <button type="button" name="+/-" onClick={((e) => { clickHandle(e.target.name); })}>+/-</button>
          <button type="button" name="%" onClick={((e) => { clickHandle(e.target.name); })}>%</button>
          <button type="button" className={calcStyle.orange} name="÷" onClick={((e) => { clickHandle(e.target.name); })}>÷</button>
        </div>
        <div className={calcStyle.row}>
          <button type="button" name="7" onClick={((e) => { clickHandle(e.target.name); })}>7</button>
          <button type="button" name="8" onClick={((e) => { clickHandle(e.target.name); })}>8</button>
          <button type="button" name="9" onClick={((e) => { clickHandle(e.target.name); })}>9</button>
          <button type="button" className={calcStyle.orange} name="×" onClick={((e) => { clickHandle(e.target.name); })}>×</button>
        </div>
        <div className={calcStyle.row}>
          <button type="button" name="4" onClick={((e) => { clickHandle(e.target.name); })}>4</button>
          <button type="button" name="5" onClick={((e) => { clickHandle(e.target.name); })}>5</button>
          <button type="button" name="6" onClick={((e) => { clickHandle(e.target.name); })}>6</button>
          <button type="button" className={calcStyle.orange} name="-" onClick={((e) => { clickHandle(e.target.name); })}>-</button>
        </div>
        <div className={calcStyle.row}>
          <button type="button" name="1" onClick={((e) => { clickHandle(e.target.name); })}>1</button>
          <button type="button" name="2" onClick={((e) => { clickHandle(e.target.name); })}>2</button>
          <button type="button" name="3" onClick={((e) => { clickHandle(e.target.name); })}>3</button>
          <button type="button" className={calcStyle.orange} name="+" onClick={((e) => { clickHandle(e.target.name); })}>+</button>
        </div>
        <div className={calcStyle.row}>
          <button type="button" className={calcStyle.zero} name="0" onClick={((e) => { clickHandle(e.target.name); })}>0</button>
          <button type="button" name="." onClick={((e) => { clickHandle(e.target.name); })}>.</button>
          <button type="button" className={calcStyle.orange} name="=" onClick={((e) => { clickHandle(e.target.name); })}>=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
