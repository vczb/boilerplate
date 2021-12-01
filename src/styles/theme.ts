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
    primary: {
      lighter: '#1D9A6C',
      light: '#188977',
      base: '#137177',
      dark: '#0E4D64',
      darker: '#0A2F51'
    },
    gradients: {
      l90d: `linear-gradient(90deg, rgba(10,47,81,1) 0%, rgba(69,157,247,1) 100%, rgba(29,154,108,0.99) 100%);`,
      l180d: `linear-gradient(180deg, rgba(10,47,81,1) 0%, rgba(69,157,247,1) 100%, rgba(29,154,108,0.99) 100%);`
    },
    overlays: {
      dark: 'rgba(1, 0, 0, 0.95)'
    },
    gray: {
      lighter: '#E4F5D8',
      light: '#DFF0D3',
      base: '#C7D6BC',
      dark: '#A4B09B',
      darker: '#687063'
    },
    white: '#FFFFFF',
    black: '#000000'
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
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  shadows: {
    elevation: '1rem 1.5rem 1rem 0.5rem rgba(0, 0, 0, 0.35)'
  }
} as const
