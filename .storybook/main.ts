import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	addons: [
		'@storybook/addon-essentials',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {}
	},
	docs: {
		autodocs: true,
		defaultName: 'Docs',
	},
};

export default config;
