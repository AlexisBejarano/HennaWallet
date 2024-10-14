import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import tw from 'twrnc'; // Import TailWind CSS.
import { ScrollView } from 'react-native-gesture-handler';

// Saldo Total
const saldoTotal = "15,000";
const montoSaldoTotal = "$" + saldoTotal;
const moreSaldoTotal = "Banco + Billetera";

// Saldo Real
const totalReal = "20,000";
const montoTotalReal = "$" + totalReal;
const moreTotalReal = "Monto Total";

export default function HomeScreen() {
  return (
    <ScrollView style={[tw`flex-1`, { overflow: 'hidden' }]}>
      <View style={tw`flex items-center justify-center w-full text-center`}>
        <View style={tw`flex flex-row content-center`}>
          <View style={tw`mx-8 flex-1`}>
            <ThemedText style={tw`text-center`} type="subtitle">Saldo Total</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{montoSaldoTotal}</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{moreSaldoTotal}</ThemedText>
          </View>
          <View style={tw`mx-8 flex-1`}>
            <ThemedText style={tw`text-center`} type="subtitle">Total Real</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{montoTotalReal}</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{moreTotalReal}</ThemedText>
          </View>
        </View>

        <View style={tw`w-full`}>
          <View style={tw`flex flex-row justify-center`}>
            <View style={tw`mx-8`}>
              <ThemedText style={tw`text-center`} type="subtitle">Banco</ThemedText>
              <ThemedText style={tw`text-center`} type="subtitle">BBVA</ThemedText>
              <ThemedText style={tw`text-center`} type="subtitle">Salario Actual</ThemedText>
              <ThemedText style={tw`text-center`} type="default">{montoSaldoTotal}</ThemedText>
              <ThemedText style={tw`text-center`} type="default">{moreSaldoTotal}</ThemedText>
            </View>

            <DataTable style={tw`max-w-200 shrink`}>
              <DataTable.Header>
                <DataTable.Title style={tw`flex-1 justify-center`}>Movimientos</DataTable.Title>
                <DataTable.Title style={tw`flex-3 justify-center`}>Resumen</DataTable.Title>
                <DataTable.Title style={tw`flex-1 justify-center`}>Fecha</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row>
                <DataTable.Cell style={tw`flex-1 justify-center`}>300</DataTable.Cell>
                <DataTable.Cell style={tw`flex-3`}>Pago de renta</DataTable.Cell>
                <DataTable.Cell style={tw`flex-1 justify-center`}>05/24/2024</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row>
                <DataTable.Cell style={tw`flex-1 justify-center`}>100</DataTable.Cell>
                <DataTable.Cell style={tw`flex-3`}>asdasdasd</DataTable.Cell>
                <DataTable.Cell style={tw`flex-1 justify-center`}>25/03/2024</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={page => {
                  console.log(page);
                }}
                label="1-2 of 6"
              />
            </DataTable>
          </View>
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});



