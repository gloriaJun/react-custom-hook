# Create React Custom Hook

- https://academy.nomadcoders.co/courses/enrolled/546456

## useEffect

component의 lifecycle을 제어하기 위한 hook
`useEffect` 에서 `return`에서 선언된 부분은 unmount가 될 때에 호출이 된다.

- https://daveceddia.com/useeffect-hook-examples/
```javascript
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function LifecycleDemo() {
  // It takes a function
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log('render!');

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log('unmounting...');
  })

  return "I'm a lifecycle demo";
}

function App() {
  // Set up a piece of state, just so that we have
  // a way to trigger a re-render.
  const [random, setRandom] = useState(Math.random());

  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)
  const reRender = () => setRandom(Math.random());

  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo/>}
    </>
  );
}

ReactDOM.render(<App/>, document.querySelector('#root'));
```

## Reference about other hooks

- https://github.com/sandiiarov/use-events