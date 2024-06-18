import React from 'react';

// Column component with combined functionality
const Column = ({
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
  const parentStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    width: '100%',
    margin: '5px 0px',
    padding: '10px 0px',
    backgroundColor,
    backgroundImage: `linear-gradient(0deg, ${backgroundColor}, ${backgroundColor}), url(${backgroundImage})`,
    backgroundPosition: positionValue, 
    backgroundSize: displaySizeValue, 
    backgroundRepeat: repeatValue, 
    backgroundAttachment: attachmentValue, 
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

  const childStyles = {
    flex: '1 1 0%',
    display: 'block',
  };

  return (
    <div style={parentStyles}>
      {React.Children.map(children, (child, index) => (
        <div key={index} style={childStyles}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default Column;
