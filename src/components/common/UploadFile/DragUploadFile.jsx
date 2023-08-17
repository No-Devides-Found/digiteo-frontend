import React, { useState } from 'react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
//import './DragAndDropUpload.css'; // Import your CSS or style as needed
import {Box, Grid, Typography, Button,ButtonBase} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledGrid=styled(Grid)({
  background:"#E0E0E0",
  borderRadius:"20px",
  padding:"1rem 3rem"

})

function DragUploadFile() {
  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    const newFiles = [...files];
    const droppedFiles = Array.from(e.dataTransfer.files);

    for (const file of droppedFiles) {
      if (!newFiles.some((f) => f.name === file.name)) {
        newFiles.push(file);
      }
    }

    setFiles(newFiles);
  };

  const handleFileInput = (e) => {
    const newFiles = [...files];
    const selectedFiles = Array.from(e.target.files);

    for (const file of selectedFiles) {
      if (!newFiles.some((f) => f.name === file.name)) {
        newFiles.push(file);
      }
    }

    setFiles(newFiles);
  };

  const removeFile = (fileName) => {
    const newFiles = files.filter((file) => file.name !== fileName);
    setFiles(newFiles);
  };

  return (
    <StyledGrid >
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{marginBottom:"1rem"}}>
            <label htmlFor="file-input" style={{ display: 'block', marginTop: '10px' , marginLeft:"1rem"}}>
              <button
                style={{
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: 'black',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                파일 찾기
                <FolderOpenIcon style={{ marginLeft: '5px' }} />
              </button>
            </label>
            <input
              id="file-input"
              type="file"
              multiple
              style={{ display: 'none'}}
              onChange={handleFileInput}
            />
        </div>

      </div>
      
     

      
      <div
        style={{
          border: "none",
          borderRadius: '20px',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: 'white',
          cursor: 'pointer',
          color:"#7C7C7C",
          height:"fit-content",
        }}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        
        {
          files.length === 0
          ? <div> 파일을 끌어다 업로드하세요. </div>
          : 
          <div>
            <div> 파일을 끌어다 업로드하세요. </div>
            <ul style={{margin:"1rem"}}>
              {files.map((file) => (
                <li key={file.name} style={{lineHeight:"1rem"}}>
                  {file.name}{' '}
                  <button onClick={() => removeFile(file.name)}
                  style={{
                    
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: 'black',
                    cursor: 'pointer',
                  }}
                  >
                    <HighlightOffIcon style={{fontSize:"1rem"}}/>
                  </button>
                </li>
              ))}
            </ul>

          </div>
          
        }
      </div>
      
      
      
    </StyledGrid>
  );
};


export default DragUploadFile;