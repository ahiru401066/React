import logo from './logo.svg';
import './App.css';
import { useState, useCallback } from "react"; 
import { ChildArea } from './Components/ChildArea';

function App() {
  console.log("Appがレンダリングされた！");
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className='App'>
      <input value={text} onChange={onChangeText} />
      <p>{text}</p>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
