import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';


export default function Pagina3Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página 3</Text>
        
        <Link href="/(drawer)" asChild>
            <Pressable style={styles.button}>
                <Text>Voltar ao inicio</Text>
            </Pressable>
        </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },  
  button: {
    padding: 10,
    backgroundColor: '#afc9e8ff',
    borderRadius: 12,
  },
});
