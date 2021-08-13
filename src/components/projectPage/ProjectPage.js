import Header from '../Header';
import classes from './ProjectPage.module.css';
import Head from 'next/head';
import Footer from '../Footer';

const ProjectPage = () => {
  return (
    <div className={classes.page}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>Projects</title>
        <link rel='icon' href='/title.png'></link>
      </Head>
      <Header />
      <div className={classes.body}>
        <div className={classes.projects}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
