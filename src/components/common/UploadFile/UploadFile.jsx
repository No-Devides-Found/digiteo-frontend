import React, {useState} from 'react';
import { VscClose } from 'react-icons/vsc';

import Axios from "axios";

// 파일 업로드 컴포넌트 
function UploadFile() {

  // 화면에 출력되는 파일 
  const [selectedFiles, setSelectedFiles] = useState([]); 
  // 서버에 보내지는 파일 
  const [sendFiles, setSendFiles] = useState([]); 

  

  const onSendFile=(e)=>{
    e.preventDefault(); 
    e.persist(); 
    const sendFiles = e.target.files;
    const fileUrlList= [...sendFiles];
    for(let i=0; i< sendFiles.length; i++){
      const nowUrl = URL.createObjectURL(sendFiles[i]);
      fileUrlList.push(nowUrl[i]);
    }
    setSendFiles(fileUrlList);

    const sendFilesArray = Array.from(sendFiles);
    
    // 브라우저 상에 보여질 파일 이름
    const selectedFilesArray = sendFilesArray.map((file) => {
      return file.name;
    });
    // 첨부파일 삭제시
    setSelectedFiles((previousFiles) => previousFiles.concat(selectedFilesArray));
    e.target.value = '';
  };
  
  // 브라우저에 보여질 첨부파일
  const attachFile =
    selectedFiles &&
    selectedFiles.map((file) => (
      <div key={file}>
        {file}{' '}
        <button onClick={() => setSelectedFiles(selectedFiles.filter((e) => e !== file))}>
        <VscClose size='10' /> 
        </button>
      </div>
    ));
  

  
  // 파일 서버로 보내는 건 작성 페이지에서 하는 건가요?


  return (
    <div>
      <div>첨부파일</div>
      {
        selectedFiles.length !== 0
        ? (<div> {attachFile} </div>)
        : (
          <div>파일을 첨부할 수 있습니다.</div>
        )
      }
      <div>
        
        {
          <input 
            type="file" 
            name="file" 
            onChange={onSendFile}
            accept=".png, .jpg, impage/*"
            />
        }
       
      </div>
      <div>
        {/* <button onClick={() => registApi(sendFiles)}>
          등록
        </button> */}
      </div>
      
      
    </div>
  );
};

export default UploadFile;