import React, { useState } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import RecyclerListView from 'recyclerlistview';
import Video from 'react-native-video';

export default function VideoPlayer(videos) {

    const renderVideos = videos.videos.map((video, i) => {
        return (
            <View style={styles.videoCanvase}>
                <Video
                    source={{ uri: video.playbackUrl }}
                    style={styles.backgroundVideo}
                />
            </View>
        );
    });

    return (
        <ScrollView>
            {renderVideos}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    videoCanvas: {
        width: 200,
        height: 200
    }
});