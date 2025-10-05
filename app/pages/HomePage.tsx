import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from "react-native";
import Button from '../components/UI/Button';
import { GlobalColors, GlobalSizes } from "../components/UI/variables";

export default function Home() {
    const animatedTextValue = useRef(new Animated.Value(-100)).current;
    const animatedOpasityValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedTextValue, {
            toValue: 0,
            delay: 1000,
            useNativeDriver: true
        }).start();

        Animated.timing(animatedOpasityValue, {
            toValue: 1,
            delay: 1000,
            useNativeDriver: true
        }).start();
    }, []);

    return (
        <View style={ styles.home }>
            <View style={ styles.homeImage }>
                <ImageBackground
                    source={ require('../../assets/images/coffee-image.png') }
                    style={ styles.image }
                    resizeMode="cover"
                ></ImageBackground>
            </View>

            <View style={ styles.homeContent }>
                <LinearGradient
                    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                    style={ styles.linearGradient }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 0.2 }}
                >
                    <Animated.View style={ {
                        transform: [{ translateY: animatedTextValue }],
                        opacity: animatedOpasityValue
                    } }>
                        <Text style={ styles.homeTitle }>Одно из самых вкусных кофе в городе!</Text>
                    </Animated.View>
                    <Text style={ styles.homeSubtitle }>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
                    <Button>
                        <Text style={ styles.homeButtonText }>Начать</Text>
                    </Button>
                </LinearGradient>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
    },

    homeImage: {
        height: '70%',
    },

    image: {
        width: '100%',
        height: '100%'
    },

    linearGradient: {
        height: '100%',
        paddingHorizontal: GlobalSizes.s30,

        justifyContent: 'flex-end',
        gap: GlobalSizes.s16,

        position: 'relative',
        bottom: GlobalSizes.s40
    },

    homeContent: {
        height: '30%',

        backgroundColor: GlobalColors.blackColor
    },

    homeTitle: {
        fontSize: GlobalSizes.s34,
        fontWeight: '600',
        textAlign: 'center',

        color: GlobalColors.whiteColor
    },

    homeSubtitle: {
        fontSize: GlobalSizes.s14,
        fontWeight: '400',
        textAlign: 'center',
        letterSpacing: 0.1,

        color: GlobalColors.grayColor
    },

    homeButtonText: {
        fontSize: GlobalSizes.s16,
        fontWeight: '600',

        color: GlobalColors.whiteColor
    }
});