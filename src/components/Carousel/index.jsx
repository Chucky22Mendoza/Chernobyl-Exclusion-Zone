import React from 'react';
import Images from './Images';
import styles from './carousel.module.css';

function Carousel() {
  return (
    <section className={styles.wrapper}>
      <div>
        <h1>Galería interactiva</h1>
        <p>
          Contempla las imágenes, videos y documentales impresionantes de edificios en ruinas, calles cubiertas de vegetación y objetos abandonados que cuentan la historia de la vida que una vez floreció aquí. Los videos capturan la quietud inquietante y los detalles evocadores de esta tierra abandonada.
        </p>
      </div>
      <Images />
      <iframe src="https://www.youtube.com/embed/lOVqbd8IE-w?si=odTbBWz0sQUUdWDJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      <iframe src="https://www.youtube.com/embed/LrivExmHYxM?si=d2ENN0WJXTwuQm2D" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </section>
  );
}

export default Carousel;
