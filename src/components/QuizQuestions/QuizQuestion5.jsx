import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Option from "./Option"; // importing reusable child component
import Button from "../Button/Button";
import Header from "../Header/Header.jsx";


function QuizQuestion5({ saveAnswer }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");

  const question = "On the report page, in the text-added and text-removed bubble chart, what does the red bubble represent??";
  const options = [
    "Text removed",
    "Text modified",
    "No change",
    "Text added"
  ];

  const correctAnswer = "Text removed";

  const handleNext = () => {
    // if (!selectedOption) {
    //   setError("Please select an answer before proceeding.");
    //   return;
    // }

    setError("");
    // Pass result (true/false) to parent App or central state
    saveAnswer("q5", selectedOption === correctAnswer);

    // Navigate to next quiz page
    navigate("/quiz6");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", margin: "50px" }}>
      <h2>Quiz Question 5</h2>
      <p>{question}</p>

      {/* Render all options using Option child component */}
      <div>
        {options.map((option) => (
          <Option
            key={option}
            optionText={option}
            selectedOption={selectedOption}
            onSelect={setSelectedOption} // updates parent state
          />
        ))}
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* <Button text="Next" onClick={handleNext} /> */}
    </div>
  );
}

export default QuizQuestion5;
