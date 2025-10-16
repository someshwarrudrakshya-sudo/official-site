import { FaFilePdf, FaFileAlt, FaFileWord, FaDownload } from "react-icons/fa";
import Note from "../components/Note.jsx";
import "./css/Download.css";

const files = [
  {
    name: "Membership Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/1-Membership Form.pdf",
  },
  {
    name: "Account Opening Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/2-Account Opening.pdf",
  },
  {
    name: "Account Closing Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/3-Account-Closing.pdf",
  },
  {
    name: "For Loan Requirements Docs",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/4-Required Docs.pdf",
  },
  {
    name: "Loan Apply Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/5-Loan Apply Form.pdf",
  },
  {
    name: "KYM Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/6-KYM Form.pdf",
  },
  {
    name: "Saving Loan Apply Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/7-Saving Loan Form.pdf",
  },
  {
    name: "Varpai Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/8-Varpai Form.pdf",
  },
  {
    name: "Manjurinam Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/9-Manjurinam Form.pdf",
  },
  {
    name: "Share Return Form",
    type: "PDF",
    icon: <FaFilePdf className="file-icon pdf" />,
    size: "450 KB",
    url: "/download/10-Share Return Form.pdf",
  },
];

export default function Download() {
  return (
    <div className="container">
      <div className="section-title">
        <h2>
          Downloads <span className="highlight">Files</span>
        </h2>
        <p>
          Get all necessary forms below. Click the download button to save them
          directly to your device.
        </p>
      </div>

      <div className="download-grid">
        {files.map((file, index) => (
          <div key={index} className="download-card">
            <div className="file-icon-wrap">{file.icon}</div>
            <h3>{file.name}</h3>
            <p className="file-meta">
              {file.type} · {file.size}
            </p>
            <a href={file.url} download className="download-btn">
              <FaDownload /> Download
            </a>
          </div>
        ))}
      </div>

      {/* Note Section */}
      <Note type="Download" />
    </div>
  );
}
