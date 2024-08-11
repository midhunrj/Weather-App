import React from 'react';
import Displayweather from './components/displayweather';
import './App.css';
import { ThemeProvider } from './themecontext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Displayweather/>
      </ThemeProvider>
    </div>
  );
}

export default App;
