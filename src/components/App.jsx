import React from "react";
import Note from "./Note";
import Footer from "./Footer";
import Header from "./Header";
import notes from "../notes";



function App() {
    return (
      <div>
        <Header />
        <div>
          {notes.map(individualNote => 
              <Note
                key={individualNote.key}
                titles={individualNote.title}
                contents={individualNote.content}
              />
          )}
        </div>
        <Footer />
      </div>
    );
  }

export default App;

