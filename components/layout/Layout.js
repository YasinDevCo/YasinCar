import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
   <>
    <div style={{margin:"0 10px"}}>
      <header className={styles.header}>
        <Link href={"/"}>
          <h1>YasinCar</h1>
        </Link>
        <Link href={"/account"}>
          <button>My Account</button>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
    </div>
      <footer className={styles.footer}>
        Developed By Yasin With ❤️ &copy;
      </footer></>
  );
}

export default Layout;
