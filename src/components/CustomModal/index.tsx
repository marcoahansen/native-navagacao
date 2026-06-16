import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface CustomModalProps {
  handleClose: () => void
}

export const CustomModal = ({ handleClose }: CustomModalProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.opacity} onPress={handleClose}></TouchableOpacity>
      <View style={styles.modalBg}>
        <View style={styles.modalContent}>
          <Text style={styles.text}>Conteúdo do modal</Text>
          <Button title="Fechar" onPress={handleClose} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    zIndex: 0
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
  },
  opacity: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 5
  }
});