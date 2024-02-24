import styles from './MainPageTitle.module.css';

//import { useTheme } from '../../components/ToggleSwitch/ThemeContext';
export const MainPageTitle = ({ title }) => {
  //const { theme } = useTheme();
  return (
    <section
      className={styles.mainPageSection}
      // {`${styles.mainPageSection} ${
      //   theme === 'dark' ? styles.darkTheme : ''
      // }`}
    >
      <div className={styles.container}>
        <div className={styles.element + ' ' + styles.element_one} />
        <div className={styles.element + ' ' + styles.element_two} />
        <div
        className={styles.element + ' ' + styles.element_three}
          // className={`${styles.element + ' ' + styles.element_three} ${
          //   theme === 'dark' ? styles.darkTheme : ''
          // }`}
        />
        <h2
          className={styles.title} 
          // className={`${styles.title} ${
          //   theme === 'dark' ? styles.darkTheme : ''
          // }`}
        >
          {title}
        </h2>
      </div>
    </section>
  );
};
