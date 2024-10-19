import styles from "./CardsPage.module.css";
import Card from "../modules/Card";

function CardsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
 
    </div>
  );
}

export default CardsPage;
