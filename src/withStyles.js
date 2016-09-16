import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, ThemeProvider } from 'react-with-styles';

ThemedStyleSheet.registerDefaultTheme({
    unit(x) {
      return x*14
    },
    color: {
      white: '#fff',
      hn: 'rgb(255, 102, 0)',
      textDark: '#222',
      textLight: '#555',
      textLighter: '#777',
      textLightest: '#999'
    }
});
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, ThemeProvider, ThemedStyleSheet };
