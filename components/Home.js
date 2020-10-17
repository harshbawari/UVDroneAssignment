import React, { Component, useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { } from 'react-native-elements';
import { Video } from 'react-native-video';
import { baseUrl } from '../shared/baseUrl';
import VideoPlayer from './VideoPlayer';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            pages: 0,
            loading: true,
            videos: []
        }


    }

    async componentDidMount() {

        this.fetchData();
    }

    async fetchData() {
        this.setState({ loading: true });

        const response = await fetch('https://europe-west1-boom-dev-7ad08.cloudfunctions.net/videoFeed', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                page: this.state.pages
            })
        });
        this.setState({ pages: this.state.pages + 1 });

        this.state.videos = await response.json();

        this.setState({ loading: false });
    }

    render() {
        return (
            <View>
                {this.state.loading ? <Text style={{ fontSize: 20 }}>Loading...</Text> : <VideoPlayer videos={this.state.videos} />}
            </View>
        );
    }
}