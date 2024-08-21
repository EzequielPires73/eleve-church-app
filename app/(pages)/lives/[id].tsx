import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useLocalSearchParams } from "expo-router";
import { Colors } from '@/constants/Colors';

export default function LivesView() {
    const [loading, setLoading] = useState(true);
    const local = useLocalSearchParams();

    return (
        <View style={{flex: 1}}>
            {loading && <View style={styles.container}>
                <ActivityIndicator
                    size="large"
                    color={Colors.dark.primary}
                />
            </View>}
            <YoutubePlayer
                height={300}
                play={true}
                videoId={local.id.toString()}
                onReady={() => setLoading(false)} // Oculta o loader quando o vídeo está pronto
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        position: 'absolute',
        zIndex: 1,
    },
});
