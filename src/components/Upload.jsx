import { useState } from "react";
import API from "../axiosInstance";
import "../styles/upload.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/my-files");
  };

  

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
  "https://cloud-drop-backend.vercel.app/api/file/upload",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }
);


    console.log("Uploaded file:", res.data);

    alert("File uploaded successfully!");
  };

  return (
    <div className="uploadpage">
      <h1>CloudDrop</h1>
      <h2>Upload File</h2>

      {/* FIXED: setFile used correctly */}
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={handleUpload}>Upload</button>
      <button onClick={handleClick}>Go to My Files</button>
    </div>
  );
}

export default Upload;

