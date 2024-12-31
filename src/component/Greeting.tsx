import React from "react";

const Greeting: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Hi, John Doe!</h1>
        <p style={styles.paragraph}>
          Let&apos;s pick up where we left off and keep the momentum going.
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src="/Removebg Characters 1.svg" 
          alt="Kids Playing"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    gap: "20px",
    marginBottom: "60px"
  },
  textContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  paragraph: {
    fontSize: "14px",
    color: "#666",
    marginTop: "5px",
  },
  imageContainer: {
    height: "100px",
    width: "auto",
    flex: 1,
  },
  image: {
    display: "block",
    height: "200px",
    marginTop: "-40px",
  },
};

export default Greeting;
