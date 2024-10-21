import React from "react";
import styles from "./page.module.css";
import UserIndexPage from "./users";

const Home: React.FC = () => {
  const userName: string = 'John Doe';
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <UserIndexPage myName={userName} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
