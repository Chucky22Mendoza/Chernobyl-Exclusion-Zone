import styles from './page.module.css';
import Cover from './components/Cover';
import Welcome from './components/Interactive';
import Player from './components/Player';
import Carousel from './components/Carousel';

export default function App() {
  return (
    <main className={styles.main}>
      <Player />
      <Cover />
      <Carousel />
      <Welcome />
    </main>
  )
}