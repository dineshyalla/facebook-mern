import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Feed />
      {/* widgets */}
    </div>
  );
}

export default App;
