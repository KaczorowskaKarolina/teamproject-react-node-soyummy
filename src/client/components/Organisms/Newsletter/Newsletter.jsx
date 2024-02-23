import { NewsletterForm } from '#components/Molecules/NewsletterForm/NewsletterForm.jsx';
import css from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={css.Newsletter}>
        <div className={css.NewsletterAddon}>
            <h3 className={css.NewsletterTitle}>Subscribe to our Newsletter</h3>
            <p className={css.NewsletterText}>
                Subscribe up to our newsletter. Be in touch with latest news and special
                offers, etc.
            </p>
        </div>
      <NewsletterForm />
    </div>
  );
};

export { Newsletter };
