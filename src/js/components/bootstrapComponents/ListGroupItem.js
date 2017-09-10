import React from 'react';

export default (props) =>
  <li
    className={`list-group-item ${props.className || ''}`}>
    {props.children}
  </li>