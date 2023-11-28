import { useState } from 'react'
import './App.css'
import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import styled from 'styled-components';
import { TerminsList } from './components/List/List';
import { MindMap } from './components/MindMap/MindMap';
import { QueryClient, QueryClientProvider } from 'react-query';

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;
function App() {
  const queryClient = new QueryClient();

  const [alignment, setAlignment] = useState('Термины');

  const handleChange = (event: React.MouseEvent<HTMLElement>) => {
    setAlignment((event.currentTarget as HTMLButtonElement).value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="Термины">Термины</ToggleButton>
          <ToggleButton value="MindMap">MindMap</ToggleButton>
        </ToggleButtonGroup>
        {alignment === 'Термины' ? <TerminsList /> : <MindMap />}
      </Wrapper>
    </QueryClientProvider>

  );
}
export default App;
