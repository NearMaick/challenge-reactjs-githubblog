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

export interface Post {
  id?: number;
  number: number;
  title: string;
  body: string;
  updated_at: Date;
}

export function Blog() {
  const [profile, setProfile] = useState({} as Profile);
  const [posts, setPosts] = useState([] as Post[]);

  async function loadProfile() {
    const response = await fetch("https://api.github.com/users/nearmaick");
    const data = await response.json();
    setProfile(data);
  }

  async function loadIssuesPosts() {
    const response = await fetch(
      "https://api.github.com/repos/NearMaick/challenge-reactjs-githubblog/issues"
    );
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    loadIssuesPosts();
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
        {posts.map(({ id, body, number, title, updated_at }) => (
          <PostCard
            key={id}
            body={body}
            number={number}
            title={title}
            updated_at={updated_at}
          />
        ))}
      </div>
    </div>
  );
}
