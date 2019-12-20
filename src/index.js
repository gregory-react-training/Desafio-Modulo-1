import React, {Component} from 'react';

import {StyleSheet, ScrollView, View, Platform, Text} from 'react-native';

import Post from '~/components/Post';

import '~/config/DevToolsConfig';

const texto =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const salmao = '#D65A5B';
const branco = '#FFF';

export default class App extends Component {
  state = {
    posts: [
      {
        id: null,
        titulo: '',
        autor: '',
        descricao: '',
      },
    ],
  };

  constructor(props) {
    super(props);
    this.state.posts = [
      {id: 1, titulo: 'Lorem ipsum', autor: 'Gregory', texto: texto},
      {id: 2, titulo: 'Dolor Sit Amet', autor: 'Maximiano', texto: texto},
      {id: 3, titulo: 'Dolore magna aliqua', autor: 'Feijon', texto: texto},
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GoNative App</Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => {
            return (
              <Post
                data={post}
                key={post.id != null ? post.id : Math.random()}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: salmao,
  },

  header: {
    backgroundColor: branco,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  headerTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
