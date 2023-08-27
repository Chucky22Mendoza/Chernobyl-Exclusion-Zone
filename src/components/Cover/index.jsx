import React from 'react';
import styles from './cover.module.css';

function index() {
  return (
    <div className={styles.cover}>
      <div className={styles.blur}>
        <h1>Chernobyl</h1>
        <span>Sumérgete en la historia sombría y la atmósfera única de Chernobyl, el sitio de uno de los desastres nucleares más catastróficos de la historia. Explora la ciudad abandonada de Pripyat y adéntrate en la Zona de Exclusión, un área congelada en el tiempo por la radiación que dejó una huella indeleble en la historia y el paisaje.</span>
      </div>
    </div>
  );
}

export default index;
