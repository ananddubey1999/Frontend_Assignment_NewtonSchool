import React from "react";
import { repairRemoved, repairResolved, editTask } from "../actions";
import { useDispatch } from "react-redux";

export default function Item({ item }) {
  const { id, owner, model, description, resolved } = item;
  const dispatch = useDispatch();
  const handleUpdate = () => {
    dispatch(
      editTask({
        id: id,
        owner: owner,
        model: model,
        description: description,
        resolved: resolved,
      })
    );
  };
  return (
    <div className="repair-item">
      <span>{owner}</span>
      <span>{model}</span>
      <span>{description}</span>
      {"-------- "}
      <button onClick={handleUpdate}>Update</button>
      <button onClick={(e) => dispatch(repairRemoved(id))}>Delete</button>
      <button onClick={(e) => dispatch(repairResolved(id))}>
        {!resolved ? "Done" : "Undo"}
      </button>
    </div>
  );
}
