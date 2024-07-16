'use client'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddArticleForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const notify = () => toast("Wow so easy!");


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') return toast.error('Title is required');
        if (description.trim() === '') return toast.error('Description is required');

        // Logic to handle form submission
        toast.success('Article submitted successfully');
        // You can add further logic to submit data to backend here
    };

    return (
        <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="Title" className="block text-sm font-medium mb-2">Title</label>
                    <input
                        type="text"
                        id="Title"
                        name="Title"
                        placeholder="Your Title"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Description" className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                        id="Description"
                        name="Description"
                        placeholder="Your description"
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-sky-700 text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-200"
                >
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddArticleForm;
