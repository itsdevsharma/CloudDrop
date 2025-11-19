import { useEffect, useState } from "react";
import API from "../axiosInstance";
import "../styles/myfiles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function MyFiles() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Load files from backend
  const loadFiles = async () => {
    try {
      const res = await axios.get(
        "https://cloud-drop-backend.vercel.app/api/file/my-files",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setFiles(res.data);
    } catch (err) {
      console.error("❌ Error loading files:", err);
    }
  };

  const handleClick1 = () => {
    navigate("/upload");
  };

  const deleteFile = async (id) => {
    await axios.delete(
      `https://cloud-drop-backend.vercel.app/api/file/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    loadFiles();
  };

  useEffect(() => {
    loadFiles();
  }, []);

  return (
    <div className="myfilespage">
      <h1>CloudDrop</h1>
      <h2>My Uploaded Files</h2>

      <button onClick={handleClick1}>Upload New File</button>

      {files.map((f) => (
        <div key={f._id}>
          <a href={f.fileUrl} target="_blank" rel="noreferrer">
            {f.filename}
          </a>
          <button onClick={() => deleteFile(f._id)}>Delete</button>
        </div>
      ))}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default MyFiles;

