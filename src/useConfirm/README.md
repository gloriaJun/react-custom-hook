# useTitle

```javascript
function App() {
  const deleteWorld = () => console.log('deleted');
  const abort = () => console.log('aborted');
  const deleteConfirm = useConfirm('are you sure...?', deleteWorld, abort);

  return (
    <div className="App">
      <button onClick={deleteConfirm}>Delete</button>
    </div>
  );
}

export default App;
```