function Output({ synonyms }) {

  if (!synonyms || synonyms.length === 0) {
    return null;
  }

  return (
    <div className="outputBox">
      <ul>
        {synonyms.map((synonym, index) => (
          <li key={index}>{synonym}</li>
        ))}
      </ul>
    </div>
  );
}

export default Output;