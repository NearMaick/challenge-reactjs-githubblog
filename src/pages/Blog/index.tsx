import { PostCard } from "./components/PostCard";
import styles from "./styles.module.css";

export function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <img
          className={styles.image}
          src='https://github.com/nearmaick.png'
          alt=''
        />
        <div className={styles.profile}>
          <div className={styles.profileContent}>
            <h2>Maick Souza</h2>
            <a href='#'>github</a>
          </div>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan
            disputationi eu sit. Vide electram sadipscing et per. Per aumento de
            cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im
            ampola pa arma uma pindureta.
          </p>
          <div className={styles.profileContent}>
            <span>Maick Souza</span>
            <span>32 seguidores</span>
          </div>
        </div>
      </main>

      <div className={styles.postsSearchContainer}>
        <div className={styles.postsBanner}>
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>
        <input type='text' placeholder='Buscar conteúdo' />
      </div>

      <div className={styles.postCardContainer}>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
