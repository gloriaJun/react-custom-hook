# useInput

```javascript
function App() {
  const maxLen = value => value.length <= 10;
  const name = useInput('Mr. ', maxLen);

  return (
    <div className="App">
      <input placeholder={'Name'} {...name} />
    </div>
  );
}

export default App;
```