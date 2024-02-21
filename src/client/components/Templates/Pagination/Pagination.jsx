import * as React from 'react';
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';
import styles from './Pagination.module.css';

export default function BasicPagination({ count, page, isChange }) {
  return (
    <div
      className={styles.paginationWrapper}
      //className={`${styles.paginationWrapper} ${
      // theme === 'dark' ? css.darkTheme : ''
      // }`}
    >
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          className={styles.mui}
          //className={`${styles.mui} ${
          // theme === 'dark' ? styles.darkTheme : ''
          // }`}
          onChange={isChange}
        />
      </Stack>
    </div>
  );
}
