import React from 'react';

function AddFeed() {
  return (
    <div>
      <h2>Add Feed</h2>
      <div>
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <label>Title</label>
            <input type="text" name="title" placeholder="Title.." />
          </div>
          <div>
            <label>Description</label>
            <textarea
              type="text"
              name="description"
              placeholder="Description.."
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddFeed;
