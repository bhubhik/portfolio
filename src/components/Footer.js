import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2>Contact Me</h2>
      <div className={classes.contents}>
        <ul>
          <li>
            <a href='mailto:bhubhik@gmail.com'>
              <FontAwesomeIcon className={classes.social} icon={faEnvelope} />{' '}
              bhubhik@gmail.com
            </a>
          </li>
          <li>
            <a href='tel:+61450239032'>
              <FontAwesomeIcon className={classes.social} icon={faPhone} /> +61
              450 239 032
            </a>
          </li>
        </ul>
        <div className={classes.icons}>
          <FontAwesomeIcon className={classes.social} icon={faLinkedin} />
          <FontAwesomeIcon className={classes.social} icon={faFacebook} />
          <FontAwesomeIcon className={classes.social} icon={faGithub} />
        </div>
      </div>
      <p>2021 © Anubhab Karki</p>
    </footer>
  );
};

export default Footer;
