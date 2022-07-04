import React, { Component } from 'react'; // 리액트를 구현할 수 있는 플러그인을 연결

import Header from './component/Header/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import './App.css';

function App() {
  return (
    <div className='home page-template-default page page-id-7 singular enable-search-model'>
      <Header/>
      <Main />
      <Footer/>
    </div>
  );
}

export default App;
