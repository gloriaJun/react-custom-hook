# useClick

```javascript
function App() {
  const onClick = () => alert('click!!');
  const title = useClick(onClick);

  return (
    <div className="App">
      <h2 ref={title}>hi</h2>
    </div>
  );
}

export default App;
```