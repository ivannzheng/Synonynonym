function InputForm({ setSynonyms }) {
  async function fetchData() {
    
    const word = document.querySelector(".inputBox").value.trim();
    if (!word) {
      alert("Please enter a valid word");
      return;
    }

    const url = `https://thesaurus-by-api-ninjas.p.rapidapi.com/v1/thesaurus?word=${word}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '86cc42df6bmsh45919c2cb34d1e0p1b9b3fjsnd714ad6cf4f4',
        'x-rapidapi-host': 'thesaurus-by-api-ninjas.p.rapidapi.com',
      },
    };
    

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error("Could not retrieve data");
      }

      const result = await response.json();

      const topSynonyms = result.synonyms.slice(0, 10);
      setSynonyms(topSynonyms); 
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="input">
      <input className="inputBox" placeholder="Enter a word!" />
      <button className="submitButton" onClick={fetchData}>
        Synonymize
      </button>
    </div>
  );
}

export default InputForm;