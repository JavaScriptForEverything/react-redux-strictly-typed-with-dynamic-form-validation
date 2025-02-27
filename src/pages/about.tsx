import React from 'react';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-[10rem]">
        <h1 className="text-6xl font-extrabold">Quill.Js Text Editor</h1>
      </div>
      <ReactQuill theme='snow'/>
    </div>
  );
};

export default TextEditor