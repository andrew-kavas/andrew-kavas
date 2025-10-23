import { useEffect, useState } from 'react';

const { setInterval, clearInterval } = globalThis;

const AsciiAnimation = ({ frames, intervalTime = 200 }) => {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex(i => (i + 1) % frames.length);
    }, intervalTime);
    return () => clearInterval(interval);
  }, [frames, intervalTime]);

  return (
    <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
      {frames[frameIndex]}
    </pre>
  );
};

export default () => {
  const frames = [
    `
     .-.
    (o o)
     |O|
     | |
     '-'
    `,
    `
     .-.
    (o o)
     |O|
     | |
     ~~~
    `
  ];

  return <AsciiAnimation frames={frames} intervalTime={500} />;
};
