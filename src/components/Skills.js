import classes from './Skills.module.css';

const Skills = () => {
  return (
    <div className={classes.skillBody}>
      <h1>Skills</h1>
      <div className={classes.list}>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Typescript</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>jQuery</li>
          <li>Tailwind CSS</li>
          <li>Figma</li>
          <li>SQL</li>
          <li>Git version control </li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
