const { Audio } = globalThis.window;

export default () => {
  return (
    <button
      onClick={() =>
        new Audio('http://demo.twilio.com/docs/classic.mp3').play()
      }
    >
      Play Sound Effect
    </button>
  );
};
