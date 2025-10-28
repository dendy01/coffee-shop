import { StyleSheet, View } from 'react-native';
import Home from './pages/Home';

export default function HomeScreen() {
	return (
		<View style={ styles.app }>
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1
	}
});
