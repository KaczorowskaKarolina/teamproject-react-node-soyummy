import { useEffect, useState } from 'react';
import styles from './Pagination.module.css';
import icons from '../../../images/icons/pagination-arrow-icon.svg';

//optionally future import { useTheme }? (Dark Theme) and styles below

const Pagination = ({ currentPage, onPageChange }) => {
 // const { theme } = useTheme();
  const [pageCount, setPageCount] = useState(5);

  const updatePageCount = () => {
    if (window.innerWidth >= 1280) {
      setPageCount(8);
    } else {
      setPageCount(5);
      onPageChange(1);
    }
  };

  useEffect(() => {
    updatePageCount();
    window.addEventListener('resize', updatePageCount);
    return () => {
      window.removeEventListener('resize', updatePageCount);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= pageCount; i++) {
      pageNumbers.push(
        <span
          key={i}
          className={styles.pageNumber}
         // className={`${styles.pageNumber} ${
         //   theme === 'dark' ? styles.darkTheme : ''
        //  } ${currentPage === i ? styles.activePage : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </span>
      );
    }

    return pageNumbers;
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div
    className={styles.pagination} 
    //  className={`${styles.pagination} ${
      //  theme === 'dark' ? styles.darkTheme : ''
   //   }`}
    >
      <svg
        className={`${styles.icon} ${styles.arrow}`}
        viewBox="0 0 12 12"
        onClick={handlePrevPage}
      >
        <use href={`${icons}#icon-pagination-arrow-left`} />
      </svg>
      {renderPageNumbers()}
      <svg
        className={`${styles.icon} ${styles.arrow}`}
        viewBox="0 0 12 12"
        onClick={handleNextPage}
      >
        <use href={`${icons}#icon-pagination-arrow-right`} />
      </svg>
    </div>
  );
};

export {Pagination};