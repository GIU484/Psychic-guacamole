import React from 'react';

function ShortcutList({ shortcuts, onEdit, onDelete }) {
  return (
    <div>
      {shortcuts.map((shortcut) => (
        <div key={shortcut.id}>
          <span>{shortcut.trigger} - {shortcut.expandedText}</span>
          <button onClick={() => onEdit(shortcut)}>Edit</button>
          <button onClick={() => onDelete(shortcut.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ShortcutList;
