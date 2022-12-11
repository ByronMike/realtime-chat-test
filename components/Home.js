import styles from '../styles/Home.module.css';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <Link href="/chat">Go to profile page</Link>
        </h1>
      </main>
    </div>
  );
}

export default Home;
