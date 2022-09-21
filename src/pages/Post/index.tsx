import { useParams } from "react-router-dom";
import styles from "./styles.module.css";

export function Post() {
  const { postId } = useParams();

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div>
          <a href='#'>voltar</a>
          <a href=''>ver no github</a>
        </div>
        <h3>JavaScript data types and data structures</h3>
        <div>
          <span>Maick Souza</span>
          <span>Há 1 dia</span>
          <span>5 comentários</span>
        </div>
      </main>

      <article className={styles.postContent}>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>
        <h4>Dynamic typing</h4>
        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
        <pre>
          let foo = 42; // foo is now a number
          <br />
          foo = ‘bar’; // foo is now a string
          <br />
          foo = true; // foo is now a boolean
        </pre>
      </article>
    </div>
  );
}
