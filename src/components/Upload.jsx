import { useState } from "react";
import API from "../axiosInstance";
import "../styles/Upload.css";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/my-files");
  }

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const res = await API.post("/api/file/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Uploaded!");
  };

  return (
    <div className="uploadpage">
      <h1>CloudDrop</h1>
      <h2>Upload File</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <button onClick={handleUpload}>
        Upload
      </button>
      <button onClick={handleClick}>Go to My Files</button>
    </div>
  );
}

export default Upload;
