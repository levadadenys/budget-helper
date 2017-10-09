import React from 'react';

const ListGroupItem = (props) =>
  <li
    className={`list-group-item ${props.className || ''}`}>
    {props.children}
  </li>;

export default ListGroupItem;