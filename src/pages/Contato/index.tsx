import { useState } from "react";
import { Button, Modal, StatusBar, StyleSheet, Text, View } from "react-native";
import { CustomModal } from "../../components/CustomModal";

export const Contato = () => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Tela de Contato</Text>

      <Button title="Abrir modal" onPress={() => setVisible(true)} />
      <Modal visible={visible} transparent={true} animationType="slide" onRequestClose={() => setVisible(false)}>
        <CustomModal handleClose={() => setVisible(false)} />
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'green',
  },
  modalBg: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }
  }
});