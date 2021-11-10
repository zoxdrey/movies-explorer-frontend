import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <SectionTitle title="О проекте" />
      <div className="about-project__table">
        <div className="about-project__table-column">
          <div className="about-project__table-header">
            Дипломный проект включал 5 этапов
          </div>
          <div className="about-project__table-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </div>
        </div>
        <div className="about-project__table-column">
          <div className="about-project__table-header">
            На выполнение диплома ушло 5 недель
          </div>
          <div className="about-project__table-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </div>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-bar__item progress-bar__item_active">
          <div className="progress-bar__section progress-bar__section_active">
            1 неделя
          </div>
          <div className="progress-bar__subtitle">Back-end</div>
        </div>
        <div className="progress-bar__item">
          <div className="progress-bar__section">4 недели</div>
          <div className="progress-bar__subtitle">Front-end</div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
