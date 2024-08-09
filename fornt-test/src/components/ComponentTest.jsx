import React, { useState } from 'react';

const ComponentTest = () => {
  // 원본 배열
  const [originalArray, setOriginalArray] = useState(['apple', 'banana', 'cherry', 'date']);
  // 변환된 배열을 저장할 상태
  const [transformedArray, setTransformedArray] = useState([]);

  // 배열을 변환하는 함수
  const transformArray = () => {
    // 원본 배열의 각 요소를 변환하여 새로운 배열에 저장
    const newArray = originalArray.map(item => {
      // 각 요소를 변환 (여기서는 문자열로 변환하거나 추가적인 처리 가능)
      return `Fruit: ${item}`;
    });

    // 변환된 배열 상태 업데이트
    setTransformedArray(newArray);
    console.log(originalArray);
    console.log(newArray);
  };

  return (
    <div>
      <h1>Original Array</h1>
      <ul>
        {originalArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <button onClick={transformArray}>Transform Array</button>

      <h1>Transformed Array</h1>
      <ul>
        {transformedArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentTest;
