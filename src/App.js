// src/App.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ExpenseCategories from './components/ExpenseCategories';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/expense-categories" component={ExpenseCategories} />
            
          </Switch>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
