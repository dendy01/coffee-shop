import { TextInput, StyleSheet, View, Pressable } from 'react-native';
import { GlobalColors, GlobalSizes } from '../variables';
import SearchIcon from '@/assets/icons/SearchIcon';

export default function Input() {
	return (
		<View>
			<Pressable
				style={ styles.inputLabelIcon }
			>
				<SearchIcon />
			</Pressable>
			<TextInput
				style={ styles.input }
				placeholder='Найти кофе'
				placeholderTextColor={ GlobalColors.grayColor700 }
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	inputLabelIcon: {
		position: 'absolute',
		top: '50%',
		left: 10,
		zIndex: 1100,

		transform: [{ translateY: '-50%' }],

		backgroundColor: GlobalColors.grayColor
	},

	input: {
		padding: GlobalSizes.s20,
		paddingHorizontal: GlobalSizes.s40,
		borderRadius: GlobalSizes.s16,

		fontSize: GlobalSizes.s14,
		fontFamily: 'FiraSans',
		fontWeight: '400',

		color: GlobalColors.grayColor700,
		backgroundColor: GlobalColors.blackColor300
	}
});