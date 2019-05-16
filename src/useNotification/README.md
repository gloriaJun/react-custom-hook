# useNotification

```javascript
function App() {
  const notify = useNotification('hi');

  return (
    <div className="App" style={{ height: '1000vh' }}>
      <h2>Hi</h2>
      <button onClick={notify}>show notify</button>
    </div>
  );
}

export default App;
```