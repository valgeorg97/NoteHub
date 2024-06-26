import React from 'react';
import { NotesCardProps } from "../types";
import { RiCloseFill } from "react-icons/ri";
import { useSnackbar } from 'notistack';

const NotesCard = ({ note, onDelete, onNoteClick }: NotesCardProps) => {
    const { enqueueSnackbar } = useSnackbar(); 

    const handleDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation(); 
        onDelete(note.id);
        enqueueSnackbar('Note deleted successfully!', { variant: 'success', anchorOrigin: { vertical: "top", horizontal: "center" } }); 
    };

    const handleClick = () => {
        onNoteClick(note);
    };

    const formattedDate = note.created_at?.substring(0, 10) ?? '';

    const truncatedContent = note.content.length > 30 ? `${note.content.substring(0, 30)}...` : note.content;

    return (
        <div className={`relative block w-full h-full p-4 rounded-lg shadow-xl hover:scale-105 
        hover:cursor-pointer bg-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`} onClick={handleClick}>
            <div onClick={(e) => handleDelete(e)} 
            className="absolute top-2 right-2 text-gray-800 cursor-pointer hover:text-gray-500">
                <RiCloseFill size={28} />
            </div>
            <h2 className="mb-2 text-sm font-bold tracking-tight text-gray-600 dark:text-white">{formattedDate}</h2>
            <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-clip overflow-hidden">{note.title}</h1>
            <p className="font-normal text-gray-700 dark:text-gray-400 text-clip overflow-hidden">{truncatedContent}</p>
        </div>
    );
};

export default NotesCard;