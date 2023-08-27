import React from 'react';
import styles from './interactive.module.css';

function Interactive() {
  return (
    <section className={styles.container}>
      <h1>Mapas interactivos</h1>
      <p>
        Deseamos brindarte una experiencia de inmersión única. Explora la Zona de Exclusión de Chernobyl a través de este <a href="https://www.cbc.ca/news2/interactives/360-chernobyl/chernobyl-full.html">enlace</a> o este otro <a href="https://www.360cities.net/es/area/chernobyl">enlace</a>. Podrás desplazarte por las calles desoladas, inspeccionar edificios abandonados y vislumbrar los efectos del desastre desde la seguridad de tu pantalla.
      </p>
      <p>
        Este recorrido virtual interactivo te permite apreciar de cerca la magnitud del desastre y la resiliencia de la naturaleza mientras te sumerges en una experiencia única que pocos tienen la oportunidad de vivir en persona.
      </p>
      <p>
        Recuerda que explorar la Zona de Exclusión de Chernobyl es una experiencia seria y respetuosa. La radiación todavía está presente y las precauciones deben ser tomadas en serio por aquellos que realmente visitan el lugar.
      </p>
    </section>
  );
}

export default Interactive;
