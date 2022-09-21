import { useEffect, useState } from "react";
import { PostCard } from "./components/PostCard";
import styles from "./styles.module.css";

interface Profile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
}

export function Blog() {
  const [profile, setProfile] = useState({} as Profile);

  async function loadProfile() {
    const response = await fetch("https://api.github.com/users/nearmaick");
    const data = await response.json();
    setProfile(data);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <img className={styles.image} src={profile.avatar_url} alt='' />
        <div className={styles.profile}>
          <div className={styles.profileContent}>
            <h2>{profile.name}</h2>
            <a href='#'>github</a>
          </div>
          <p>{profile.bio}</p>
          <div className={styles.profileContent}>
            <span>@{profile.login}</span>
            <span>{profile.followers} seguidores</span>
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
