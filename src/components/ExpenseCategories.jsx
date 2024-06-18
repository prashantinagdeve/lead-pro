import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ExpenseCategories = () => {
  const [categories, setCategories] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newCategory, setNewCategory] = useState({
    type: '',
    description: '',
  });

  useEffect(() => {
    fetchExpenseCategories();
  }, []);

  const fetchExpenseCategories = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/get-expenses');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching expense categories:', error);
    }
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/add-expense', newCategory);
      setCategories([...categories, response.data]);
      handleCloseModal();
      setNewCategory({
        name: '',
        description: '',
      });
    } catch (error) {
      console.error('Error adding new expense category:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Expense Categories
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="subtitle1">
            Dashboard - Expense Manager - Expense Categories
          </Typography>
          <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleOpenModal}>
            Add New Expense Category
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Expense Category Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={3}>
                      <Typography variant="subtitle1">No data</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ) : (
                categories.map((category) => (
                  <TableRow key={category._id}>
                    <TableCell>{category.type}</TableCell>
                    <TableCell>{category.description}</TableCell>
                    <TableCell align="right">
                      {/* Add action buttons here */}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Modal for adding new expense category */}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              minWidth: 400,
              maxWidth: 600,
              borderRadius: 8,
            }}
          >
            <Typography variant="h6" id="modal-title" gutterBottom>
              Add New Expense Category
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                margin="normal"
                label="Expense Category Name"
                name="type"
                value={newCategory.type}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Description"
                name="description"
                value={newCategory.description}
                onChange={handleChange}
              />
              <Box display="flex" justifyContent="flex-end" mt={2}>
                <Button type="submit" variant="contained" color="primary">
                  Add Category
                </Button>
                <Button onClick={handleCloseModal} variant="outlined" color="secondary" sx={{ ml: 2 }}>
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
};

export default ExpenseCategories;
