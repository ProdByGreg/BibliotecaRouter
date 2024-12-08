import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function Inicio() {

  return (
    <View style={styles.body}>

      <View style={styles.menuhorizontal}>

        <Button
          title="Início"
          color="darkgreen"
          onPress={() => Actions.inicio()}
        />

        <Button
          title="Usuarios"
          color="darkgreen"
          onPress={() => Actions.usuarios()}
        />

        <Button
          title="Informação"
          color="darkgreen"
          onPress={() => Actions.info()}
        />

        <Button
          title="Créditos"
          color="darkgreen"
          onPress={() => Actions.creditos()}
        />

      </View>
      

      <View style={styles.menu}>

        <Text style={styles.title}>GERENCIADOR DE LIVROS</Text>

        <View style={styles.button}>
          <Button
            title="Ver livros"
            color="darkgreen"
            onPress={() => Actions.verlivros()}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Adicionar livro"
            color="darkgreen"
            onPress={() => Actions.adicionarLivro()}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Emprestar Livro"
            color="darkgreen"
            onPress={() => Actions.emprestarLivro()}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Devolver Livro"
            color="darkgreen"
            onPress={() => Actions.devolverLivro()}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Ver emprestados"
            color="darkgreen"
            onPress={() => Actions.emprestados()}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Remover Livro"
            color="darkgreen"
            onPress={() => Actions.removerLivro()}
          />
        </View>
        

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rebeccapurple',
    padding: 16,
  },
  menu: {
    backgroundColor: 'rgb(128, 21, 199)',
    padding: 30,
    marginVertical: 20,
    borderRadius: 8,
    marginTop: 80,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 15,
  },
  menuhorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
});
