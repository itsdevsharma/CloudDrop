import { useState } from "react";
import API from "../axiosInstance";
import "../styles/upload.css";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/my-files");
  }

  //
  const handleUpload = async () => {
  const formData = new FormData();
  formData.append("file", selectedFile);

  const res = await axios.post(
    "http://localhost:5000/api/file/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }
  );

  console.log("Uploaded file:", res.data);
};


  return (
    <div className="uploadpage">
      <h1>CloudDrop</h1>
      <h2>Upload File</h2>

      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleClick}>Go to My Files</button>
    </div>
  );
}

export default Upload;
