import NotesCard from "./NotesCard";
import { NotesListProps } from "../types";

const NotesList = ({ notes }:NotesListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
      {notes.map((note) => (
        <NotesCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;