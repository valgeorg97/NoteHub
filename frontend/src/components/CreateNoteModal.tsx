import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { CreateNoteModalProps } from "../types";
import { useCookies } from "react-cookie";
import { useSnackbar } from "notistack";

const CreateNoteModal = ({ onClose, onCreate }: CreateNoteModalProps) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [cookies] = useCookies();
    const userEmail = cookies.Email;
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newNote = {
                title,
                content,
                userEmail: userEmail
            };
            onCreate(newNote);
            onClose();
            enqueueSnackbar("Note added successfully!", 
            { variant: "success", anchorOrigin: { vertical: "top", horizontal: "center" } }); 
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center 
    w-full h-full bg-gray-800 bg-opacity-50">
            <div className="bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white text-lg font-semibold">Create New Note</h3>
                    <CgCloseO onClick={(onClose)} className="text-red-500 hover:text-red-700 
          hover:cursor-pointer focus:outline-none" size={24} />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-white">Title</label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
            shadow-sm sm:text-md border-gray-300 rounded-md p-2" maxLength={25} required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-sm font-medium text-white">Content</label>
                        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)}
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full 
            shadow-sm sm:text-md border-gray-300 rounded-md p-2"></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button type="button" onClick={onClose}
                            className="mr-4 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 
            focus:outline-none focus:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
            focus:outline-none focus:bg-blue-700">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNoteModal;