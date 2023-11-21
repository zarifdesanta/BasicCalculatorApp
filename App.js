import { StatusBar } from "expo-status-bar";
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import Btn from "./components/Btn";
import { useState } from "react";

const Parser = require("expr-eval").Parser;

export default function App() {
  const [num, setNumPress] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [operator, setOperator] = useState();
  const [result, setResult] = useState();
  const parser = new Parser();

  const handleNumPress = (val) => {
    setNumPress(val);
    handleFirstNumber(val);
  };

  const handleFirstNumber = (val) => {
    setFirstNumber(firstNumber + val);
  };

  const handleOperator = (op) => {
    setOperator(op);
    handleFirstNumber(op);
  };

  const updateDisplay = () => {
    return <Text style={styles.equationText}>{firstNumber}</Text>;
  };

  const getResult = () => {
    var exp = parser.parse(firstNumber);
    var valid = true;
    console.log(exp.evaluate());
    try {
      exp.evaluate();
    } catch (e) {
      if (e instanceof SyntaxError) {
        valid = false;
        alert("invalid");
      }
    } finally {
      if (valid) {
        setResult(exp.evaluate());
      }
    }
  };

  const updateResult = () => {
    return <Text style={styles.resultText}>{result}</Text>;
  };

  const clear = () => {
    setFirstNumber("");
    setResult(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*Header View */}
      <View style={styles.header}>
        <Text style={styles.headerText}></Text>
      </View>
      {/*Result View */}
      <View style={styles.result}>
        {updateDisplay()}
        <View style={styles.divider}></View>
        {updateResult()}
      </View>
      {/*Button Group View */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.btnGroup}>
          <Btn title="C" bgColor="gray" onClick={() => clear()}></Btn>
          <Btn
            title="("
            bgColor="gray"
            w={40}
            mR={-3}
            onClick={() => handleOperator("(")}
          ></Btn>
          <Btn
            title=")"
            bgColor="gray"
            w={40}
            mL={-3}
            onClick={() => handleOperator(")")}
          ></Btn>
          <Btn
            title="%"
            bgColor="gray"
            onClick={() => handleOperator("%")}
          ></Btn>
          <Btn
            title="/"
            bgColor="blue"
            onClick={() => handleOperator("/")}
          ></Btn>

          <Btn
            title="7"
            bgColor="skyblue"
            onClick={() => handleNumPress("7")}
          ></Btn>
          <Btn
            title="8"
            bgColor="skyblue"
            onClick={() => handleNumPress("8")}
          ></Btn>
          <Btn
            title="9"
            bgColor="skyblue"
            onClick={() => handleNumPress("9")}
          ></Btn>
          <Btn
            title="X"
            bgColor="blue"
            onClick={() => handleOperator("*")}
          ></Btn>

          <Btn
            title="4"
            bgColor="skyblue"
            onClick={() => handleNumPress("4")}
          ></Btn>
          <Btn
            title="5"
            bgColor="skyblue"
            onClick={() => handleNumPress("5")}
          ></Btn>
          <Btn
            title="6"
            bgColor="skyblue"
            onClick={() => handleNumPress("6")}
          ></Btn>
          <Btn
            title="-"
            bgColor="blue"
            onClick={() => handleOperator("-")}
          ></Btn>

          <Btn
            title="1"
            bgColor="skyblue"
            onClick={() => handleNumPress("1")}
          ></Btn>
          <Btn
            title="2"
            bgColor="skyblue"
            onClick={() => handleNumPress("2")}
          ></Btn>
          <Btn
            title="3"
            bgColor="skyblue"
            onClick={() => handleNumPress("3")}
          ></Btn>
          <Btn
            title="+"
            bgColor="blue"
            onClick={() => handleOperator("+")}
          ></Btn>

          <Btn
            title="0"
            bgColor="skyblue"
            w={170}
            onClick={() => handleNumPress("0")}
          ></Btn>
          <Btn
            title="."
            bgColor="skyblue"
            onClick={() => handleOperator(".")}
          ></Btn>
          <Btn title="=" bgColor="orange" onClick={() => getResult()}></Btn>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    margin: 0,
    backgroundColor: "#b8d4f0",
    bottom: 1,
    position: "absolute",
    paddingBottom: 10,
  },
  header: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  result: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    height: 280,
    width: "96%",
    backgroundColor: "skyblue",
    opacity: 1,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    elevation: 10,
  },
  equationText: {
    fontSize: 40,
    color: "black",
    right: 1,
    alignSelf: "flex-end",
    paddingBottom: 10,
  },
  resultText: {
    fontSize: 50,
    color: "black",
    right: 1,
    alignSelf: "flex-end",
  },
  btnGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingTop: 10,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "black",
    opacity: 0.5,
    elevation: 10,
  },
});
