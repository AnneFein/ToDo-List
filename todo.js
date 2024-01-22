import React from 'react';

function Todo({ todo, index, remove }) {
  const handleRemove = () => {
    remove(index);
  };

  return (
    <div className="todo" onClick={handleRemove}>
      {todo.text} (-)
    </div>
  );
}

export default Todo;
