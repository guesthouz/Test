import React, { useState, useEffect } from 'react';

// Container component for live version
const Container = ({ children }) => {
  return (
    <div style={{ maxWidth: '90%', margin: '0 auto', position: 'relative' }}>
      {children}
    </div>
  );
};

// Column component for live version
const Column = ({
  children,
  style,
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
  displayValue,
  align,
  verticalAlign,
  id,
}) => {
  const isEmpty = React.Children.count(children) === 0;

  return (
    <div
      style={{
        ...style,
        backgroundColor: isEmpty ? '#b2b2b2b2' : backgroundColor,
        backgroundImage: `linear-gradient(0deg, ${backgroundColor}, ${backgroundColor}), url(${backgroundImage})`,
        backgroundPosition: isEmpty ? undefined : `${positionValue}`, 
        backgroundSize: isEmpty ? undefined : `${displaySizeValue}`, 
        backgroundRepeat: isEmpty ? undefined : `${repeatValue}`, 
        backgroundAttachment: isEmpty ? undefined : `${attachmentValue}`, 
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
        display: `${displayValue}`, 
        justifyContent: `${align}`,
        alignItems: `${verticalAlign}`, 
        padding: isEmpty ? '20px' : `${paddingAllValue}${paddingAllUnit}`,
      }}
    >
      {isEmpty && <p>{id}</p>}
      {children}
    </div>
  );
};

// Columns component for live version
const Columns = ({
  children,
  id,
  numColumns,
  setNumColumns,
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
  useEffect(() => {
    // Retrieve the number of columns from localStorage if it exists, otherwise default to 2
    const savedNumColumns = localStorage.getItem(`columns-num-${id}`);
    if (savedNumColumns) {
      setNumColumns(Number(savedNumColumns));
    }
  }, [id, setNumColumns]);

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

  const renderColumns = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', width: '100%', margin: '5px 0', padding: '10px 0' }}>
        {[...Array(numColumns)].map((_, index) => (
          <Column key={index} id={`Column ${index + 1}`} style={{ flex: 1 }} />
        ))}
      </div>
    );
  };

  return (
    <div style={{ ...combinedStyles, maxWidth: '100%', margin: '0 auto', position: 'relative', display: 'flex' }}>
      {renderColumns()}
    </div>
  );
};

export default { Container, Columns, Column };
