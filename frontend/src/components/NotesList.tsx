import NotesCard from "./NotesCard";
import { NotesListProps } from "../types";

const NotesList = ({ notes, onDelete, onNoteClick }: NotesListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 px-4">
      {notes.map((note) => (
        <NotesCard key={note.id} note={note} onDelete={onDelete} onNoteClick={onNoteClick} />
      ))}
    </div>
  );
};

export default NotesList;