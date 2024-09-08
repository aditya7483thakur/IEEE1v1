import React, { useEffect } from "react";
import { useAuth } from "./AuthContext"; // Import useAuth hook from AuthContext
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom

const Home = () => {
  let { user, logout } = useAuth(); // Access user data and logout function from context
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  useEffect(() => {
    user = JSON.parse(localStorage.getItem("user"));
    // Check if user data exists in context
    if (!user) {
      // If user data does not exist, redirect to login page
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    // Call logout function to clear user session data
    logout();
    // Redirect the user to the login page
    navigate("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background:
        "linear-gradient(to bottom, #FFFFFF 0%, #999999 100%, #FFFFFF 100%)",
        color: "#fff",
      }}
    >
      {user && (
        <h1
          style={{
            fontFamily: "'Lexend', system-ui",
            fontSize: "2.75rem",
            color: "black",
            fontWeight: "700",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          Welcome, {user.name}!
        </h1>
      )}

      <div style={{}}>
        <Link
          to="/create-room"
          style={{
            fontFamily: "'Manrope', sans-serif",
            textDecoration: "none",
            color: "#fff" /* Change text color to white */,
            fontSize: "18px",
            padding: "12px 45.5px 12px 45.5px",
            backgroundColor: "#6D31ED",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            // boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            display: "inline-block",
            marginBottom: "5rem",
            marginRight: "5rem",
            marginTop: "2.5rem",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#6D31ED";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6D31ED";
            e.target.style.transform = "scale(1)";
          }}
        >
          Create Room
        </Link>

        <Link
          to="/join-room"
          style={{
            textDecoration: "none",
            color: "#6D31ED" /* Change text color to white */,
            fontSize: "18px",
            padding: "12px 57.5px 12px 57.5px",
            backgroundColor: "#F5F1FE",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            // boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#F5F1FE";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#F5F1FE";
            e.target.style.transform = "scale(1)";
          }}
        >
          Join Room
        </Link>
      </div>
      {/* <div>
        <button
          onClick={handleLogout}
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "14px",
            marginTop: "10rem",
            height: "36px",
            width: "160px",
            padding: "0 12px 0 12px",
            backgroundColor: "#6D31ED", // Purple Color
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            // boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            transition: "background-color 0.3s ease, transform 0.2s ease",
            // fontSize: "1.2rem",
            // fontWeight: "bold",
            // textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#6D31ED"; // Darker shade of red on hover
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#6D31ED";
            e.target.style.transform = "scale(1)";
          }}
        >
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default Home;
