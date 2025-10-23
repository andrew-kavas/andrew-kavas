import audioFun from '#src/functions/audio-fun.js';

export default ({ soundUrl }) => {
  const playSound = () => {
    audioFun({ soundUrl: soundUrl });
  };

  return <button onClick={playSound}>Play Sound Effect</button>;
};

// import { useRef } from 'react';

// export default ({ src }) => {
//   const audioRef = useRef(null);

//   const playSound = () => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   };

//   const pauseSound = () => {
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }
//   };

//   return (
//     <div>
//       <audio ref={audioRef} src={src} controls />
//       <button onClick={playSound}>Play</button>
//       <button onClick={pauseSound}>Pause</button>
//     </div>
//   );
// };
