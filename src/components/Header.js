import Image from 'next/image';
import Link from 'next/link';
import classes from './Header.module.css';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('../components/ThemeToggler'), {
  ssr: false,
});

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image src='/logo.png' alt='Logo' height='74px' width='38px' />
      </div>
      <div>
        <ThemeToggle />
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
              href='https://docs.google.com/document/d/1okxchxN8GbexMPVM358Z0rJQuLwiBp84uZGyyed62MY/edit?usp=sharing'
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
