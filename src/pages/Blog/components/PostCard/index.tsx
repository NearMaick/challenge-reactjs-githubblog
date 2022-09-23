import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";
import { Post } from "../..";

import styles from "./styles.module.css";

export function PostCard({ body, title, number, updated_at }: Post) {
  const bodyLimited = body.substring(0, 512).replace(/[#*]/g, "");

  return (
    <Link to={`/post/${number}`}>
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
        <p>{bodyLimited}...</p>
      </article>
    </Link>
  );
}
