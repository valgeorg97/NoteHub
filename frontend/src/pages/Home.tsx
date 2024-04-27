import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, NotesList } from "../components";
import { Note } from "../types";

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
      {loading ? (
        <Spinner />
      ) : (
        <NotesList notes={notes} />
      )}
    </div>
  );
};

export default Home;