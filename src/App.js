import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        email: '',
        fullName: '',
        address1: '',
        address2: '',
        city: '',
        province: '',
        postalCode: '',
        agreeTerms: false
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
    };

    return (
        <div className="App">
            <h2>Data Entry Form</h2>
            <form onSubmit={handleSubmit} className="data-entry-form">
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        required
                    />
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <label>Address</label>
                <input
                    type="text"
                    name="address1"
                    placeholder="1234 Main St"
                    onChange={handleChange}
                    required
                />
                <label>Address 2</label>
                <input
                    type="text"
                    name="address2"
                    placeholder="Apartment, studio, or floor"
                    onChange={handleChange}
                />
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        onChange={handleChange}
                        required
                    />
                    <label>Province</label>
                    <select
                        name="province"
                        onChange={handleChange}
                        required
                    >
                        <option value="">Choose...</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        {/* Add more provinces if needed */}
                    </select>
                    <label>Postal Code</label>
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        name="agreeTerms"
                        onChange={handleChange}
                    />
                    <label>Agree Terms & Conditions?</label>
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div className="output">
                    <h3>Submitted Information:</h3>
                    <p>Email: {submittedData.email}</p>
                    <p>Full Name: {submittedData.fullName}</p>
                    <p>Address: {submittedData.address1}</p>
                    <p>Address 2: {submittedData.address2}</p>
                    <p>City: {submittedData.city}</p>
                    <p>Province: {submittedData.province}</p>
                    <p>Postal Code: {submittedData.postalCode}</p>
                    <p>Agreed to Terms: {submittedData.agreeTerms ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
}

export default App;
