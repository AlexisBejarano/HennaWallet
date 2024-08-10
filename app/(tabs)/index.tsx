import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import tw from 'twrnc'; // Import TailWind CSS.

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
    <ThemedView style={styles.titleContainer}>
      <ThemedView style={tw`flex items-center justify-center w-full text-center`}>
        <ThemedView style={tw`flex flex-row content-center`}>
          <ThemedView style={tw`mx-8 w-35 h-35`}>
            <ThemedText style={tw`text-center`} type="subtitle">Saldo Total</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{montoSaldoTotal}</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{moreSaldoTotal}</ThemedText>
          </ThemedView>
          <ThemedView style={tw`mx-8 w-35 h-35`}>
            <ThemedText style={tw`text-center`} type="subtitle">Total Real</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{montoTotalReal}</ThemedText>
            <ThemedText style={tw`text-center`} type="default">{moreTotalReal}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={tw`w-200 flex-row`}>
        
        <ThemedView style={tw`mx-8 w-35 h-35 my-auto mx-auto float-right`}>
          <ThemedText style={tw`text-center`} type="subtitle">Banco</ThemedText>
          <ThemedText style={tw`text-center`} type="subtitle">BBVA</ThemedText>
          <ThemedText style={tw`text-center`} type="subtitle">Salario Actual</ThemedText>
          <ThemedText style={tw`text-center`} type="default">{montoSaldoTotal}</ThemedText>
          <ThemedText style={tw`text-center`} type="default">{moreSaldoTotal}</ThemedText>
        </ThemedView>

        <DataTable>
          <DataTable.Header>
            <DataTable.Title style={tw`flex-1 justify-center`}>Movimientos</DataTable.Title>
            <DataTable.Title style={tw`flex-3 justify-center`}>Resumen</DataTable.Title>
            <DataTable.Title style={tw`flex-1 justify-center`}>Fecha</DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell style={tw`flex-1 justify-center`}>2000</DataTable.Cell>
            <DataTable.Cell style={tw`flex-3`}>Pago de renta</DataTable.Cell>
            <DataTable.Cell style={tw`flex-1 justify-center`}>05/24/2024</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell style={tw`flex-1 justify-center`} >100</DataTable.Cell>
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
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});



