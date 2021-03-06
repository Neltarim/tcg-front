const customColors = {
  text: 'var(--color-text)',
  neutral: 'var(--color-neutral)',
  body: '#323b4a',
  primary: '#F9FAFB',
    'primary-light': '#6586a7',
    'primary-lighter': 'var(--color-primary-lighter)',
    'primary-lightest': 'var(--color-primary-lightest)',
  red: '#801515',
  'red-light': '#ffaaaa',
  green: '#58cd4d',
  gray: '#C4C4C4',
  opp: '#C6A791',
    'opp-bg': '#C6A791',
    'opp-hero': '#571A1A',
    'opp-servant': '#C94F4F',
  player: '#8190A3',
    'player-bg': '#8190A3',
    'player-hero': '#1F3653',
    'player-servant': '#4B6689',
  black: '#444444',
  yellow: '#FFD275',
  info: '#1276b8',
  'info-light': '#b5ddf8',
  warning: '#EAB308',
  'warning-light': '#FEF08A',
  error: '#EF4444',
  'error-light': '#FECACA',
  success: '#84CC16',
  'success-light': '#D9F99D',
  white: '#FFFF',
}

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {},
    extend: {
      fontFamily: {
        sans: ['Harmonia'],
      },
      colors: customColors,
      textColor: {
        DEFAULT: customColors.text,
        ...customColors,
      },
      boxShadow: {
        'reverted-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        'reverted-md':
          '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
        'reverted-lg':
          '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
        'reverted-xl':
          '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)',
        'reverted-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        xs: '340px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            a: {
              color: theme('colors.primary'),
            },
            'h1,h2,h3': {
              color: theme('colors.text'),
            },
          },
        },
      }),
    },
  },
  plugins: [],
}
