import { useWinners } from "../../hooks/useWinners";

const Leaderboard = () => {
  const { winners, loading, error } = useWinners();

  return (
    <section>
      <ul>
        {winners && winners.map((winner) => (
          <li>{winner.name}</li>
        ))}
      </ul>
    </section>
  )
};

export { Leaderboard };
