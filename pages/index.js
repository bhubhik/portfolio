import classes from '../styles/Home.module.css';
import Header from '../src/components/Header';
import Body from '../src/components/Body';
import Skills from '../src/components/Skills';
import ProjectBody from '../src/components/ProjectBody';
import Footer from '../src/components/Footer';
import Head from 'next/head';
import AboutMe from '../src/components/AboutMe';

const Homepage = () => {
  return (
    <div className={classes.home}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>Anubhab Karki</title>
        <link rel='icon' href='/title.png'></link>
      </Head>
      <Header />
      <div className={classes.display}>
        <Body />
        <AboutMe />
        <Skills />
        <ProjectBody />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
