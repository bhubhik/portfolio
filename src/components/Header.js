import Image from 'next/image';
import Link from 'next/link';
import classes from './Header.module.css';
import Head from 'next/head';

const Header = () => {
  return (
    <header className={classes.header}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Saira:wght@200&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={classes.logo}>
        <Image src='/logo.png' alt='Logo' height='200px' width='200px' />
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>Projects</Link>
          </li>
          <li>
            <a
              href='https://drive.google.com/file/d/1YseNnAmQy-jAMHYohYzFxR8LM7UQ0pNY/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
