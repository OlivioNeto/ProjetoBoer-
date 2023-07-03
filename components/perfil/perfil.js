import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Keyboard,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-paper";
import firebase from "../../services/connectionFirebase";

export default function GerenciarPerfil() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [idade, setIdade] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [key, setKey] = useState("");

  async function insertUpdate() {
    //editar dados
    if (
      (nome !== "") &
      (telefone !== "") &
      (idade !== "") &
      (endereco !== "") &
      (cidade !== "") &
      (key !== "")
    ) {
      firebase.database().ref("perfil").child(key).update({
        nome: nome,
        telefone: telefone,
        idade: idade,
        endereco: endereco,
        cidade: cidade,
      });

      Keyboard.dismiss();
      alert("Perfil Editado!");
      clearFields();
      setKey("");
      return;
    }

    //cadastrar dados
    let perfil = await firebase.database().ref("perfil");
    let chave = perfil.push().key; //comando para salvar é o push
    perfil.child(chave).set({
      nome: nome,
      telefone: telefone,
      idade: idade,
      endereco: endereco,
      cidade: cidade,
    });
    Keyboard.dismiss();
    alert("Perfil Cadastrado!");
    clearFields();
  }

  //método para limpar os campos com valores
  function clearFields() {
    setNome("");
    setTelefone("");
    setIdade("");
    setEndereco("");
    setCidade("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome"
        left={<TextInput.Icon icon="account" />}
        maxLength={40}
        style={styles.input}
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />

      <TextInput
        placeholder="Telefone"
        left={<TextInput.Icon icon="phone-hangup" />}
        style={styles.input}
        onChangeText={(texto) => setTelefone(texto)}
        value={telefone}
      />

      <TextInput
        placeholder="Idade"
        left={<TextInput.Icon icon="calendar-check" />}
        style={styles.input}
        onChangeText={(texto) => setIdade(texto)}
        value={idade}
      />

      <TextInput
        placeholder="Endereco"
        left={<TextInput.Icon icon="map-check" />}
        style={styles.input}
        onChangeText={(texto) => setEndereco(texto)}
        value={endereco}
      />

      <TextInput
        placeholder="Cidade"
        left={<TextInput.Icon icon="city" />}
        style={styles.input}
        onChangeText={(texto) => setCidade(texto)}
        value={cidade}
      />

      <View style={styles.button}>
        <Button onPress={insertUpdate} title="Adicionar" color="#080" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#121212",
    height: 40,
    fontSize: 13,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#FFFFFF",
  },

  separator: {
    marginVertical: 5,
  },

  button: {
    flexDirection: "column",
    alignItems: "center",
    //backgroundColor: '#FFFFFF',
    //borderWidth: 0.5,
    //borderColor: '#fff',
    height: 40,
    borderRadius: 10,
    margin: 5,
  },

  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },

  buttonTextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginLeft: 100,
    fontSize: 20,
  },

  buttonIconSeparatorStyle: {
    backgroundColor: "#fff",
    width: 1,
    height: 20,
  },

  listar: {
    fontSize: 20,
    textAlign: "center",
  },
});
