import React from 'react';
import PropTypes from 'prop-types';

import {View, Text, StyleSheet, Platform} from 'react-native';

import('~/config/ReactotronConfig').then(() =>
  console.tron.log('Reactotron Configurado!'),
);

const branco = '#FFF';
const cinzaEscuro = '#333';
const cinzaClaro = '#9B9B9B';

const Post = ({data}) => {
  console.tron.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Text style={styles.tituloStyle}>{data.titulo}</Text>
        <Text style={styles.autorStyle}>{data.autor}</Text>
      </View>
      <Text style={styles.textoStyle}>{data.texto}</Text>
    </View>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    titulo: PropTypes.string,
    autor: PropTypes.string,
    texto: PropTypes.string,
  }),
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: branco,
    borderRadius: 5,
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
  },

  postHeader: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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

  tituloStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: cinzaEscuro,
  },

  autorStyle: {
    fontSize: 10,
    color: cinzaClaro,
  },

  textoStyle: {
    marginTop: 15,
    fontSize: 12,
    textAlign: 'justify',
  },
});

export default Post;
