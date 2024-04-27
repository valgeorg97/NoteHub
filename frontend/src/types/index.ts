export interface Note {
    id: number;
    title: string;
    content: string;
    created_at: string;
  };

export interface NotesListProps{
    notes: Note[];
};

export interface NotesCardProps{
    note: Note;
};

export interface CreateNoteModalProps {
    onClose: () => void;
    onCreate: (newNoteData: Note) => void;
  }