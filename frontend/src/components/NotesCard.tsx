import { NotesCardProps } from "../types";
import { RiCloseFill } from "react-icons/ri";

const NotesCard = ({ note, onDelete }: NotesCardProps) => {

    const handleDelete = () => {
        onDelete(note.id);
    };
    return (
        <div className="relative block w-full h-full p-4 bg-orange-500 rounded-lg 
            shadow-xl hover:scale-105 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <RiCloseFill onClick={handleDelete} className="absolute top-2 right-2 text-gray-800 cursor-pointer hover:text-red-600" size={20} />
            <h2 className="mb-2 text-sm font-bold tracking-tight text-gray-600 dark:text-white">{note.created_at}</h2>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h1>
            <p className="font-normal text-gray-700 dark:text-gray-400">{note.content}</p>
        </div>
    );
};

export default NotesCard;