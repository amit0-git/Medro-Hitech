import styles from "./card.module.css";
import cards from "../../assets/cards.png"

function Card() {
  return (
    <img src={cards} alt="Job Cards" className={styles.card} />
  );
}

export default Card;