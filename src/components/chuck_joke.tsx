

interface ChuckJokeProps {
	"id":number,
	"joke": string
}

function ChuckJoke(props:ChuckJokeProps): React.ReactNode {
  return <p>{props.joke}</p>;
};

export default ChuckJoke;