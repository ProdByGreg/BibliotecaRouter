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
        title="Livros"
        color="darkgreen"
        onPress={() => Actions.verLivros()}
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

        <Text style={styles.title}>VER USUARIOS</Text>

        <View style={styles.button}>
          <Button
            title="Ver usuários"
            color="darkgreen"
            onPress={() => Actions.verUsuarios()}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Adicionar usuário"
            color="darkgreen"
            onPress={() => Actions.adicionarUsuario()}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Deletar usuário"
            color="darkgreen"
            onPress={() => Actions.removerUsuario()}
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
