import Image from 'next/image';
import Link from 'next/link';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image src='/logo.png' alt='Logo' height='74px' width='38px' />
      </div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <a
              href='https://drive.google.com/file/d/1EXHLkOdFVroNorJ_Vgb9qaFbdO21tw3X/view?usp=sharing'
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
