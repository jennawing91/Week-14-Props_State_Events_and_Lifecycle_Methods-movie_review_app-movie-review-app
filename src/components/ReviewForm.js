import React, { useState } from 'react';

function ReviewForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        Add a review:
        <input type="text" value={props.value} onChange={props.onChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
