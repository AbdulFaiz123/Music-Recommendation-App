import React from "react";
import "./styles.css";
import { useState } from "react";

const musicDb = {
  Hollywood: [
    { name: "Stay", rating: "4.5/5", artist: "justin Bieber" },
    { name: "Industry", rating: "4/5", artist: "jack Harlow" },
    { name: "Shivers", rating: "4/5", artist: "Ed Sheeran" },
    { name: "Women", rating: "4/5", artist: "Doja Cat" }
  ],

  Bollywood: [
    {
      name: "Raataan Lambiyan",
      rating: "5/5",
      artist: "Jubin Nautiyal"
    },
    {
      name: "Sakhiyan2.0",
      rating: "5/5",
      artist: "Zara Khan"
    },
    {
      name: "Mann Bharrya 2.0",
      rating: "4.5/5",
      artist: "B Praak"
    },
    {
      name: "Marjaawaan",
      rating: "4.5/5",
      artist: "Gurnazar"
    }
  ],
  podcasts: [
    {
      name: "The RJ Balaji Podcast",
      rating: "4.5/5",
      artist: "AR Rahman"
    },
    {
      name: "Mera Wahana Hona",
      rating: "4.5/5",
      artist: "Neelesh Misra"
    },
    {
      name: "Dil Khole Stars Bole",
      rating: "4/5",
      artist: "Sidk"
    },
    {
      name: "Who Owns Our Forest?",
      rating: "4/5",
      artist: "Dhruv Rathee"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("podcasts");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎵goodmusics </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite musics. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(musicDb).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "1rem",
              padding: "0.10rem  1rem",
              border: "1px solid black",
              margin: "0.5rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDb[selectedGenre].map((music) => (
            <li
              key={music.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.name} </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                Ratings:{music.rating}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {music.artist} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
