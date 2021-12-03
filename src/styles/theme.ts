export default {
  container: {
    large: '130rem',
    middle: '117rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      mini: '1.2rem',
      small: '1.6rem',
      medium: '2.4rem',
      large: '3.2rem',
      huge: '4.8rem',
      giant: '6.4rem'
    }
  },
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    primary: {
      lightest: '#D4E0FE',
      lighter: '#BECFFD',
      light: '#ADC0FB',
      base: '#92A9F9',
      dark: '#6A80D6',
      darker: '#495CB3',
      darkest: '#2E3D90'
    },
    secondary: {
      lightest: '#FCE3B8',
      lighter: '#F7CE94',
      light: '#EFB777',
      base: '#E5964C',
      dark: '#C47437',
      darker: '#C47437',
      darkest: '#A45626'
    },
    linear: {
      first: 'linear-gradient(90deg, #D4E0FE 0.21%, #2E3D90 99.77%);'
    },
    overlays: {
      dark: 'rgba(1, 0, 0, 0.95)'
    },
    gray: {
      light: '#FAFBFC',
      base: '#F9FAFC',
      dark: '#DADADD',
      darker: '#BBBBBD'
    }
  },
  spacings: {
    mini: '0.2rem',
    small: '0.4rem',
    compact: '0.8rem',
    medium: '1.6rem',
    large: '3.2rem',
    huge: '6.4rem',
    giant: '12.8rem'
  },
  layers: {
    base: 10,
    popup: 20,
    overlay: 30,
    menu: 40,
    modal: 50,
    alwaysOnTop: 60
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadows: {
    elevation: '1rem 1.5rem 1rem 0.5rem rgba(0, 0, 0, 0.35)'
  }
} as const
