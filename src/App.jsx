import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import RoleForm from "./components/RoleForm";
import { TextField } from "@mui/material";

const App = () => {
  const [users, setUsers] = useState([]); 
  const [editingUser, setEditingUser] = useState(null); 
  const [assigningRoleUser, setAssigningRoleUser] = useState(null);
  const [search, setSearch] = useState(""); 

  // Add or update user
  const handleUserSubmit = (user) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u))); 
    } else {
      setUsers([...users, { ...user, id: Date.now(), role: "" }]); 
    }
    setEditingUser(null);
  };

  // Assign role to user
  const handleRoleAssign = (userId, role) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role } : user
      )
    );
    setAssigningRoleUser(null);
  };

  // Delete user
  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <UserForm onSubmit={handleUserSubmit} editingUser={editingUser} />
      <TextField
        label="Search by Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <UserTable
        users={filteredUsers}
        onEdit={(user) => setEditingUser(user)}
        onAssignRole={(user) => setAssigningRoleUser(user)}
        onDelete={handleDeleteUser}
      />
      {assigningRoleUser && (
        <RoleForm
          user={assigningRoleUser}
          onSubmit={handleRoleAssign}
          onClose={() => setAssigningRoleUser(null)}
        />
      )}
    </div>
  );
};

export default App;
