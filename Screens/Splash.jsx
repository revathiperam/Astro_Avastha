import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {

        const timer = setTimeout(() => {
            navigation.replace('Home');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            {/* Background Image */}
            <Image
                source={require('../assets/images/splash_bg.png')}
                style={StyleSheet.absoluteFillObject}
                resizeMode="cover"
            />

            {/* Center Logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logos/astrologo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />

                <Text style={styles.subtitle}>Powered by </Text>
            </View>
            <View>
                <Text style={styles.title}> AstroChalit®</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 250, // Adjust logo size
        height: 250,
        marginBottom: 40,

    },
    title: {
        fontFamily: 'Abhaya Libre',
        fontSize: 35,
        fontWeight: 700,
        textAlign: 'center',
        color: '#fff'
    },
    subtitle: {
        fontFamily: 'Abhaya Libre',
        fontSize: 20,
        fontWeight: 400,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 8,
    },
});

export default SplashScreen;