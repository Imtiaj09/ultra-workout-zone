import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <div className='question-title'>
        <h2>React Question Blog</h2>
        <hr />
      </div>
      <div className='question'>
        <div>
          <h4>1. How does React work?</h4>
          <p>Answer: At its very core, React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes. <br />Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). <br />React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
        </div>
        <div>
          <h4>2. What are the different between props and state?</h4>
          <p>
            Answer:Props are used to pass data from one component to another.
            The state is a local data storage that is local to the component only and cannot be passed to other components.
          </p>
        </div>
        <div>
          <h4>3. What is the useEffect used for other than loading api data?</h4>
          <p>Answer: The useEffect Hook allows you to perform side effects in your components.Basically it's used for fetching data. <br /> It also used for directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;