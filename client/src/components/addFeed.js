import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { CREATE_FEED } from '../mutations/AddFeed';

import { TextField, Button } from '@mui/material';
import { Textarea } from './Textarea';

function AddFeed() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [createFeed, { data, loading, error }] = useMutation(CREATE_FEED);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (title === '' || content === '') {
      return alert('Please fill in all fields');
    }
    createFeed({ variables: { title, content } });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <div>
        <h2>Add Feed</h2>
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        <Textarea
          maxRows={4}
          aria-label="maximum height"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button value="Submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddFeed;
