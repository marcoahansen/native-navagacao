import { Button, StyleSheet, Text, View } from "react-native"

interface CustomModalProps {
  handleClose: () => void
}

export const CustomModal = ({ handleClose }: CustomModalProps) => {
  return (
    <View style={styles.modalBg}>
      <View style={styles.modalContent}>
        <Text style={styles.text}>Conteúdo do modal</Text>
        <Button title="Fechar" onPress={handleClose} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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