import { IColorTheme } from '@acide/ui/app/model/colorTheme';
import { IExtension } from '@acide/ui/app/model/extension';

const paleNightColorThemeExtension: IExtension = require('./package.json');

// Default
const themeColors: IColorTheme = require('./themes/palenight-mild-contrast.json');

const themes = paleNightColorThemeExtension.contributes?.themes || [];

const themeZero = themes[0];
themes[0] = Object.assign({}, themeZero, themeColors);

export { paleNightColorThemeExtension };
