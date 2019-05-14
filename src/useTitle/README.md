# useTitle

```javascript
function App() {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 5*1000);

  return (
    <div className="App">
      <h2>hi</h2>
    </div>
  );
}

export default App;
```