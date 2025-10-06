import { useRef } from "react";
import { Animated, GestureResponderEvent, Pressable, PressableProps, StyleSheet } from "react-native";
import { GlobalColors, GlobalSizes } from "./variables";

interface ButtonProps extends PressableProps
{
    children?: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
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
            <Animated.View style={ {
                ...styles.button,
                backgroundColor: color
            } }>
                { children }
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: GlobalSizes.s20,
        borderRadius: GlobalSizes.s16,
        
        justifyContent: 'center',
        alignItems: 'center',
    }
});