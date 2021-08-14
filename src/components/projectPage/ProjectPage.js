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
          <div className={classes.description}>
            <h1>Movie Compare</h1>
            <p>
              A movie comparing app made using <strong>javaScript</strong> which
              fetches data from a movie API. It compares between two movies,
              according to their ratings, and provides the result. I have used{' '}
              <strong>OMDB Api</strong>, to fetch the data. I dsigned this
              webpage using <strong>Bulma CSS</strong>.
            </p>
            <a
              href='https://bhubhik.github.io/movie-compare/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
          <div className={classes.description}>
            {' '}
            <h1>Meetups</h1>
            <p>
              This app is made using <strong>Next.js</strong> and{' '}
              <strong>MongoDB</strong>. Users can fill up the form and on
              submit, that data is stored in the <strong>MongoDB</strong> online
              database and is also fetched and posted on the homepage in real-
              time. I learned how to store the data on cloud database which was
              very exciting.
            </p>
            <a
              href='https://meetups-zeta.vercel.app/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
          <div className={classes.description}>
            {' '}
            <h1>Get Photos</h1>
            <p>
              I used <strong>React</strong> for this project and{' '}
              <strong>Material-UI</strong> for the design. I have also used Api
              of <strong>Unsplash</strong> from where I fetch the photos and
              display them. Material-ui can be really helpful in designing, and
              it provides a big components library.
            </p>
            <a
              href='https://bhubhik.github.io/get-photos/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
          <div className={classes.description}>
            {' '}
            <h1>Weather now</h1>
            <p>
              Weather app made using <strong>React</strong> and styled using{' '}
              <strong>Tailwind CSS</strong>. It calls a weather API to get the
              results. It tracks your geo location and display the weather. I
              also added a search input box where you can search for any city
              and get the realtime weather and time.
            </p>
            <a
              href='https://bhubhik.github.io/weather-app/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
          <div className={classes.description}>
            <h1>Music Player</h1>
            <p>
              A straightforward music player, with limited tunes made using
              javaScript, where I added some fucntions to track, set and update
              the song progress.
            </p>
            <a
              href='https://bhubhik.github.io/musicplayer/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
          <div className={classes.description}>
            {' '}
            <h1>Wiki Search</h1>
            <p>
              Made this project using <strong>React</strong>, it takes users
              search query, and then calls an wikipedia <strong>API</strong> to
              fetch data. After the results are fetched, it then returns styled
              divs with the results.
            </p>
            <a
              href='https://bhubhik.github.io/wiki-search/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
          <div className={classes.description}>
            <h1>Secret Message</h1>
            <p>
              A small JsVanilla app, where a user message is Encoded to{' '}
              <strong>Base64</strong> format, and when the link is opened, it
              then decodes the query and displays the message. I used{' '}
              <strong>atob()</strong> and <strong>btoa()</strong> method for
              encoding.
            </p>
            <a
              href='https://bhubhik.github.io/secretMessage/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
          <div className={classes.description}>
            {' '}
            <h1>Todo App</h1>
            <p>
              Todo list app, where I added some sorting functions where you can
              choose to see your completed list, uncompleted and all of your
              list.
            </p>
            <a
              href='https://bhubhik.github.io/todo-jsvanilla/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
          <div className={classes.description}>
            {' '}
            <h1>Timer</h1>
            <p>
              A timer app made using javaScript and CSS. I used the{' '}
              <strong>SVG</strong> element to make the circle, and change the
              value of its <strong>stroke</strong> as time changes.
            </p>
            <a
              href='https://bhubhik.github.io/timer/'
              target='_blank'
              rel='noreferrer'
            >
              See project {`>>`}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
