

interface ChuckJokeProps {
	"key":number,
	"joke": string
}

const ChuckJoke = (props:ChuckJokeProps) => {
  return <p>{props.joke}</p>;
};

export default ChuckJoke;