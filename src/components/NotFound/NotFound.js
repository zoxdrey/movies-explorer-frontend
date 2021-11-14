import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__text">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>

      <div className="not-found__link">Назад</div>
    </div>
  );
};

export default NotFound;
