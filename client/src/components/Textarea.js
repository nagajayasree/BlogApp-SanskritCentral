import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

export const Textarea = ({ placeholder, rows }) => (
  <>
    <TextArea rows={rows} placeholder={placeholder} />
  </>
);
