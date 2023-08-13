/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState } from "react";
import style from "./MainBar.module.css";
import PlayerProgress from "./playerProgress/playerProgress";
import PlayerBlock from "./playerBlock/playerBlock";

function MainBar({ loading, playTrack }) {
  const audioRef = useRef(null);
  const [repeat, setRepeat] = useState(false);

  return (
    <div className={style.bar__content}>
      <audio
        ref={audioRef}
        src={playTrack ? playTrack.track_file : null}
        autoPlay
        loop={repeat}
      />
      <PlayerProgress audioRef={audioRef} />
      <PlayerBlock
        repeat={repeat}
        setRepeat={setRepeat}
        audioRef={audioRef}
        loading={loading}
      />
    </div>
  );
}

export default MainBar;
