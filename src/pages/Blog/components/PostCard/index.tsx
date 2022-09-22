import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Post } from "../..";
import styles from "./styles.module.css";

export function PostCard({ body, title, number, updated_at }: Post) {
  return (
    <article>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <span>
          {formatDistanceToNow(new Date(updated_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <p>{body}</p>
    </article>
  );
}
