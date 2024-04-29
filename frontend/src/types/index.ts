export interface Note {
    id: number;
    title: string;
    content: string;
    created_at?: string;
  };
export interface NewNote {
    title: string;
    content: string;
  };

export interface NotesListProps{
    notes: Note[];
    onDelete: (deletedNoteId: number) => void;
    onNoteClick: (note: Note) => void;
    selectedColor: string;
};

export interface NotesCardProps{
    note: Note;
    onDelete: (deletedNoteId: number) => void;
    onNoteClick: (note: Note) => void;
    selectedColor: string;
};

export interface CreateNoteModalProps {
    onClose: () => void;
    onCreate: (newNoteData: NewNote) => void;
};

export interface NoteDetailsModalProps {
    onClose: () => void;
    note: Note;
    onUpdate: (note: Note, updatedData: Note) => void;   
};

export interface LoginModalProps {
    onClose: () => void;
    signUpModalOpen: () => void;
};

export interface SignUpModalProps {
    onClose: () => void;
};

export interface HeaderProps {
    userEmail: string;
}