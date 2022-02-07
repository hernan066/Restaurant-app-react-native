import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TextInput,
} from "react-native";
import SelectDropdown from 'react-native-select-dropdown'
import colors from "../utils/colors";


export const Form = () => {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Interes"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
        />
      </View>
      <SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: -90,
    width: "85%",
    paddingHorizontal: 50,
    backgroundColor: colors.secondary,
    borderRadius: 30,
    height: 180,
    justifyContent: "center",
  },
  viewInputs: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: "40%",
    marginLeft: 5,
  },
  picker: {
    backgroundColor: "#fff",
    borderWidth: 1,
  }
});
