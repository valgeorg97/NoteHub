import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, NotesList, CreateNoteModal, NoteDetailsModal } from "../components";
import { Note, NewNote } from "../types";
import { IoCreateOutline } from "react-icons/io5";

const Home = () => {
  const [notes, setNotes] = useState([] as Note[]);
  const [loading, setLoading] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null as Note | null);
  const [selectedColor, setSelectedColor] = useState("orange-500"); 
  console.log(selectedColor)

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

  const handleCreateNote = async (newNoteData: NewNote) => {
    try {
      const res = await axios.post('http://localhost:5000/notes', newNoteData);
      setNotes(prevNotes => [...prevNotes, res.data]);
      setOpenCreateModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateNote = async (note: Note, updatedNoteData: Note) => {
    try {
      await axios.put(`http://localhost:5000/notes/${note.id}`, updatedNoteData);
      setNotes(prevNotes =>
        prevNotes.map(prevNote =>
          prevNote.id === note.id ? { ...prevNote, ...updatedNoteData } : prevNote
        )
      );
      setSelectedNote(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteNote = async (deletedNoteId: number) => {
    try {
      await axios.delete(`http://localhost:5000/notes/${deletedNoteId}`);
      setNotes(prevNotes => prevNotes.filter(note => note.id !== deletedNoteId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
  };

  const handleCloseNoteDetails = () => {
    setSelectedNote(null); 
  };

  return (
    <div className="w-2/3 md:w-3/5 lg:w-2/3 h-4/5 bg-gray-700 rounded-lg shadow-lg overflow-y-auto px-8 relative">
      <h1 className="text-3xl text-white py-4">My notes</h1>

      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)} 
      className="absolute top-5 right-16 bg-white text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-md p-1">
        <option value="orange-500">Orange</option>
        <option value="blue-500">Blue</option>
        <option value="green-500">Green</option>
      </select>
      <IoCreateOutline onClick={() => setOpenCreateModal(true)} className="absolute top-4 right-4 text-white hover:text-gray-300 cursor-pointer" size={36} />
      {loading ? (
        <Spinner />
      ) : (
        <NotesList notes={notes} onDelete={handleDeleteNote} onNoteClick={handleNoteClick} selectedColor={selectedColor} />
      )}
      {openCreateModal && <CreateNoteModal onClose={() => setOpenCreateModal(false)} onCreate={handleCreateNote} />}
      {selectedNote && <NoteDetailsModal note={selectedNote} onClose={handleCloseNoteDetails} onUpdate={handleUpdateNote} />}

    </div>
  );
};

export default Home;