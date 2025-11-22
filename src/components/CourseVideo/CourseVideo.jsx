import Button from "../Button/Button"; // importing my child component 
import YouTube from "react-youtube";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuizQuestion1 from "../QuizQuestions/QuizQuestion1";
import QuizQuestion2 from "../QuizQuestions/QuizQuestion2";
import QuizQuestion3 from "../QuizQuestions/QuizQuestion3";
import QuizQuestion4 from "../QuizQuestions/QuizQuestion4";
import QuizQuestion5 from "../QuizQuestions/QuizQuestion5";
import QuizQuestion6 from "../QuizQuestions/QuizQuestion6";
import PassMessage from "./PassMessage";
import ReDo from "./ReDo";
import Login from "./Login";
import Video from "./Video";


function CourseVideo() {
  const navigate = useNavigate();

  const [changePages, setChangePages] = useState(0);

  const handleNext = () => {
  setChangePages((prev) => prev + 1);
};

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "30px", marginTop: "0px", paddingBottom: "20px" }}>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",

          }}
        >

          {changePages === 0 &&
            <div><Login /></div>
          }

          {changePages === 1 &&
            <div><Video /></div>
          }

          {changePages === 2 &&
            <div><QuizQuestion1 /></div>
          }

          {changePages === 3 &&
            <div><QuizQuestion2 /></div>
          }

          {changePages === 4 &&
            <div><QuizQuestion3 /></div>
          }

          {changePages === 5 &&
            <div><QuizQuestion4 /></div>
          }

          {changePages === 6 &&
            <div><QuizQuestion5 /></div>
          }

          {changePages === 7 &&
            <div><QuizQuestion6 /></div>
          }

          {changePages === 8 &&
            <div><PassMessage /></div>
          }

          {changePages === 9 &&
            <div><ReDo /></div>
          }

          <Button text="Next" onClick={handleNext} />
        </div>
      </div>
    </>
  );
}

export default CourseVideo;
