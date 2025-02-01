import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const RedirectingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Open the download URL in the same window
      window.location.href = `http://13.203.24.247:2000/api/v1/urlShortner/${id}`;

      // Listen for user action (Save/Cancel)
      const handleNavigation = () => {
        navigate("/"); // Redirect to the home page
      };

      // Add an event listener to detect when the user interacts with the browser dialog
      window.addEventListener("focus", handleNavigation);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("focus", handleNavigation);
      };
    }
  }, [id, navigate]);

  return (
    <div style={{ height: "100vh" }}>
      <div className="loader"></div>
    </div>
  );
};

export default RedirectingPage;
