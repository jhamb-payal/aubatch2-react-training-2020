import React from 'react';
import './App.css';
import BookList from './Components/BookList';
import ThemeContextProvider from './Contexts/ThemeContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BookList />
      </ThemeContextProvider>
      
    </div>
  );
}

export default App;
