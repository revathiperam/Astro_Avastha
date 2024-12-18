import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {

    // Function to handle translate icon press
    const handleTranslatePress = () => {
        Alert.alert('Translate Icon Pressed', 'This is where the translate action will go');
    };

    // Function to handle notification icon press
    const handleNotificationPress = () => {
        Alert.alert('Notification Icon Pressed', 'This is where the notification action will go');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                {/* Left Menu Icon */}
                <TouchableOpacity>
                    <Icon name="menu" size={28} color="#000" />
                </TouchableOpacity>

                <View style={styles.centerContainer}>
                    <Image
                        source={require('../assets/logos/Astroavastha.png')}
                        style={styles.logoImage}
                    />
                </View>
                {/* Right Icons */}
                <View style={styles.rightIconsContainer}>
                    <View style={styles.onlineContainer}>
                        <Icon name="wifi" size={20} color="green" />
                        <Text style={styles.onlineText}>Online</Text>
                    </View>


                    <TouchableOpacity onPress={handleTranslatePress}>
                        <Image
                            source={require('../assets/icons/translate.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={handleNotificationPress}>
                        <Image
                            source={require('../assets/icons/notificationicon.png')}
                            style={styles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#F59E0B',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F59E0B',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 10
    },
    centerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    rightIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 130,
        height: 80,
        resizeMode: 'contain',
    },
    onlineContainer: {
        alignItems: 'center',
        marginHorizontal: 5,
    },
    onlineText: {
        color: 'green',
        fontSize: 12,
        fontWeight: 'bold',
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#000',
        marginHorizontal: 10,
    },
});

export default Header;
