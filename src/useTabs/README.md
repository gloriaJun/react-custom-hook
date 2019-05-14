# useTabs

```javascript
const contents = [
  {
    tab: 'Section 1',
    content: 'This is content for Section 1',
  },
  {
    tab: 'Section 2',
    content: 'This is content for Section 2',
  },
];

function App() {
  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <div className="App">
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem && currentItem.content}</div>
    </div>
  );
}

export default App;
```