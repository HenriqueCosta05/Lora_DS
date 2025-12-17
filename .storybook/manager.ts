import { addons } from 'storybook/manager-api';
import LoraTheme from './LoraTheme';

addons.setConfig({
    theme: LoraTheme,
});
