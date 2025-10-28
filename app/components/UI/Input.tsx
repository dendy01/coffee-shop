import { TextInput, StyleSheet } from 'react-native';
import { GlobalColors } from '../variables';

export default function Input() {
	return (
		<TextInput
			style={ styles.input }
			placeholder='Найти кофе'
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		fontSize: 14,
		backgroundColor: GlobalColors.grayColor
	}
});