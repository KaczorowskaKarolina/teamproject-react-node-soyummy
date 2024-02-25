import { FormInput } from '#atoms/FormInput/FormInput.jsx';
import { RectangleButton } from '#atoms/RectangleButton/RectangleButton.jsx';
import css from './NewsletterForm.module.css';

const NewsletterForm = () => {
  return (
    <div className={css.NewsletterForm}>
      <div className={css.NewsletterFormInput}>
        <FormInput
          type="email"
          inputName="email"
          placeholder="Enter your email address"
          destination="newsletter"
        />
      </div>
      <div className={css.NewsletterFormButton}>
        <RectangleButton title="Subscribe" size="large" />
      </div>
    </div>
  );
};

export { NewsletterForm };
