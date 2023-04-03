import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import React from "react";
constSeparator = () => {
  return <View style={styles.separator} />;
};
class Login extends React.Component() {
  render() {
    return (
      <View style={styles.container}>
                       {" "}
        <Image style={styles.logo} source={require("../../assets/logo.png")} /> 
                     {" "}
        <Text style={styles.paragraph}>
                              LavagemAutomotiva!
        </Text>
                       {" "}
        <SafeAreaView style={styles.container}>
                             {" "}
          <Button onPress={""} title="A C E S S A R " color="#A0522D" />       
                      <Separator />                   {" "}
          <Button onPress={""} title="A J U D A  " color="#A0522D" />           
             {" "}
        </SafeAreaView>
                   {" "}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4F4F4F", padding: 8 },
  paragraph: {
    margin: 24,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Arial",
  },
  logo: { width: 300, height: 300 },
  separator: {
    marginVertical: 20,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default Login;
