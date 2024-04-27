export interface Note {
    id: number;
    title: string;
    content: string;
    created_at: string;
  };

export interface NotesListProps{
    notes: Note[];
    onDelete: (deletedNoteId: number) => void;
};

export interface NotesCardProps{
    note: Note;
    onDelete: (deletedNoteId: number) => void;
};

export interface CreateNoteModalProps {
    onClose: () => void;
    onCreate: (newNoteData: Note) => void;
};