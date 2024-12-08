import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { getBooks, putBook } from './api/Api';
import { Actions } from 'react-native-router-flux';







export default function EmprestarLivro() {
  const [id, setId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const [books, setBooks] = useState([]);







  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();

        const availableBooks = response.filter(book => !book.Emprestado);
        setBooks(availableBooks);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }};



    fetchBooks();
  }, []);





  const Emprestar = async () => {
    try {
      if (!id || !usuarioId) {
        alert('Por favor, insira um ID de livro e de usuário válidos.');
        return;
      }

      await putBook(id, usuarioId);
      alert('Livro emprestado com sucesso!');
      setId('');
      setUsuarioId('');






      const updatedBooks = await getBooks();
      setBooks(updatedBooks);

    } catch (error) {
      console.error('Erro ao emprestar livro:', error);
      alert('Erro ao emprestar livro!');
    }
  };

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





      <View style={styles.menuemprestar}>

        <Text style={styles.title}>EMPRESTAR NOVO LIVRO</Text>




        <ScrollView>
          {books.length > 0 ? (
            books.map((book) => (

              <View key={book.id} style={styles.bookItem}>

              <Text style={styles.bookText}>
              {"ID do livro:"}{book.id} {"\n"}
              {"Titulo do livro:"}  {book.titulo} {"\n"}
              {"Autor do livro:"} {book.autor} {"\n"}
              {"Ano do livro:"}  {book.ano} {"\n"}
              {"Quantidade disponível:"}  {book.quantidade} {"\n"}
              {"Quantidade emprestada:"}  {book.quantidadeEmprestada} {"\n"}
              {"Emprestado para o usuario de ID:"}  {book.usuariosEmprestados.join(", ")} {"\n"}
              </Text>

              </View>
            ))
          ) : (
            <Text style={styles.bookText2}>Não há livros disponíveis.</Text>
          )}
        </ScrollView>







        <TextInput
          style={styles.input}
          placeholder="ID do Livro"
          value={id}
          onChangeText={setId}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="ID do Usuário"
          value={usuarioId}
          onChangeText={setUsuarioId}
          keyboardType="numeric"
        />





          <View style={styles.buttonGroup}>

          <Button 
        title="Emprestar livro" 
        color="darkgreen" 
        onPress={Emprestar} 
        />

          <Button
            title="VOLTAR"
            color="darkgreen"
            onPress={() => Actions.inicio()}
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
  menuemprestar: {
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
  bookItem: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 8,
    borderRadius: 4,
  },
  bookText: {
    fontSize: 16,
    color: 'black',
  },
  bookText2: {
    fontSize: 16,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    color: 'black',
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
  buttonGroup: {
    gap: 10,
  },
});
