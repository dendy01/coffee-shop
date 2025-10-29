import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Coffee() {
	return (
		<View style={ styles.coffee }>
			<Text>Coffee</Text>
			<Link href={ '/' }>
				<Text>Назад</Text>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	coffee: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

