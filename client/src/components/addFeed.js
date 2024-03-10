import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { CREATE_FEED } from '../mutations/AddFeed';

import { Button } from 'antd';
import { Input } from 'antd';
import { TextEditor } from './TextEditor';

function AddFeed() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createFeed, { loading, error }] = useMutation(CREATE_FEED);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || content === '') {
      return alert('Please fill in all fields') && e.error;
    }
    createFeed({ variables: { title, content } });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Add Feed</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Input
          placeholder="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextEditor value={content} onChange={setContent} />
        <Button type="primary" onClick={onSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddFeed;
