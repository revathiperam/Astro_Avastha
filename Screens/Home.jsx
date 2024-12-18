import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <View style={styles.container}>
            {/* Header Component */}
            <Header />

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Scrollable Image Gallery */}
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
                    <Image source={require('../assets/logos/raasi1.png')} style={styles.image} />
                    <Image source={require('../assets/logos/raasi2.png')} style={styles.image} />
                    <Image source={require('../assets/logos/raasi3.png')} style={styles.image} />
                    <Image source={require('../assets/logos/raasi4.png')} style={styles.image} />
                    <Image source={require('../assets/logos/raasi5.png')} style={styles.image} />
                    <Image source={require('../assets/logos/raasi6.png')} style={styles.image} />
                    <Image source={require('../assets/logos/raasi7.png')} style={styles.image} />
                    <Image source={require('../assets/logos/raasi8.png')} style={styles.image} />
                    <Image source={require('../assets/logos/raasi9.png')} style={styles.image} />
                </ScrollView>

                {/* All feactures bar*/}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="All Features"
                            value={searchQuery}
                            onChangeText={(text) => setSearchQuery(text)}
                            placeholderTextColor="#fff"
                        />
                        <Ionicons name="search" size={30} color="#fff" style={styles.searchIcon} />
                    </View>
                </View>
            </ScrollView>

            {/* Footer */}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollContent: {
        paddingBottom: 20,
    },
    imageScroll: {
        marginTop: 25,
    },
    image: {
        width: 80,
        height: 80,
        marginHorizontal: 2,
    },
    searchContainer: {
        paddingHorizontal: 10,
        marginTop: 25,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F59E0B',
        borderRadius: 50,
        borderColor: 'none',
        paddingHorizontal: 10,
        height: 55,
    },
    searchIcon: {
        marginLeft: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        color: '#fff'
    },
});

export default HomeScreen; 
