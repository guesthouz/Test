
    import React from 'react';
    import Button from '@/app/components/Button';
    import SectionComponents from '@/app/components/Section';
    const { Container, Section } = SectionComponents;
    import PropertySearch from '@/app/components/PropertySearch';
    import Text from '@/app/components/Text';
    import Navigation from '@/app/components/Navigation';
    import '../styles/globals.css';

    const NewPage = () => (
      <>
      <Navigation
  apiUrl="http://localhost:8081/api"
  firebaseUid="QORrMqFligdY0iugUk3FuTEEuUR2"
/>
<>
  <Section
    attachmentValue="scroll"
    backgroundColor="transparent"
    bottomMarginUnitValue="px"
    bottomMarginValue=""
    bottomPaddingUnitValue="px"
    bottomPaddingValue=""
    displaySizeValue="auto"
    leftMarginUnitValue="px"
    leftMarginValue=""
    leftPaddingUnitValue="px"
    leftPaddingValue=""
    marginAllUnitValue="px"
    marginAllValue="0"
    paddingAllUnitValue="px"
    paddingAllValue="0"
    positionValue="center center"
    repeatValue="no-repeat"
    rightMarginUnitValue="px"
    rightMarginValue=""
    rightPaddingUnitValue="px"
    rightPaddingValue=""
    topMarginUnitValue="px"
    topMarginValue=""
    topPaddingUnitValue="px"
    topPaddingValue=""
  >
    <Container />
  </Section>
</>
      </>
    );

    export default NewPage;
  