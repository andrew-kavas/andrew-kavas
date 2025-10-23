const { Audio } = globalThis.window;

export default ({ soundUrl }) => new Audio(soundUrl).play();
