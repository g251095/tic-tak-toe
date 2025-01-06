import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditable, setIsEditable] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditable((editing) => !editing);
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
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
