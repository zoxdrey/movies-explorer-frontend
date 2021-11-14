import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__devider"></div>
      <div className="footer__bottom">
        <div className="footer__year">© 2020</div>
        <ul className="footer__social">
          <li className="footer__social-link">Яндекс.Практикум</li>
          <li className="footer__social-link">Github</li>
          <li className="footer__social-link">Facebook</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
