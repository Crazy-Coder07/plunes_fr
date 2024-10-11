import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AdmissionCases from './components/AdmissionCases';

const NotFound = () => {
    return <h2>Page Not Found</h2>; 
};

function App() {
    const token = localStorage.getItem("token");

    return (
        <Router>
            <div>
                <Routes>
                    <Route 
                        path="/" 
                        element={<Login />} 
                    />
                    <Route 
                        path="/dashboard" 
                        element={token ? <Dashboard /> : <Navigate to="/" />} 
                    />
                    <Route 
                        path="/admission-cases" 
                        element={token ? <AdmissionCases /> : <Navigate to="/" />} 
                    />
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;
