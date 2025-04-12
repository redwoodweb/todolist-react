import './App.css';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { useRef, useEffect, useState  } from 'react';

function App({userId}) {
  const submit = useRef(null);
  const [data, setData] = useState(null);
  const [inputName, setInputName] = useState('');
  useEffect(() => {
      let getData = {
        name: 'jane',
        id: 'jjane11',
        pw: 'tesdsdfsd'
      };

      if(getData){
        setData(getData);
        setInputName(getData.name);
      }
  },[userId]);
  

  const handlerSubmit = () => {
    setData(prev => ({...prev,name:inputName}));
    console.log('업데이트 완료')
  }

if(!data) return <p>데이터가 없습니다!!</p>  

  return (
    <div className="App">
      <Header userId={userId}/>
      <ul>
        <li>{data.name}</li>
        <li>{data.id}</li>
        <li>{data.pw}</li>
      </ul>
      <input value={inputName} onChange={(e) => setInputName(e.target.value)}></input>
      <button ref={submit} onClick={handlerSubmit}>submit</button>
      <Footer/>   
    </div>
  );
}

export default App;
