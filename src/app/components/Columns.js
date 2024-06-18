import React, { useState, useEffect } from 'react';

// Column component for live version
const Column = ({children}) => {

    return (
      <div style={{ display:'flex', flexWrap:'wrap', gap:'15px', width:'100%', margin:'5px 0px', padding:'10px 0px'}}>
        {children}
      </div>
    );
  };

// Columns component for live version
const Columns = ({
  children,
}) => {
  const combinedStyles = {
    flex: '1 1 0%',
    display: 'block',
  };

  return (
      <div>
        {React.Children.map(children, (child, index) => (
          <Column style={{combinedStyles}} key={index} id={`Column ${index + 1}`}>
            {child}
          </Column>
        ))}
      </div>
  );
};

export default {Columns, Column };