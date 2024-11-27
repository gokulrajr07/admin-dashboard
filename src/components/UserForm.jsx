import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const UserForm = ({ onSubmit, editingUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Active",
  });

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", status: "Active" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
        type="email"
        margin="normal"
      />
      <TextField
        label="Status"
        name="status"
        value={formData.status}
        onChange={handleChange}
        fullWidth
        margin="normal"
        select
        SelectProps={{
          native: true,
        }}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        sx={{ mt: 2 }}
        fullWidth
      >
        {editingUser ? "Update User" : "Add User"}
      </Button>
    </Box>
  );
};

export default UserForm;
