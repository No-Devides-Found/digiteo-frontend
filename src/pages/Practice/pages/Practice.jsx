import React from 'react';

function Practice({ idx, title, tags, createdBy, type, story, review }) {
  return (
    <div>
      <h2>프로그램 대제목{title}</h2>
      <h5>{createdBy}</h5>
      <h5>{tags}</h5>
      <h5>{type}</h5>
      <hr />
      <p>{story}</p>
      <p>{review}</p>
    </div>
  );
};

export default Practice;