import { NotesCardProps } from "../types";

const NotesCard = ({ note }:NotesCardProps) => {
    return (
        <div className="block w-full h-full p-4 bg-orange-500 rounded-lg shadow-xl 
    hover:scale-105 hover:cursor-pointer
     dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{note.content}</p>
        </div>
    );
};

export default NotesCard;
