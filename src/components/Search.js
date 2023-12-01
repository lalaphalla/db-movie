import React from "react";

export default function Search() {
  const [suggestionList, setSuggestionList] = React.useState([
    "johnjoe",
    "janejannet",
    "jackdaniels",
  ]);
  const inputRef = React.useRef(null);
  const [partialMention, setPartialMention] = React.useState(null);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");

  function handleChange(e) {
    const regexp = /@[a-zA-Z0-9]*$/;
    if (regexp.test(e.target.value)) {
      setPartialMention(e.target.value.split("@").pop());
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
    setInputValue(e.target.value);
  }
  function Suggestions(props) {
    function selectSuggestion(username) {
      const regexp = /@[a-zA-Z0-9]*$/;
      const newValue = props.inputValue.replace(regexp, username + " ");
      props.applyMention({ target: { value: newValue } }); // THIS MIMICS AN ONCHANGE EVENT
      props.focusInput();
    }

    const suggestionItems = props.suggestionList
      .filter((item) => item.includes(props.partialMention))
      .map((item) => (
        <div className="item" onClick={() => selectSuggestion("@" + item)}>
          @{item}
        </div>
      ));

    return <div className="container">{suggestionItems}</div>;
  }

  function focusInput() {
    inputRef.current.focus();
  }
  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      {showSuggestions && (
        <Suggestions
          inputValue={inputValue}
          suggestionList={suggestionList}
          applyMention={handleChange}
          focusInput={focusInput}
          partialMention={partialMention}
        />
      )}
      <button type="submit">Search</button>
    </div>
  );
}
