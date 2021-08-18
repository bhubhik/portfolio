import classes from './Aboutme.module.css';

const AboutMe = () => {
  return (
    <div className={classes.card}>
      <section>
        <h1>little about me</h1>
        <p>
          Things change, career decisions change, and it is never too late to
          follow your resolution. A 24-year-old guy who made his decision to
          build his career as a developer at early 22, while halfway through
          getting a degree in accounting. After my bachelor{`'`}s, I planned to
          start working for a bank, but as I said, decisions change. I knew the
          basics of computer science and programming from my diploma so, I
          pursued to become a frontend developer and I also got my degree along
          the way. I started taking online courses and started building websites
          and learned many exciting new kinds of stuff, and I{`'`}m learning
          more day by day. I am a tech lover and I{`'`}m very fascinated by
          modern technologies. And today I am presenting you what I{`'`}ve
          learned in this portfolio and my projects. <h3>Thank you.</h3>
        </p>
      </section>

      <div className={classes.image}></div>
    </div>
  );
};

export default AboutMe;
