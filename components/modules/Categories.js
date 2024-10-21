import styles from "./Categories.module.css";
import Suv from "./../icons/Suv";
import Sport from "./../icons/Sport";
import Sedan from "./../icons/Sedan";
import Hatchback from "./../icons/Hatchback";
import Link from "next/link";

function Categories() {
  return (
    <div className={styles.container}>
      <Link href={"/categories/sport"}>
        <div className={styles.item}>
          <p>Sport</p>
          <Sport />
        </div>
      </Link>
      <Link href={"/categories/suv"}>
        <div className={styles.item}>
          <p>suv</p>
          <Suv />
        </div>
      </Link>
      <Link href={"/categories/sedan"}>
        <div className={styles.item}>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href={"/categories/hatchback"}>
        <div className={styles.item}>
          <p>Hatchback</p>
          <Hatchback />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
