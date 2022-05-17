import { LightThemeProvider } from 'common/style/ThemeProvider';

const ThemeDecorator = (storyFn) => <LightThemeProvider>{storyFn()}</LightThemeProvider>;

export default ThemeDecorator;
