
    import React from 'react';
    import Button from '@/app/components/Button';
    import SectionComponents from '@/app/components/Section';
    const { Container, Section } = SectionComponents;
    import PropertySearch from '@/app/components/PropertySearch';
    import Text from '@/app/components/Text';
    import Navigation from '@/app/components/Navigation';
    import '../styles/globals.css';

    const index = () => (
      <>
      <Navigation
  apiUrl="http://localhost:8081/api"
  firebaseUid="QORrMqFligdY0iugUk3FuTEEuUR2"
/>
<>
  <Section
    attachmentValue="scroll"
    backgroundColor="transparent"
    backgroundImage="https://firebasestorage.googleapis.com/v0/b/guesthouz-user-authentication.appspot.com/o/QORrMqFligdY0iugUk3FuTEEuUR2%2FMedia%20Library%2Fcape-coral.png?alt=media&token=1d8095e0-d94e-41cd-a453-7d3bf3501a0c"
    bottomMarginUnitValue="px"
    bottomMarginValue="0"
    bottomPaddingUnitValue="px"
    bottomPaddingValue="80"
    displaySizeValue="auto"
    leftMarginUnitValue="px"
    leftMarginValue="0"
    leftPaddingUnitValue="px"
    leftPaddingValue="0"
    marginAllUnitValue="px"
    marginAllValue="0"
    paddingAllUnit="px"
    paddingAllUnitValue="px"
    paddingAllValue=""
    positionValue="center center"
    repeatValue="no-repeat"
    rightMarginUnitValue="px"
    rightMarginValue="0"
    rightPaddingUnitValue="px"
    rightPaddingValue="0"
    topMarginUnitValue="px"
    topMarginValue="0"
    topPaddingUnitValue="px"
    topPaddingValue="80"
  >
    <Container>
      <Columns numColumns={undefined} />
    </Container>
  </Section>
  <Section
    attachmentValue="scroll"
    backgroundColor="#8AA09D"
    bottomMarginUnitValue="px"
    bottomMarginValue="0"
    bottomPaddingUnitValue="px"
    bottomPaddingValue="10"
    displaySizeValue="auto"
    leftMarginUnitValue="px"
    leftMarginValue="0"
    leftPaddingUnitValue="px"
    leftPaddingValue="0"
    marginAllUnitValue="px"
    marginAllValue="0"
    paddingAllUnitValue="px"
    paddingAllValue=""
    positionValue="center center"
    repeatValue="no-repeat"
    rightMarginUnitValue="px"
    rightMarginValue="0"
    rightPaddingUnitValue="px"
    rightPaddingValue="0"
    topMarginUnitValue="px"
    topMarginValue="0"
    topPaddingUnitValue="px"
    topPaddingValue="10"
  >
    <Container>
      <Columns numColumns={undefined} />
    </Container>
  </Section>
  <Columns numColumns={undefined} />
</>
      </>
    );

    export default index;
  