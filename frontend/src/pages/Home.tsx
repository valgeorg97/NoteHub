import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

interface Note {
  id: number;
  title: string;
  content: string;
}

const Home = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5000/notes')
      .then((res) => {
        setNotes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-2/3 md:w-3/5 lg:w-2/3 h-4/5 bg-gray-700 rounded-lg shadow-lg overflow-y-auto px-8">
      <h1 className="text-3xl text-white py-4">My notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
        {loading ? (
          <Spinner />
        ) : (
          notes.map((note) => (
            <div key={note.id} className="block w-full h-full p-4 bg-orange-500 rounded-lg shadow-xl hover:scale-105 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{note.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;