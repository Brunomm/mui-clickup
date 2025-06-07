import { render, screen, within } from '@testing-library/react'; // Import within
import { describe, it, expect } from 'vitest';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';

// Helper to wrap component with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
};

describe('App Component', () => {
  it('renders the main heading', () => {
    renderWithTheme(<App />);
    expect(screen.getByRole('heading', { name: /Vite \+ React \+ MUI \(ClickUp Theme\)/i, level: 1 })).toBeInTheDocument();
  });

  it('renders button demonstration section', () => {
    renderWithTheme(<App />);
    expect(screen.getByRole('heading', { name: /Button Theme Demonstration/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Primary Button/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Secondary Button/i })).toBeInTheDocument();
  });

  it('renders typography demonstration section for primary color', () => {
    renderWithTheme(<App />);
    // Find the specific section using data-testid
    const primarySection = screen.getByTestId('typography-section-primary');
    // Query within the section
    expect(within(primarySection).getByText(/Primary Color/i)).toBeInTheDocument();
    // Find the code value directly within the section
    expect(within(primarySection).getByText(/primary\.main/i)).toBeInTheDocument();
    expect(within(primarySection).getByRole('heading', { level: 1, name: /H1 Heading/i })).toBeInTheDocument();
    expect(within(primarySection).getByText(/Body 1: Lorem ipsum dolor sit amet/i)).toBeInTheDocument();
  });

  it('renders typography demonstration section for text.secondary color', () => {
    renderWithTheme(<App />);
    // Find the specific section using data-testid
    const textSecondarySection = screen.getByTestId('typography-section-text-secondary');
    // Query within the section
    expect(within(textSecondarySection).getByText(/Text Secondary Color/i)).toBeInTheDocument();
    expect(within(textSecondarySection).getByText(/text\.secondary/i)).toBeInTheDocument();
    expect(within(textSecondarySection).getByRole('heading', { level: 6, name: /H6 Heading/i })).toBeInTheDocument();
  });

  // Add more tests as needed for other colors, variants, or interactions
  it('renders the counter button', () => {
    renderWithTheme(<App />);
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument();
  });

  // Example of interaction test (optional)
  /*
  it('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    renderWithTheme(<App />);
    const counterButton = screen.getByRole('button', { name: /count is 0/i });
    await user.click(counterButton);
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
  });
  */
});

