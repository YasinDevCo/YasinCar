import { useRouter } from "next/router";
import Card from "./../modules/Card";
import Back from "./../icons/Back"
import styles from "./CardsList.module.css";
function CarsList({ data }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={() => router.back()}>
        <Back/>
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
