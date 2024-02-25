import React from 'react';
import css from './ToggleSwitch.module.css';
import { useTheme } from './ThemeContext';

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={css.toggleSlider}>
      <input
        type="checkbox"
        id="toggle"
        className={css.checkbox}
        onChange={toggleTheme}
        checked={theme === 'dark'}
      ></input>
      <label htmlFor="toggle" className={css.slider}></label>
    </div>
  );
};

export default ToggleSwitch;
