import classes from './ProjectBody.module.css';
import Image from 'next/image';

const ProjectBody = () => {
  return (
    <div className={classes.projectBody}>
      <h1>Some Projects</h1>
      <div className={classes.display}>
        <div className={`${classes.card} ${classes.movieCompare}`}>
          <div className={classes.description}>
            <h1>Movie Compare</h1>
            <p>
              This app is made with plain javaScript. I have used OMDb API, to
              fetch the data. It compares between the data and returns a result
              on which movie has more rating, nominations, awards and others. I
              dsigned this webpage using Bulma CSS.
            </p>
            <a href='https://bhubhik.github.io/movie-compare/' target='_blank'>
              See project {`>>`}
            </a>
          </div>
        </div>
        <div className={`${classes.card} ${classes.meetup}`}>
          <div className={classes.description}>
            <h1>Meetups</h1>
            <p>
              This app is made using Next.js and Mongodb. I learned how to store
              the data on cloud database which was very exciting. Basically, a
              user fills up a form and provides a URL for the image and that
              data is stored in the database and also posted on the webpage.
            </p>
            <a href='https://meetups-zeta.vercel.app/' target='_blank'>
              See project {`>>`}
            </a>
          </div>
        </div>
        <div className={`${classes.card} ${classes.unsplash}`}>
          <div className={classes.description}>
            <h1>Get Photos</h1>
            <p>
              I used React for this project and Material-UI for the design. I
              have also used Api of Unsplash from where I fetch the photos and
              display them. Material-ui really is awesome, it made it easy to
              design. The GridList component really came on handy to display the
              photos.
            </p>
            <a href='https://bhubhik.github.io/get-photos/' target='_blank'>
              See project {`>>`}
            </a>
          </div>
        </div>
        <div className={`${classes.card} ${classes.wikiSearch}`}>
          <div className={classes.description}>
            <h1>Wiki Search</h1>
            <p>
              Made this project using React, it puts a the users search query on
              the wikepedia URL and then fetches and display the results on the
              search query. I have used only CSS to design the page.
            </p>
            <a href='https://bhubhik.github.io/wiki-search/' target='_blank'>
              See project {`>>`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBody;
