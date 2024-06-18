import React, { useState, useEffect } from 'react';

// Column component for live version
const Column = ({children}) => {

    return (
      <div style={{ display:'flex'}}>
        {children}
      </div>
    );
  };

// Columns component for live version
const Columns = ({
  children,
  backgroundColor,
  backgroundImage,
  positionValue,
  displaySizeValue, 
  repeatValue,
  attachmentValue,
  paddingAllValue, 
  paddingAllUnit, 
  topPaddingValue, 
  topPaddingUnitValue, 
  rightPaddingValue, 
  rightPaddingUnitValue, 
  bottomPaddingValue, 
  bottomPaddingUnitValue, 
  leftPaddingValue, 
  leftPaddingUnitValue,
  marginAllValue, 
  marginAllUnit, 
  topMarginValue, 
  topMarginUnitValue, 
  rightMarginValue, 
  rightMarginUnitValue, 
  bottomMarginValue, 
  bottomMarginUnitValue, 
  leftMarginValue, 
  leftMarginUnitValue,
}) => {
  const combinedStyles = {
    backgroundColor,
    backgroundImage: `linear-gradient(0deg, ${backgroundColor}, ${backgroundColor}), url(${backgroundImage})`,
    backgroundPosition: `${positionValue}`, 
    backgroundSize: `${displaySizeValue}`, 
    backgroundRepeat: `${repeatValue}`, 
    backgroundAttachment: `${attachmentValue}`, 
    padding: `${paddingAllValue}${paddingAllUnit}`, 
    paddingTop: `${topPaddingValue}${topPaddingUnitValue}`,
    paddingRight: `${rightPaddingValue}${rightPaddingUnitValue}`,
    paddingBottom: `${bottomPaddingValue}${bottomPaddingUnitValue}`,
    paddingLeft: `${leftPaddingValue}${leftPaddingUnitValue}`,
    margin: `${marginAllValue}${marginAllUnit}`, 
    marginTop: `${topMarginValue}${topMarginUnitValue}`,
    marginRight: `${rightMarginValue}${rightMarginUnitValue}`,
    marginBottom: `${bottomMarginValue}${bottomMarginUnitValue}`,
    marginLeft: `${leftMarginValue}${leftMarginUnitValue}`,
  };

  return (
      <div style={{combinedStyles}}>
        {React.Children.map(children, (child, index) => (
          <Column key={index} id={`Column ${index + 1}`}>
            {child}
          </Column>
        ))}
      </div>
  );
};

export default {Columns, Column };