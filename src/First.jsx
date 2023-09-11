import Second from "./Second";

const First = ({ name, arr, setName }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setName([...name, "hindi", "Bengali", "Urdu", "Kanada"]);
  };

  return (
    <>
      <h1>{arr[0]}</h1>
      <Second arr={arr} />
      {/* <h2>{arr[1]}</h2> */}
      <ul>
        {name.map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Add Lang</button>
    </>
  );
};

export default First;
