import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, NotesList, CreateNoteModal } from "../components";
import { Note } from "../types";
import { IoCreateOutline } from "react-icons/io5";


const Home = () => {
  const [notes, setNotes] = useState([] as Note[]);
  const [loading, setLoading] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const createNote = async (newNoteData: Note) => {
    try {
    const res = await axios.post('http://localhost:5000/notes', newNoteData);
      setNotes(prevNotes => [...prevNotes, res.data]);
      setOpenCreateModal(false);
    } catch(err){
      console.error(err);
    }
  };

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
    <div className="w-2/3 md:w-3/5 lg:w-2/3 h-4/5 bg-gray-700 rounded-lg shadow-lg overflow-y-auto px-8 relative">
      <h1 className="text-3xl text-white py-4">My notes</h1>
      <IoCreateOutline onClick={() => setOpenCreateModal(true)} className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer" size={36} />
      {loading ? (
        <Spinner />
      ) : (
        <NotesList notes={notes} />
      )}
      {openCreateModal && <CreateNoteModal onClose={() => setOpenCreateModal(false)} onCreate={createNote} />}
    </div>
  );
};

export default Home;