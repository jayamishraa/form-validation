import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Form({ formData, setFormData }) {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validate = () => {
    const errors = {};

    if (!formData.firstName) errors.firstName = 'First Name is required';
    if (!formData.lastName) errors.lastName = 'Last Name is required';
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Za-z0-9._%+-]+@gmail\.com$/.test(formData.email)) {
      errors.email = 'Email must be a valid Gmail address (xyz@gmail.com)';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)) {
      errors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character';
    }
    if (!formData.phoneCode) errors.phoneCode = 'Phone Country Code is required';
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required';
    } else if (formData.phoneNumber.length !== 10) {
      errors.phoneNumber = 'Phone Number must be 10 digits';
    }
    if (!formData.country) errors.country = 'Country is required';
    if (!formData.city) errors.city = 'City is required';
    if (!formData.aadhar) {
      errors.aadhar = 'Aadhar No. is required';
    } else if (formData.aadhar.length !== 12) {
      errors.aadhar = 'Aadhar No. must be 12 digits';
    }
    if (!formData.pan) {
      errors.pan = 'Pan No. is required';
    } else if (formData.pan.length !== 10) {
      errors.pan = 'Pan No. must be 10 characters';
    }

    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setIsFormValid(Object.keys(validationErrors).length === 0);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>

        <div>
          <label>First Name</label>
          <input 
            type='text' 
            name='firstName' 
            value={formData.firstName} 
            onChange={handleChange} 
          />
        </div>
        <div className='error'>{errors.firstName && <span>{errors.firstName}</span>}</div>

        <div>
          <label>Last Name</label>
          <input 
            type='text' 
            name='lastName' 
            value={formData.lastName} 
            onChange={handleChange} 
          />
        </div>
        <div className='error'>{errors.lastName && <span>{errors.lastName}</span>}</div>

        <div>
          <label>Username</label>
          <input 
            type='text'     
            name='username' 
            value={formData.username} 
            onChange={handleChange} 
          />
        </div>
        <div className='error'>{errors.username && <span>{errors.username}</span>}</div>

        <div>
          <label>Email</label>
          <input 
            type='email' 
            name='email' 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className='error'>{errors.email && <span>{errors.email}</span>}</div>

        <div>
          <label>Password</label>
          <input 
            type={showPassword ? 'text' : 'password'} 
            name='password' value={formData.password} 
            onChange={handleChange} 
          />
          <button 
            onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className='error'>{errors.password && <span>{errors.password}</span>}</div>

        <div>
          <label>Phone No.</label>
          <input 
            type='text' 
            name='phoneCode' 
            value={formData.phoneCode} 
            onChange={handleChange} 
            placeholder="Enter the country code" 
          />
          <input 
            type='text' 
            name='phoneNumber' 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            placeholder="Enter the phone number" 
            maxLength="10" 
          />
        </div>
        <div className='error'>{errors.phoneCode && <span>{errors.phoneCode}</span>}</div>
        <div className='error'>{errors.phoneNumber && <span>{errors.phoneNumber}</span>}</div>

        <div>
          <label>Country</label>
          <select name='country' value={formData.country} onChange={handleChange}>
            <option value=''>Select Country</option>
            <option value='USA'>USA</option>
            <option value='India'>India</option>
            <option value='UK'>UK</option>
          </select>
        </div>
        <div className='error'>{errors.country && <span>{errors.country}</span>}</div>

        <div>
          <label>City</label>
          <select name='city' value={formData.city} onChange={handleChange}>
            <option value=''>Select City</option>
            {formData.country === 'India' && <>
              <option value='Delhi'>Delhi</option>
              <option value='Mumbai'>Mumbai</option>
            </>}
            {formData.country === 'USA' && <>
              <option value='New York'>New York</option>
              <option value='Los Angeles'>Los Angeles</option>
            </>}
            {formData.country === 'UK' && <>
              <option value='London'>London</option>
              <option value='Manchester'>Manchester</option>
            </>}
          </select>
        </div>
        <div className='error'>{errors.city && <span>{errors.city}</span>}</div>

        <div>
          <label>Aadhar No.</label>
          <input    
            type='text' 
            name='aadhar' 
            value={formData.aadhar} 
            onChange={handleChange} 
            maxLength="12" 
          />
        </div>
        <div className='error'>{errors.aadhar && <span>{errors.aadhar}</span>}</div>

        <div>
          <label>Pan No.</label>
          <input 
            type='text' 
            name='pan' 
            value={formData.pan} 
            onChange={handleChange} 
            maxLength="10" 
          />
        </div>
        <div className='error'>{errors.pan && <span>{errors.pan}</span>}</div>

        <button type='submit'>Submit</button>
      </form>

      {isFormValid && 
        <Link to="/success">Go to Success
      </Link>}
    </div>
  );
}

export default Form;
