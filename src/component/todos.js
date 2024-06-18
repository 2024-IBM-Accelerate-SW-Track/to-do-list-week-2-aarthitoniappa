import React from 'react';
import { Card, Grid, ListItemButton, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; 
import '../component/todos.css'; 

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <Grid item xs={12} key={todo.id}>
        <Card style={{ marginTop: 10 }}>
          <ListItemButton component="a" href="#simple-list">
            <Checkbox />
            <ListItemText 
              primary={todo.content} 
              secondary={todo.date} 
            />
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItemButton>
        </Card>
      </Grid>
    ))
  ) : (
    <p>You have no todo's left</p>
  );

  return (
    <div className="todoCollection" style={{ padding: '10px' }}>
      {todoList}
    </div>
  );
};

export default Todos;
