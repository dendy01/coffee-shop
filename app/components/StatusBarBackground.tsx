import { StyleSheet, Text, View } from 'react-native';
import { GlobalColors } from './variables';

export default function StatusBarBackground({ insets }: { insets: number }) {
	return (
		<View
			style={{
				height: insets,
				...styles.statusBar
			}}
		>
			<Text>Hello worlsdfkajsd;cmasd;lfkamsdfl;asdkgjasdl;kcmasd;lkftjdas</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	statusBar: {
		width: '100%',

		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 1000,

		backgroundColor: GlobalColors.blackColor
	}
});