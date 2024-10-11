import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate=useNavigate();
  return (
    <div className="dashboard">
      <div className="status-container">

        <div className="patient-status">
          <div className="status-header">
            <h3>Patient Status</h3>
            <select>
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="status-cards">
            <div className="status-row">
              <div className="card intimations">
                <div className="card-left">
                  <div className="circle" style={{backgroundColor:"#E5BF59"}}>50</div>
                </div>
                <div className="card-right">
                  <p className="card-title">Intimations</p>
                  <p className="card-subtitle">Patients</p>
                </div>
              </div>
              <div className="card successful-claims">
                <div className="card-left">
                  <div className="circle" style={{backgroundColor:"#30C118"}}>10</div>
                </div>
                <div className="card-right">
                  <p className="card-title">Successful Claims</p>
                  <p className="card-subtitle">Claims</p>
                </div>
              </div>
            </div>

            <div className="status-row">
              <div className="card rejected-claims">
                <div className="card-left">
                  <div className="circle" style={{backgroundColor:"#F93C23"}}>10</div>
                </div>
                <div className="card-right">
                  <p className="card-title">Rejected Claims</p>
                  <p className="card-subtitle">Claims</p>
                </div>
              </div>
              <div className="card reimbursements">
                <div className="card-left" >
                  <div className="circle" style={{backgroundColor:"#A06DD6"}}>10</div>
                </div>
                <div className="card-right">
                  <p className="card-title">Reimbursements</p>
                  <p className="card-subtitle">Cases</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sip-status">
          <div className="status-header">
            <h3>SIP (Service In Progress)</h3>
            <select>
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="sip-cards">
            {[
              { label: "Under Process", count: 10 },
              { label: "Query", count: 10 },
              { label: "Initial Pending", count: 10 },
              { label: "Initial Received", count: 10 },
              { label: "Discharge Under Review", count: 10 }
            ].map((item, idx) => (
              <div key={idx} className="sip-row">
                <div className="sip-label">{item.label}</div>
                <div className="sip-number">{item.count}</div>
                <button className="view-btn" onClick={()=>navigate("/admission-cases")}>View</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
