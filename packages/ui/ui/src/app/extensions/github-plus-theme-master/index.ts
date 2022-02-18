import { IColorTheme } from '@acide/ui/app/model/colorTheme';
import { IExtension } from '@acide/ui/app/model/extension';

const githubPlusExtension: IExtension = require('./package.json');

// Default
const themeOneColors: IColorTheme = require('./themes/github-plus-theme.json');

const themes = githubPlusExtension.contributes?.themes || [];

const themeOne = themes[0];

themes[0] = Object.assign({}, themeOne, themeOneColors);

export { githubPlusExtension };
