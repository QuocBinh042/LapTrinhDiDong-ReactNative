import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Screen4({ navigation, route }) {
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const price = 2.99;

    const gridItems = [
        { id: 1, image: require('../assets/data/Container_7(3).png') },
        { id: 2, image: require('../assets/data/Image7_2.png'), rating: 4.5 },
        { id: 3, image: require('../assets/data/Image7_1.png'), rating: 4.0 },
        { id: 4, image: require('../assets/data/Image7_4.png'), rating: 4.5 },
        { id: 5, image: require('../assets/data/Image7.png'), rating: 3.7 },
    ];

    const handleSizeSelection = (size) => setSelectedSize(size);
    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

    const handleAddToCart = () => {
        navigation.navigate("Screen3");
        alert("Succes!");
    };

    const total = (price * quantity).toFixed(2);

    return (
        <ScrollView style={styles.container}>
            <View >

                {/* Product Images */}
                <View style={styles.gridContainer}>
                    <Image source={gridItems[0].image} style={styles.largeImage} />
                    <View style={styles.smallGridContainer}>
                        {gridItems.slice(1).map(item => (
                            <TouchableOpacity key={item.id} style={styles.gridItem}>
                                <Image source={item.image} style={styles.gridImage} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Product Info */}
                <Text style={styles.price}>${price.toFixed(2)}</Text>
                <Text style={styles.offer}>Buy 1 get 1</Text>
                <Text style={styles.productName}>Product Name</Text>
                <Text style={styles.productSubtitle}>Occaecat est deserunt tempor offici</Text>

                {/* Rating */}
                <View style={styles.ratingContainer}>
                    <FontAwesome name="star" size={20} color="#ffcc00" />
                    <Text style={styles.rating}>4.5</Text>
                </View>

                {/* Size Selection */}
                <Text style={styles.sectionTitle}>Size</Text>
                <View style={styles.sizeContainer}>
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                        <TouchableOpacity
                            key={size}
                            style={[
                                styles.sizeButton,
                                selectedSize === size && styles.selectedSizeButton,
                            ]}
                            onPress={() => handleSizeSelection(size)}
                        >
                            <Text style={styles.sizeText}>{size}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Quantity Selection */}
                <Text style={styles.sectionTitle}>Quantity</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={decreaseQuantity}>
                        <FontAwesome name="minus-square" size={30} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity}>
                        <FontAwesome name="plus-circle" size={30} color="#333" />
                    </TouchableOpacity>
                    <Text style={styles.totalText}>Total: ${total}</Text>
                </View>

                {/* Size Guide and Reviews */}
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Size guide</Text>
                    <FontAwesome name="chevron-right" size={16} color="#aaa" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Reviews (99)</Text>
                    <FontAwesome name="chevron-right" size={16} color="#aaa" />
                </TouchableOpacity>

                {/* Add to Cart Button */}
                <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                    <Text style={styles.addToCartText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        padding: 20,
    },
    gridContainer: {
        marginBottom: 20,
    },
    largeImage: {
        width: '100%',
        height: 210,
        borderRadius: 10,
    },
    smallGridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    gridItem: {
        width: '23%',
        height: 80,
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridImage: {
        width: '90%',
        height: '90%',
    },
    price: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00bdd6',
    },
    offer: {
        fontSize: 14,
        color: '#ff6347',
        marginBottom: 20,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    productSubtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    rating: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    sizeButton: {
        width: '18%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#f9f9f9',
    },
    selectedSizeButton: {
        borderColor: '#00bfff',
        borderWidth: 2,
    },
    sizeText: {
        fontSize: 14,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    quantityText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    link: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    linkText: {
        fontSize: 16,
        color: '#555',
    },
    addToCartButton: {
        backgroundColor: '#00bdd6',
        padding: 15,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
