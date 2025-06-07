import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.tsx';
import theme from './styles/theme'; // Import the custom theme
import './index.css'; // Keep or replace with global styles as needed

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}> {/* Apply the custom theme */} 
      <CssBaseline /> {/* Normalize styles */} 
      <App />
    </ThemeProvider>
  </StrictMode>,
);

