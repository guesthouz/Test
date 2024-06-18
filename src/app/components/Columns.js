import React from 'react';

// Column component for live version
const Column = ({children}) => {
  return (
    <div style={{ flex: '1 1 0%' }}>
      {children}
    </div>
  );
};

// Columns component for live version
const Columns = ({ children }) => {
  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    width: '100%',
    margin: '5px 0px',
    padding: '10px 0px',
  };

  return (
    <div style={containerStyles}>
      {React.Children.map(children, (child, index) => (
        <Column key={index} id={`Column ${index + 1}`}>
          {child}
        </Column>
      ))}
    </div>
  );
};

export default { Columns, Column };
