import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.homeContainer}>
      <div>
        <h1 className={css.homeTitle}>
          We provide you with a
          <span className={css.spanColor}> convenient</span> and
          <span className={css.spanColor}> secure</span> way
        </h1>
        <p className={css.txt}>
          to create, edit, store, and quickly access your contacts
        </p>
      </div>
      <img
        className={css.homeImg}
        src={new URL('../../images/main-img-1.png', import.meta.url)}
        alt="laptop with contacts"
      />
    </div>
  );
}
