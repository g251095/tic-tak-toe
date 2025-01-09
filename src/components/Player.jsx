import { useState } from "react";

export default function Player({playerName, symbol, isActive, setPlayers}) {
  const [isEditable, setIsEditable] = useState(false);


  function handleEditClick() {
    setIsEditable((editing) => !editing);
  }
  function handleChange(event) {
    setPlayers(
      (prevPlayers)=>({...prevPlayers,
      [symbol] : event.target.value})
    );
    
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditable) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditable ? "Save" : "Edit"}</button>
    </li>
  );
}
