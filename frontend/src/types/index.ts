export interface Note {
    id: number;
    title: string;
    content: string;
  };

export interface NotesListProps{
    notes: Note[];
};

export interface NotesCardProps{
    note: Note
}