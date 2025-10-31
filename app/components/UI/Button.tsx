import { useRef } from 'react';
import { Animated, GestureResponderEvent, Pressable, PressableProps, StyleSheet } from 'react-native';
import { GlobalColors, GlobalSizes } from '../variables';

interface ButtonProps extends PressableProps
{
    children?: React.ReactNode;
	isIcon?: boolean;
}

export default function Button({ children, isIcon, ...props }: ButtonProps) {
	const animatedColorValue = useRef(new Animated.Value(100)).current;
	const color = animatedColorValue.interpolate({
		inputRange: [0, 100],
		outputRange: [GlobalColors.orangeColor700, GlobalColors.orangeColor]
	});

	const startAnimation = (event: GestureResponderEvent) => {
		Animated.spring(animatedColorValue, {
			toValue: 0,
			useNativeDriver: true
		}).start();

		props.onPressIn && props.onPressIn(event);
	};

	const endAnimation = (event: GestureResponderEvent) => {
		Animated.spring(animatedColorValue, {
			toValue: 100,
			useNativeDriver: true
		}).start();

		props.onPressOut && props.onPressOut(event);
	};

	return (
		<Pressable
			{ ...props }
			onPressIn={ startAnimation }
			onPressOut={ endAnimation }
		>
			{
				isIcon ?
					<Animated.View style={{
						...styles.button,
						width: GlobalSizes.s30,
						height: GlobalSizes.s30,
						borderRadius: GlobalSizes.s10,
						backgroundColor: color
					}}>
						{ children }
					</Animated.View>
					:
					<Animated.View style={{
						...styles.button,
						paddingVertical: GlobalSizes.s20,
						borderRadius: GlobalSizes.s16,
						backgroundColor: color
					}}>
						{ children }
					</Animated.View>
			}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});