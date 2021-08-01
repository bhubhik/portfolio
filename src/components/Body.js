import classes from './Body.module.css';
import Head from 'next/head';

const Body = () => {
  return (
    <div className={classes.card}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />

        <link
          href='https://fonts.googleapis.com/css2?family=Sahitya&display=swap'
          rel='stylesheet'
        />
      </Head>
      <h1>Hello!</h1>
      <p>
        <span>I’m Anubhab Karki,</span> and I’m a frontend developer.
      </p>
    </div>
  );
};

export default Body;
