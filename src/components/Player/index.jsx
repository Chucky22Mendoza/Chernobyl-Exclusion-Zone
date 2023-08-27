import React, { useState } from 'react';
import styles from './player.module.css';

function Player() {
  const [player, setPlayer] = useState({
    audio: typeof Audio !== "undefined" && new Audio('/assets/audio/background-song.mp3'),
    isPlaying: false,
  });

  const setPlayPause = () => {
    // Get state of song
    let isPlaying = player.isPlaying;

    if (isPlaying) {
      // Pause the song if it is playing
      player.audio.pause();
    } else {
      player.audio.play();
    }

    // Change the state of song
    setPlayer({...player, isPlaying: !isPlaying });
  };

  return (
    <div className={styles.player}>
      {
        player.isPlaying ? (
          <button type="button" onClick={setPlayPause}>
            <img src="/assets/sound.png" alt="pause" />
            <img src="/assets/pause.png" alt="pause" />
          </button>
        ) : (
          <button type="button" onClick={setPlayPause}>
            <img src="/assets/zzz.png" alt="pause" />
            <img src="/assets/play.png" alt="play" />
          </button>
        )
      }
    </div>
  );
}

export default Player;
