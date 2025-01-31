import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";




export default function Index() {

  let [counter, setCounter] = useState(0)

  function incrementCounter() {

    setCounter(counter + 1)

  }
  const decrementCounter = () => {
    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }

  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.counterstyle}><Text style={styles.contText}>{counter}</Text></View>
        <View style={styles.btnContainer}>
          {/* dec */}
          <TouchableOpacity style={styles.btn} onPress={decrementCounter}>
            <Text style={styles.btnText}>-</Text>
          </TouchableOpacity>
          {/* inc */}
          <TouchableOpacity style={styles.btn} onPress={incrementCounter}>
            <Text style={styles.btnText}>+</Text></TouchableOpacity>
        </View>
      </View>

    </>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gary",


  },
  counterstyle: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    backgroundColor: "#B2A5FF",
    marginTop: 100,
    borderRadius: 300 / 2,
    borderWidth: 5,
  },
  btnContainer: {
    marginVertical: 150,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  btn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 150,
    backgroundColor: "#4B164C",
    borderRadius: 10,
    marginHorizontal: 10
  },
  btnText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold"
  },
  contText: {
    textAlign: "center",
    color: "#000",
    fontSize: 50,
    fontWeight: "bold"
  }

})