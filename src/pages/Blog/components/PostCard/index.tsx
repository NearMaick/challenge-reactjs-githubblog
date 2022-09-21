import styles from "./styles.module.css";

export function PostCard() {
  return (
    <article>
      <div className={styles.content}>
        <h2 className={styles.title}>
          Tipos de dados e estruturas de dados JavaScript
        </h2>
        <span>Há 1 dia</span>
      </div>
      <p>
        Todas as linguagens de programação têm estruturas de dados incorporadas,
        mas muitas vezes diferem de uma língua para outra. Este artigo tenta
        listar as estruturas de dados incorporadas disponíveis no JavaScript e
        quais propriedades eles têm. Estes podem ser usados para construir
        outras estruturas de dados. Sempre que possível, comparações com outras
        línguas são desenhadas.
      </p>
    </article>
  );
}
