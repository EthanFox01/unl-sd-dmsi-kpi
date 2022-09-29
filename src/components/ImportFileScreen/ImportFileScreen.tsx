import React, { useState } from 'react';

const ImportFileScreen = () => {
  const fileInput = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFileName, setSelectedFileName] = useState();

  const handleInputButtonClick = () => {
    fileInput.current.click();
  };

  const handleInputChange = event => {
    setSelectedFile(event.target.files[0]);
    setSelectedFileName(event.target.files[0].name);
  };

  return (
    <div>
      <button type="button" onClick={handleInputButtonClick}>Browse Files</button>
      <input type="file" 
        accept={'.xlsx,.xls'}
        style={{display:'none'}} 
        ref={fileInput}
        onChange={handleInputChange}
      />
      <p>{selectedFileName}</p>
    </div>
  );
};

export default ImportFileScreen;