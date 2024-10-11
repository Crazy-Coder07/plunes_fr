import React from "react";
import "./AdmissionCases.css";

const AdmissionCases = () => {
  const cases = [
    {
      id: "IP:14",
      name: "Priyanshu Raj",
      age: 27,
      contact: "7500190739",
      provider: "Aditya Birla Health Insurance Company Ltd",
      hospital: "Fortis Noida",
      treatment: "Radiation Therapy",
      admissionDate: "06-Mar-2024",
      claimStatus: "Initial Pending",
      hospitalOpsStatus: "Yes",
      statusNumber: 25,
    },
    {
      id: "IP:14",
      name: "Priyanshu Raj",
      age: 27,
      contact: "7500190739",
      provider: "Aditya Birla Health Insurance Company Ltd",
      hospital: "Fortis Noida",
      treatment: "Radiation Therapy",
      admissionDate: "06-Mar-2024",
      claimStatus: "Final Pending",
      hospitalOpsStatus: "No",
      statusNumber: 25,
    },
    {
      id: "IP:14",
      name: "Priyanshu Raj",
      age: 27,
      contact: "7500190739",
      provider: "Aditya Birla Health Insurance Company Ltd",
      hospital: "Fortis Noida",
      treatment: "Radiation Therapy",
      admissionDate: "06-Mar-2024",
      claimStatus: "Initial Pending",
      hospitalOpsStatus: "Yes",
      statusNumber: 25,
    },
  ];

  return (
    <div className="admission-container">
      {/* Header */}
      <div className="header">
        <div className="dropdown-container">
          <select>
            <option>Planned Admission Cases</option>
          </select>
          <select>
            <option>This Month</option>
          </select>
        </div>
        <div className="controls">
          <div className="toggle-switch">
            <input type="checkbox" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>

      {/* Cases */}
      {cases.map((caseItem, index) => (
        <div className="case-card" key={index}>
          <div className="case-header">
            <div className="patient-info">
              <div className="patient-id">{caseItem.id}</div>
              <div className="patient-name-age">
                <span>{caseItem.name}</span> <span>{caseItem.age} yrs</span>
              </div>
            </div>
            <div className="contact-info">{caseItem.contact}</div>
          </div>

          <div className="case-body">
            <div className="provider-info">
              <p><strong>Service Provider-</strong> {caseItem.provider}</p>
              <p><strong>Hospital-</strong> {caseItem.hospital}</p>
              <p><strong>Treatment-</strong> {caseItem.treatment}</p>
            </div>
            <div className="status-info">
              <div className="admission-status">
                <div className="status-icon">🛏️</div>
                <div>
                  <p>Admitted</p>
                  <p>{caseItem.admissionDate}</p>
                </div>
              </div>
              <div className="claim-status">
                <p>Claim Status</p>
                <p className={`status ${caseItem.claimStatus.includes("Final") ? "final-pending" : "initial-pending"}`}>
                  {caseItem.claimStatus}
                </p>
              </div>
              <div className="hospital-ops-status">
                <p>Hospital Ops Status</p>
                <p>
                  Status {caseItem.hospitalOpsStatus} <span className="status-number">{caseItem.statusNumber}</span>
                  <button className="view-btn">View</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="total-count">Total count: {cases.length}</div>
    </div>
  );
};

export default AdmissionCases;
