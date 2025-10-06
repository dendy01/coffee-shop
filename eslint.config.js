// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const pluginReactNative = require('eslint-plugin-react-native');

module.exports = defineConfig([
	expoConfig,
	{
		ignores: ['dist/*'],
		plugins: {
			'react-native': pluginReactNative
		},
		rules: {
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			'indent': ['error', 'tab'],
			'semi': ['error', 'always'],
			'comma-dangle': ['error', 'never'],
			'quotes': ['error', 'single'],
			'react-native/no-unused-styles': 2,
			'react-native/split-platform-components': 2,
			'react-native/no-inline-styles': 2,
			'react-native/no-color-literals': 2,
			'react-native/no-raw-text': 2,
			'react-native/no-single-element-style-arrays': 2,
			'react-hooks/exhaustive-deps': 'off'
		}
	}
]);
