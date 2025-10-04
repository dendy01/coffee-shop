import { Pressable, PressableProps, StyleSheet } from "react-native";
import { GlobalColors, GlobalSizes } from "./colors";

export default function Button({ children, ...props }: PressableProps) {
    return (
        <Pressable
            { ...props }
            style={ styles.button }
        >
            { children }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: GlobalSizes.s20,
        borderRadius: GlobalSizes.s16,
        
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: GlobalColors.orangeColor
    }
});