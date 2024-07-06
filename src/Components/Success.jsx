import React from "react";
import { Outlet } from "react-router-dom";

function Success({ formData }) {
    return (
      <div className="success">
        <h1 className="green">Form Submission Successful</h1>
        <h3>Please review the submited details:</h3>
        <div>
            firstName: {formData.firstName}
        </div>
        <div>
            lastName: {formData.lastName}
        </div>
        <div>
            email: {formData.email}
        </div>
        <div>
            Password: {formData.password}
        </div>
        <div>
            Phone Number: {formData.phoneCode} {formData.phoneNumber}
        </div>
        <div>
            Country: {formData.country}
        </div>
        <div>
            Aadhar Number: {formData.aadhar}
        </div>
        <div>
            Pan Number: {formData.pan}
        </div>

        <Outlet />
      </div>
    );
}

export default Success;
