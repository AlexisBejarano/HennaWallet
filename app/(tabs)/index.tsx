import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


import tw from 'twrnc'; //Import TailWind CSS.
//style={tw``}

//Saldo Total
const saldoTotal = "15,000";
const montoSaldoTotal = "$" + saldoTotal;
const moreSaldoTotal = "Banco + Billetera";

//Saldo Real
const totalReal = "20,000";
const montoTotalReal = "$" + totalReal;
const moreTotalReal = "Monto Total";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
        <ThemedView style={tw`flex-row justify-center w-full text-center`}>
          <ThemedView style={tw`mx-8`}>
            <ThemedText type="subtitle">Saldo Total</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{montoSaldoTotal}</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{moreSaldoTotal}</ThemedText>
          </ThemedView>
          <ThemedView style={tw`mx-8`}>
            <ThemedText type="subtitle">Total Real</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{montoTotalReal}</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{moreTotalReal}</ThemedText>
          </ThemedView>
        </ThemedView>

      <ThemedView style={tw`mt-10`}>
        <ThemedText type='subtitle'>Aqui van las tablas</ThemedText>
      </ThemedView>



    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
