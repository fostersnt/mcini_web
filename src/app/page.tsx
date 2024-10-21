import React from "react";
import styles from "./page.module.css";
import UserIndexPage from "./users/page";
import Link from 'next/link'

const Home: React.FC = (): JSX.Element => {
  const userName: string = 'John Doe';
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Link href="/users">CLICK HERE TO VISIT USERS PAGE</Link>
        <h1>
        </h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
