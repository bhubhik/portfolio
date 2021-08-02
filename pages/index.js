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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Saira:wght@200&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Sahitya&display=swap'
          rel='stylesheet'
        />
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
