import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
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
                    <Text style={ styles.homeTitle }>Одно из самых вкусных кофе в городе!</Text>
                    <Text style={ styles.homeSubtitle }>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
                    <TouchableOpacity style={ styles.homeButton }>
                        <Text style={ styles.homeButtonText }>Начать</Text>
                    </TouchableOpacity>
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
        paddingHorizontal: 30,

        gap: 16,
        justifyContent: 'flex-end',

        position: 'relative',
        bottom: 40
    },

    homeContent: {
        height: '30%',

        backgroundColor: 'rgba(0, 0, 0, 1)'
    },

    homeTitle: {
        fontSize: 34,
        fontWeight: '600',
        textAlign: 'center',

        color: 'rgba(255, 255, 255, 1)'
    },

    homeSubtitle: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        letterSpacing: 0.1,

        color: 'rgba(169, 169, 169, 1)'
    },

    homeButton: {
        paddingVertical: 20,
        borderRadius: 16,
        
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'rgba(198, 124, 78, 1)'
    },

    homeButtonText: {
        fontSize: 16,
        fontWeight: '600',

        color: 'rgba(255, 255, 255, 1)'
    }
});