import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, ThemeProvider } from 'react-with-styles';

function theme(u) {
    return {
        unit(x) {
          return x * u;
        },

        breakpoint: {
          sm: '@media screen and (min-width: 480px)',
          md: '@media screen and (min-width: 600px)',
          lg: '@media screen and (min-width: 916px)',
          xl: '@media screen and (min-width: 1024px)',
        },

        color: {
          white: '#fff',
          hn: 'rgb(255, 102, 0)',
          textDark: '#222',
          textLight: '#555',
          textLighter: '#777',
          textLightest: '#999',
        },

        font: {
          small: {
            fontSize: .75 * u,
            fontWeight: 'normal'
          },

        },
    }
}

ThemedStyleSheet.registerDefaultTheme(theme(16));
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, ThemeProvider, ThemedStyleSheet };
