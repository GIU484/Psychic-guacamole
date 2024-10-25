import React, { useState, useEffect } from 'react';

function ShortcutForm({ shortcut, onSave }) {
  const [trigger, setTrigger] = useState('');
  const [expandedText, setExpandedText] = useState('');

  useEffect(() => {
    if (shortcut) {
      setTrigger(shortcut.trigger);
      setExpandedText(shortcut.expandedText);
    }
  }, [shortcut]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ trigger, expandedText });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Trigger:
        <input
          type="text"
          value={trigger}
          onChange={(e) => setTrigger(e.target.value)}
          required
        />
      </label>
      <label>
        Expanded Text:
        <input
          type="text"
          value={expandedText}
          onChange={(e) => setExpandedText(e.target.value)}
          required
        />
      </label>
      <button type="submit">Save Shortcut</button>
    </form>
  );
}

export default ShortcutForm;