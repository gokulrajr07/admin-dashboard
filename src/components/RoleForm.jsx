import React, { useState } from "react";

const RoleForm = ({ user, onSubmit, onClose }) => {
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user.id, role);
    setRole("");
  };

  return (
    <div className="modal">
      <h2>Assign Role to {user.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role Name"
          required
        />
        <button type="submit">Assign</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default RoleForm;
