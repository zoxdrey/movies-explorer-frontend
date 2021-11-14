import "./Techs.css";
import SectionTitle from "../SectionTitle/SectionTitle";

const Techs = () => {
  return (
    <section className="tech">
      <SectionTitle title="Технологии" />

      <h2 className="tech__title">7 технологий</h2>
      <p className="tech__subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="tech__list">
        <li className="tech__list-item">HTML</li>
        <li className="tech__list-item">CSS</li>
        <li className="tech__list-item">JS</li>
        <li className="tech__list-item">React</li>
        <li className="tech__list-item">Git</li>
        <li className="tech__list-item">Express.js</li>
        <li className="tech__list-item">mongoDB</li>
      </ul>
    </section>
  );
};

export default Techs;
