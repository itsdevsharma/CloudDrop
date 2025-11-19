import { useEffect, useState } from "react";
import API from "../axiosInstance";
import "../styles/MyFiles.css";
import { useNavigate } from "react-router-dom";

function MyFiles() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  }
  const loadFiles = async () => {
    const res = await API.get("/api/file/my-files");
    setFiles(res.data);
  };

  const handleClick1 = () => {
    navigate("/upload");
  }
  const deleteFile = async (id) => {
    await API.delete(`/api/file/${id}`);
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
