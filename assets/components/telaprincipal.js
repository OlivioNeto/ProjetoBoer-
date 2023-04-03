import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
} from "react-native";
import React from "react";
const Separator = () => {
  return <View style={styles.separator} />;
};
class TelaPrincipal extends React.Component {
  render() {
    return (
      <View style={styles.container}>
                      , {" "}
        <Image
          source={require("../../assets/logo.png")}
          style={{ marginTop: 50, fontSize: 30 }}
        >
                         {" "}
        </Image>
                       {" "}
        <Button
          onPress={() => this.props.navigation.navigate("Login")}
          title="A C E S S A R"
        />
                   {" "}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#4F4F4F", padding: 8 },
  logo: { width: 317, height: 290 },
  separator: {
    marginVertical: 20,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default TelaPrincipal;
