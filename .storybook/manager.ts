import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: {
    ...themes.light,
    brandUrl:
      'https://67e4fd1fd2c7078dceec04a4-ecsscfsupd.chromatic.com/',
    brandImage: '/svg/ic_logo_small_black.svg',
    brandTarget: '_self',
  },
});