import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Box, Button, Typography, Link, Stack, Paper, Divider } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  // Helper array for colors to iterate over
  const themeColors = [
    { name: 'Primary', value: 'primary.main' },
    { name: 'Secondary', value: 'secondary.main' },
    { name: 'Error', value: 'error.main' },
    { name: 'Warning', value: 'warning.main' },
    { name: 'Info', value: 'info.main' },
    { name: 'Success', value: 'success.main' },
    { name: 'Text Primary', value: 'text.primary' },
    { name: 'Text Secondary', value: 'text.secondary' },
    // Add custom colors if defined directly in palette, e.g., 'navy'
    // { name: 'Navy', value: 'navy' } // Requires theme augmentation or direct hex
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center', // Removed to allow scrolling
        minHeight: '100vh',
        p: 4, // Add some padding
        bgcolor: 'background.default', // Use theme background color
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom color="primary">
        Vite + React + MUI (ClickUp Theme)
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Link href="https://vitejs.dev" target="_blank" rel="noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank" rel="noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
        <Link href="https://mui.com/material-ui/" target="_blank" rel="noopener">
          {/* You might want to add an MUI logo here */}
          <Typography variant="h6" component="span" sx={{ verticalAlign: 'middle' }}>MUI</Typography>
        </Link>
      </Stack>

      {/* Button Demonstration Paper */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, width: '100%', maxWidth: '800px' }}>
        <Typography variant="h5" gutterBottom>
          Button Theme Demonstration
        </Typography>
        <Typography paragraph color="text.secondary">
          Examples of Button components using the primary (Purple), secondary (Blue), and other theme colors.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
          <Button variant="contained" color="primary">Primary Button</Button>
          <Button variant="contained" color="secondary">Secondary Button</Button>
          <Button variant="outlined" color="primary">Outlined Primary</Button>
          <Button variant="contained" color="error">Error Button</Button>
          <Button variant="contained" color="warning">Warning Button</Button>
          <Button variant="contained" color="info">Info Button</Button>
          <Button variant="contained" color="success">Success Button</Button>
        </Stack>
      </Paper>

      {/* Typography Demonstration Paper */}
      <Paper elevation={3} sx={{ p: 3, mb: 4, width: '100%', maxWidth: '800px' }}>
        <Typography variant="h5" gutterBottom>
          Typography Theme Demonstration
        </Typography>
        <Typography paragraph color="text.secondary">
          Examples of Typography components using different variants and theme colors. Font: 'Plus Jakarta Sans'.
        </Typography>

        {themeColors.map((colorInfo) => (
          <Box key={colorInfo.name} sx={{ mb: 3 }} data-testid={`typography-section-${colorInfo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
            <Typography variant="h6" component="div" sx={{ color: colorInfo.value, mb: 1 }}>
              {colorInfo.name} Color (<code>{colorInfo.value}</code>)
            </Typography>
            <Divider sx={{ mb: 1 }}/>
            <Stack spacing={1}>
              <Typography variant="h1" sx={{ color: colorInfo.value }}>H1 Heading</Typography>
              <Typography variant="h2" sx={{ color: colorInfo.value }}>H2 Heading</Typography>
              <Typography variant="h3" sx={{ color: colorInfo.value }}>H3 Heading</Typography>
              <Typography variant="h4" sx={{ color: colorInfo.value }}>H4 Heading</Typography>
              <Typography variant="h5" sx={{ color: colorInfo.value }}>H5 Heading</Typography>
              <Typography variant="h6" sx={{ color: colorInfo.value }}>H6 Heading</Typography>
              <Typography variant="subtitle1" sx={{ color: colorInfo.value }}>Subtitle 1</Typography>
              <Typography variant="subtitle2" sx={{ color: colorInfo.value }}>Subtitle 2</Typography>
              <Typography variant="body1" sx={{ color: colorInfo.value }}>Body 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              <Typography variant="body2" sx={{ color: colorInfo.value }}>Body 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
              <Typography variant="button" display="block" sx={{ color: colorInfo.value }}>Button Text</Typography>
              <Typography variant="caption" display="block" sx={{ color: colorInfo.value }}>Caption Text</Typography>
              <Typography variant="overline" display="block" sx={{ color: colorInfo.value }}>Overline Text</Typography>
            </Stack>
          </Box>
        ))}
      </Paper>

      {/* Counter Section */}
      <Box sx={{ mb: 4 }}>
        <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Typography paragraph sx={{ mt: 2 }}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary">
        Click on the Vite, React, and MUI logos to learn more
      </Typography>
    </Box>
  );
}

export default App;

