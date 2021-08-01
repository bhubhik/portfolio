import classes from './ProjectBody.module.css';

const ProjectBody = () => {
  return (
    <div className={classes.projectBody}>
      <h1>Some Projects</h1>
      <div className={classes.display}>
        <div className={classes.card}></div>
        <div className={classes.card}></div>
        <div className={classes.card}></div>
        <div className={classes.card}></div>
      </div>
    </div>
  );
};

export default ProjectBody;
