import classes from '../styles/Home.module.css';
import Header from '../src/components/Header';
import Body from '../src/components/Body';
import Skills from '../src/components/Skills';
import ProjectBody from '../src/components/ProjectBody';
import Footer from '../src/components/Footer';
import Head from 'next/head';

const Homepage = () => {
  return (
    <div className={classes.home}>
      <Head>
        <title>Anubhab Karki</title>
        <link rel='icon' href='/title.png'></link>
      </Head>
      <Header />
      <div className={classes.display}>
        <Body />
        <Skills />
        <ProjectBody />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
