import BoardCreate from "./Components/BoardCreate";
import TrelloBoard from "./Components/TrelloBoard";
export default function Home() {
  return (
    <div className="ml-30 mt-16 p-5">
      <TrelloBoard></TrelloBoard>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create Board</h1>
        <BoardCreate></BoardCreate>
      </div>
    </div>
  );
}
