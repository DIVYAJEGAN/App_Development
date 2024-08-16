import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ForumContext = createContext();

export const ForumProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username'); 

    const fetchPosts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/posts', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const addPost = async (post) => {
        try {
            await axios.post('http://localhost:5000/api/posts', post, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchPosts(); // Refresh posts after adding a new one
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const deletePost = async (postId) => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${postId}`, {
                headers: { Authorization: `Bearer ${token}`, username }
            });
            fetchPosts(); // Refresh posts after deleting
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <ForumContext.Provider value={{ posts, fetchPosts, addPost, deletePost }}>
            {children}
        </ForumContext.Provider>
    );
};
