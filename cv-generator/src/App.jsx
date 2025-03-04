import React, { useState, useEffect } from "react";
import { PDFDownloadLink } from '@react-pdf/renderer';
import CvDocument from "./CvDocument";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    imageUrl: "",
    experience: "",
  });
  const [cvList, setCvList] = useState([]);
  const [selectedCv, setSelectedCv] = useState(null);

  useEffect(() => {
    const storedCvs = JSON.parse(localStorage.getItem('cvList')) || [];
    setCvList(storedCvs);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCvList = [...cvList, formData];
    setCvList(updatedCvList);
    localStorage.setItem('cvList', JSON.stringify(updatedCvList));
    setFormData({ fullName: "", email: "", phone: "", imageUrl: "", experience: "" });
  };

  const handleDelete = (indexToDelete) => {
    const updatedItems = cvList.filter((item, index) => index !== indexToDelete);
    setCvList(updatedItems);
    localStorage.setItem('cvList', JSON.stringify(updatedItems));
  };

  return (
    <div className="container mt-4 app-bg">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-3">
            <h4>CV Form</h4>
            <form onSubmit={handleSubmit}>
              <input className="form-control mb-4 mt-4" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
              <input className="form-control mb-4" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
              <input className="form-control mb-4" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
              <input className="form-control mb-4" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
              <textarea className="form-control mb-2" name="experience" placeholder="Experience" value={formData.experience} onChange={handleChange}></textarea>
              <button className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
        <div className="col-md-6" style={{ height: "350px" }}>
          {selectedCv && (
            <div className="card p-3 d-flex flex-row-reverse justify-content-between">
              {selectedCv.imageUrl && (
                <img
                  src={selectedCv.imageUrl}
                  alt="Profile"
                  className="img-thumbnail ms-3 object-fit-cover"
                  style={{ width: "150px" }}
                />
              )}
              <div>
                <h5>Name: {selectedCv.fullName}</h5>
                <p>Email: {selectedCv.email}</p>
                <p>Phone: {selectedCv.phone}</p>
                <p>Experience: {selectedCv.experience}</p>
                <PDFDownloadLink className="btn btn-primary" document={<CvDocument selectedCv={selectedCv} />} fileName="selectedCv.pdf">
                  {({ loading }) => (loading ? 'Yüklənir...' : 'CV-ni Yüklə')}
                </PDFDownloadLink>
              </div>
            </div>
          )}
        </div>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cvList.map((cv, index) => (
            <tr key={index}>
              <td>{cv.fullName}</td>
              <td>{cv.email}</td>
              <td>{cv.phone}</td>
              <td>{cv.imageUrl && <img src={cv.imageUrl} alt="Profile" style={{ width: "40px" }} />}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2" onClick={() => setSelectedCv(cv)}>Show CV</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete CV</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
