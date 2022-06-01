import classes from './Skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faJsSquare,
  faCss3,
  faReact,
  faFigma,
  faGithub,
  faGit,
  faShopify,
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <div className={classes.skillBody}>
      <h1>Skills</h1>
      <div className={classes.list}>
        <ul>
          <li>
            HTML
            <FontAwesomeIcon icon={faHtml5} />
          </li>
          <li>
            CSS
            <FontAwesomeIcon icon={faCss3} />
          </li>
          <li>
            JavaScript
            <FontAwesomeIcon icon={faJsSquare} />
          </li>
          <li>Typescript</li>
          <li>
            React.js
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li>
            Shopify
            <FontAwesomeIcon icon={faShopify} />
          </li>
          <li>Liquid</li>
          <li>Next.js</li>
          <li>jQuery</li>
          <li>Tailwind CSS</li>
          <li>
            Figma
            <FontAwesomeIcon icon={faFigma} />
          </li>
          <li>SQL</li>
          <li>
            Git version control <FontAwesomeIcon icon={faGit} />
          </li>
          <li>
            Github
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
