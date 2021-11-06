import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import image from "../../images/student_photo.png";
const AboutMe = () => {
  return (
    <section className="about-me">
      <SectionTitle title="Студент" />
      <div className="about-me__content">
        <div className="about-me__text">
          <h2 className="about-me__name">Виталий</h2>
          <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__social">
            <li className="about-me__social-link">Facebook</li>
            <li className="about-me__social-link">Github</li>
          </ul>
        </div>
        <div className="about-me__image">
          <img src={image} alt="фото"></img>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
