import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.homeContainer}>
      <h1 className={css.homeTitle}>
        We provide you with a very convenient way to create, edit, store, and
        quickly access your contacts.
        {/* <img
          className={css.homeImg}
          src="../../../public/images/contact-us.jpg"
          alt="Laptop with contacts"
        /> */}
      </h1>
    </div>
  );
}
