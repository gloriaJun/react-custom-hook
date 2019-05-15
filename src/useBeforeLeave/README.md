# useBeforeLeave

```javascript
function App() {
  const beforeLeave = () => console.log('leave');
  useBeforeLeave(beforeLeave);

  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;
```