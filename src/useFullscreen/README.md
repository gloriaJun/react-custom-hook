# useFullscreen

```javascript
function App() {
  const onFullScreen = isFull => console.log(isFull);
    const { element, triggerFull, exitFull } = useFullscreen(onFullScreen);
  
    return (
      <div className="App" style={{ height: '1000vh' }}>
        <div ref={element}>
          <img
            ref={element}
            alt=""
            src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          <button onClick={exitFull}>exit fullscreen</button>
        </div>
        <button onClick={triggerFull}>make fullscreen</button>
      </div>
    );
}

export default App;
```