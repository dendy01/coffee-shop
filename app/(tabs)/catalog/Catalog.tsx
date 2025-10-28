import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../../components/UI/Input';
import { GlobalColors, GlobalSizes } from '../../components/variables';

export default function Catalog() {
	return (
		<View style={ styles.coffee }>
			<View style={ styles.coffeeHeader }>
				<Text>Изменить адрес</Text>
				<Input />
			</View>
			<View>
				<Text>Catalog</Text>
				<Link href={ '/catalog/1234' }>
					<Text>Перейти в описание товара</Text>
				</Link>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	coffee: {
		flex: 1
	},

	coffeeHeader: {
		padding: GlobalSizes.s30,
		backgroundColor: GlobalColors.blackColor
	}
});

