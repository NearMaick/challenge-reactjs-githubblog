import { useEffect, useState } from "react";

import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";

import styles from "./styles.module.css";

interface PostProps {
  title: string;
  user: {
    login: string;
  };
  body: string;
  comments: string;
  updated_at: string;
}

export function Post() {
  const [issuePost, setIssuePost] = useState({} as PostProps);
  const { postId } = useParams();

  // https://api.github.com/users/nearmaick
  // https://api.github.com/repos/NearMaick/challenge-reactjs-githubblog/issues
  // https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:NearMaick/challenge-reactjs-githubblog

  async function loadIssuePost() {
    const response =
      await fetch(`https://api.github.com/repos/NearMaick/challenge-reactjs-githubblog/issues/${postId}
    `);
    const data = await response.json();
    setIssuePost(data);
  }

  useEffect(() => {
    loadIssuePost();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.linkContainer}>
          <a href='#'>voltar</a>
          <a href=''>ver no github</a>
        </div>
        <h3>{issuePost.title}</h3>
        <div className={styles.descriptionContainer}>
          <span>{issuePost.user?.login}</span>
          <span>
            {issuePost.updated_at &&
              formatDistanceToNow(new Date(issuePost.updated_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
          <span>{issuePost.comments} comentários</span>
        </div>
      </main>

      <article className={styles.postContent}>
        <ReactMarkdown
          className={styles.issuePostContainer}
          remarkPlugins={[remarkGfm]}
          children={issuePost.body}
        />
      </article>
    </div>
  );
}
