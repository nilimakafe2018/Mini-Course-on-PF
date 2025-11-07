import Header from "../Header/Header.jsx";
import React from "react";

function CourseVideo() {
    return (
        <div>
            <Header />

            <main
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "40px",
                    gap: "20px",
                }}
            >
                <h1>Introduction Video</h1>
                <p>Please complete watching this video before moving to next page.</p>

                <iframe
                    width="700"
                    height="400"
                    src="https://www.youtube.com/embed/GC_bSiYrfRQ?start=321"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <button
                    style={{
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                        borderRadius: "5px",
                        backgroundColor: "#85f183",
                        border: "none",
                    }}
                >
                    Next
                </button>
            </main>
        </div>
    );
}

export default CourseVideo;
