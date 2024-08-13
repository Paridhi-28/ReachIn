import React from "react";
import "./TextEditor.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


const TextEditor = () => {
    const modules = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            [{ 'color': [] }, { 'background': [] }],
            ['link', 'image', 'video'],
            ['clean'],
            [{ 'save': 'SAVE' }, { 'variables': 'Variables' }]
        ]
    };

    return (
        <ReactQuill theme="snow" modules={modules} />
    );
};

export default TextEditor;
