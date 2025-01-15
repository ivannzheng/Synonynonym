import Title from './Title.jsx';
import InputForm from './InputForm.jsx';
import Output from './Output.jsx';
import { useState } from 'react';

function App() {
  
  const [synonyms, setSynonyms] = useState([]);

  return (
    <>
      <Title />
      <InputForm setSynonyms={setSynonyms} />
      <Output synonyms={synonyms} />
    </>
  );
}

export default App;
