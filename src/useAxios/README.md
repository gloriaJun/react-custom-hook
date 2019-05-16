# useAxios

```javascript
function App() {
  const {loading, data, error, reload } = useAxios({
    url: 'https://yts.am/api/v2/list_movies.json',
  });

  console.log(data);
  console.log(error);

  return (
    <div className="App" style={{ height: '1000vh' }}>
      <h2>Hi</h2>
      <p>{ loading ? 'Loading ...' : data && data.status}</p>
      <button onClick={reload}>ReFetch</button>
    </div>
  );
}

export default App;
```