import React, { useState } from 'react';
import styled from 'styled-components';
import ScavengerHuntForm from './components/ScavengerHuntForm';
import ScavengerHuntList from './components/ScavengerHuntList';
import { generateScavengerHuntItems } from './utils/scavengerHuntGenerator';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #2e7d32;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #558b2f;
  font-size: 1.2rem;
`;

function App() {
  const [scavengerHuntItems, setScavengerHuntItems] = useState([]);
  const [isHuntGenerated, setIsHuntGenerated] = useState(false);

  const generateHunt = (formData) => {
    const { itemCount, season, includeAnimals, includePlants, includeInsects } = formData;
    
    const items = generateScavengerHuntItems({
      count: itemCount,
      season,
      includeAnimals,
      includePlants,
      includeInsects
    });
    
    setScavengerHuntItems(items);
    setIsHuntGenerated(true);
  };

  const resetHunt = () => {
    setScavengerHuntItems([]);
    setIsHuntGenerated(false);
  };

  return (
    <AppContainer>
      <Header>
        <Title>Nature Scavenger Hunt</Title>
        <Subtitle>Discover and find items in nature based on season and type</Subtitle>
      </Header>
      
      {!isHuntGenerated ? (
        <ScavengerHuntForm onGenerateHunt={generateHunt} />
      ) : (
        <ScavengerHuntList items={scavengerHuntItems} onReset={resetHunt} />
      )}
    </AppContainer>
  );
}

export default App;