import React from 'react';
import { Card, CardContent, Grid, ListItemButton, ListItemText, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'; 
import '../component/todos.css'; 

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => (
      <Grid item xs={12} key={todo.id}>
        <Card>
          <CardContent>
            <ListItemButton>
              <Checkbox />
              <ListItemText primary={todo.content} />
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </CardContent>
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
