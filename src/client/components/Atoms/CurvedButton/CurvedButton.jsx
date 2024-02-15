import styles from './CurvedButton.module.css';

export const CurvedButton = ({ title, type = 'button', greenOrBlack, onClick = () => {} }) => {
  const classes = `${styles.CurvedButton} ${styles[`${greenOrBlack}`]}`;
  return (
    <button className={classes} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

// title is a text that appears on button f.ex. 'Submit'

// type prop is a type of a button and a string. By default it's just a button
// but if you need it to be some other type
// just add attribute type whith the type you want
// when decalring component

// Button is by default transparent,
// so if you need it to be green or black add
// attribute greenOrBlack with string value 'green' or 'black'
// when decalring component

// onClick is obvious. By default this prop is an empty function so
