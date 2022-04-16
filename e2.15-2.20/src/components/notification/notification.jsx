import React from 'react';

export default function Notification({ message, style }) {
  const baseStyle = {
    background: 'lightgrey',
    fontSize: 22,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  const succOrErrStyle = { color: style === 'success' ? 'green' : 'red' };

  if (message === null) return null;

  return (
    <div style={{ ...baseStyle, color: style === 'success' ? 'green' : 'red' }}>
      {message}
    </div>
  );
}
