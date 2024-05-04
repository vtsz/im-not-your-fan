import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import RenderNames from './RenderNames';

const FolderUpload = () => {
  const [fileContent1, setFileContent1] = useState(null);
  const [fileContent2, setFileContent2] = useState(null);
  const [isFile1Uploaded, setIsFile1Uploaded] = useState(false);
  const [isFile2Uploaded, setIsFile2Uploaded] = useState(false);

  const onDrop1 = (acceptedFiles) => {
    const file = acceptedFiles[0]; // Get the first accepted file
    const fileName = file.name.toLowerCase();
  
    // Check if the filename matches the expected filename for following
    if (fileName === 'following.html') {
      const reader = new FileReader();
  
      reader.onload = function () {
        const content = reader.result;
        setFileContent1(content);
        setIsFile1Uploaded(true);
      };
  
      reader.readAsText(file);
    } else {
      alert("Please upload a file named 'following.html' for the following.");
    }
  };

  const onDrop2 = (acceptedFiles) => {
    const file = acceptedFiles[0]; // Get the first accepted file
    const fileName = file.name.toLowerCase();
  
    // Check if the filename matches the expected filename for followers
    if (fileName === 'followers_1.html') {
      const reader = new FileReader();
  
      reader.onload = function () {
        const content = reader.result;
        setFileContent2(content);
        setIsFile2Uploaded(true);
      };
  
      reader.readAsText(file);
    } else {
      alert("Please upload a file named 'followers_1.html' for the followers.");
    }
  };

  const { getRootProps: getRootProps1, getInputProps: getInputProps1, isDragActive: isDragActive1 } = useDropzone({ onDrop: onDrop1, accept: '.html' });
  const { getRootProps: getRootProps2, getInputProps: getInputProps2, isDragActive: isDragActive2 } = useDropzone({ onDrop: onDrop2, accept: '.html' });

  return (
    <div>
      {!isFile1Uploaded && (
        <div {...getRootProps1()} style={{...dropzoneStyle, marginBottom: '10px'}}>
          <input {...getInputProps1()} />
          {
            isDragActive1 ?
              <p>Drop the HTML file here ...</p> :
              isFile1Uploaded ?
                <p>File 1 uploaded successfully</p> :
                <p>Upload following here, or click to select an HTML file</p>
          }
        </div>
      )}
      {!isFile2Uploaded && (
        <div {...getRootProps2()} style={dropzoneStyle}>
          <input {...getInputProps2()} />
          {
            isDragActive2 ?
              <p>Drop the HTML file here ...</p> :
              isFile2Uploaded ?
                <p>File 2 uploaded successfully</p> :
                <p>Upload followers here, or click to select an HTML file</p>
          }
        </div>
      )}
      {isFile1Uploaded && isFile2Uploaded && (
        <div>
          <h3>You are a fan of:</h3>
          <p><RenderNames following={fileContent1} followers={fileContent2} /></p>
        </div>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #ccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FolderUpload;