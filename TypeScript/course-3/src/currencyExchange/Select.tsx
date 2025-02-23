import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import type { AutoCompleteProps } from 'antd';

type selectProps = {
    currencyList: string[];
};

export function Select({ currencyList }: selectProps) {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState(currencyList.map(currency => ({ value: currency })));

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const onSearch = (text: string) => {
    setOptions(
      text ? 
        currencyList.filter(currency => currency.toLowerCase().includes(text.toLowerCase())).map(currency => ({ value: currency })) 
        : []
    );
  };

  return (
    <>
      <AutoComplete
        value={value}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="input here"
      />
    </>
  );
}
