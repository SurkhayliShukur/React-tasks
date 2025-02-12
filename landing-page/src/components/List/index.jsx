import React from 'react';
import styles from './list.module.css';

const List = () => {
  return (
    <ul className={styles.list}>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
    </ul>
  );
};

export default List;