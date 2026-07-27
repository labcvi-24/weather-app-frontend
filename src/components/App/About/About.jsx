import "./About.css";

function About() {
  return (
    <main className="about">

      <section className="about__card">

        <h2 className="about__name">
          Luisandra Briceño
        </h2>

        <p className="about__role">
          Frontend Developer
        </p>

        <section className="about__section">

          <h3>About Me</h3>

          <p>
            I'm a Frontend Developer passionate about creating clean,
            responsive, and user-friendly web applications. I enjoy
            transforming ideas into intuitive digital experiences while
            continuously improving my skills through personal projects and
            new challenges.
          </p>

        </section>

        <section className="about__section">

          <h3>About Weather Mood</h3>

          <p>
            Weather Mood was created with the idea of helping people discover
            activities based on the current weather in the city they are
            visiting. Instead of only checking the forecast, users receive
            recommendations for places and experiences that better match the
            weather conditions, making it easier to plan their day.
          </p>

        </section>

      </section>

    </main>
  );
}

export default About;