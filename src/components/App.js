import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from "./About";
import ArticleiList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <ArticleiList/> 
    </div>
  );
}

export default App;
