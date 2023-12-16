import "../css/cards.css";

function Card({ image_src, monster, rotate, handleFunction }) {
  if (!image_src || !monster) return null;
  return (
    <article className="card">
      <div
        className={!rotate ? "card__content" : "card__content rotate"}
        onClick={() => handleFunction(monster)}
      >
        <div className="card__front">
          <img className="card__img" src={image_src} alt={monster} />
          <p className="card__subtitle">{monster}</p>
        </div>
        <div className="card__back">
          <img
            src="/img/Monster-Hunter-Logo.png"
            alt="Monster hunter logo"
            className="card__body"
          />
        </div>
      </div>
    </article>
  );
}

export default Card;
