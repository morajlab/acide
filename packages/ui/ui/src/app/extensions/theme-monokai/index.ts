import { IColorTheme } from '@acide/ui/app/model/colorTheme';
import { IExtension } from '@acide/ui/app/model/extension';

const monokaiColorThemeExtension: IExtension = require('./package.json');

// Default
const themeOneColors: IColorTheme = require('./themes/monokai-color-theme.json');

const themes = monokaiColorThemeExtension.contributes?.themes || [];

const themeOne = themes[0];

themes[0] = Object.assign({}, themeOne, themeOneColors);

export { monokaiColorThemeExtension };
