import "./AboutProject.css";

const AboutProject = () => {
  return (
    <div className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__devider"></div>

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
        <div className="progress-bar__item">
          <div className="progress-bar__section">1 неделя</div>
          <div className="progress-bar__subtitle">Back-end</div>
        </div>
        <div className="progress-bar__item">
          <div className="progress-bar__section">4 недели</div>
          <div className="progress-bar__subtitle">Front-end</div>
        </div>
      </div>
    </div>
  );
};

export default AboutProject;
