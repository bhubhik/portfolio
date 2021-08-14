import classes from './ProjectBody.module.css';
import Link from 'next/link';

const ProjectBody = () => {
  return (
    <div className={classes.projectBody}>
      <h1>Some Projects</h1>
      <div className={classes.display}>
        <div className={`${classes.card} ${classes.movieCompare}`}>
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
        </div>
        <div className={`${classes.card} ${classes.meetup}`}>
          <div className={classes.description}>
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
        </div>
        <div className={`${classes.card} ${classes.unsplash}`}>
          <div className={classes.description}>
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
        </div>
        <div className={`${classes.card} ${classes.wikiSearch}`}>
          <div className={classes.description}>
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
        </div>
      </div>

      <h3>
        <Link href='/projects'>See more projects</Link>
      </h3>
    </div>
  );
};

export default ProjectBody;
