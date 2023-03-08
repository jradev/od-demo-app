
import * as React from 'react';
import { ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { Container, ListItem, SubHeader, Spacer } from '@/components';
import { LineChart } from "react-native-gifted-charts";
import { Colors } from '@/theme';
import styles from './style';
import { FlatList } from 'react-native';


export default function (props){

    const { width } = useWindowDimensions()

    const data = [
        {title: 'WealthFront', subtitle: 'Personal Savings', value: '$92,875'},
        {title: 'Bank of America', subtitle: 'Bofa Checkings', value: '$12,030'}
    ]
    
    const lineData = [{
        value: 0, 
        hideDataPoint: true},
        {
            value: 20, 
            hideDataPoint: true
        },{value: 18,
            labelComponent: () => customLabel('1W'), 
            hideDataPoint: true},{
                value: 40, 
                labelComponent: () => customLabel('1D'),
                hideDataPoint: true},{
                    value: 36, 
                    labelComponent: () => customLabel('1M'), 
                    hideDataPoint: true
                },{
                    value: 60, 
                    labelComponent: () => customLabel('3M'), 
                    hideDataPoint: true},{
                        value: 54, 
                        labelComponent: () => customLabel('1Y'),
                        hideDataPoint: true},{value: 85, hideDataPoint: true}]


    const customLabel = val => {
        return (
            <View style={{width: 70, marginLeft: 7}}>
                <Text style={{color: Colors.black, fontWeight: 'bold'}}>{val}</Text>
            </View>
        );
    };
    return (
        <Container backgroundColor={Colors.background}>
        <ScrollView nestedScrollEnabled={true} style={styles.scroll}>
        <View style={styles.chart}>
          <LineChart
            initialSpacing={0}
            data={lineData}
            showXAxisIndices={true}
            width={Math.abs(width * 0.75)}
            spacing={43}
            hideDataPoints
            thickness={5}
            dashWidth={0}
            hideRules
            curved
            yAxisTextStyle={{
                color: Colors.gray
            }}
            startFillColor="#faead8"
            endFillColor="#faead8"
            areaChart
            yAxisSide="right"
            xAxisColor="transparent"
            yAxisColor="transparent"
            color="#e99b44"
          />


        </View>

        <Spacer all={5} />  

        <FlatList
        nestedScrollEnabled={false}
        style={styles.listItemContainer}
        ListHeaderComponent={<SubHeader title='Cash' />} 
        data={data}
        extraData={data}
        renderItem={({item}) => 
            <ListItem 
            title={item.title}
            subtitle={item.subtitle}
            rightText={item.value}
            />
        }
        keyExtractor={(item, k) => `${item.value}${k}`}
        />
        {/* <ListItem 
        title={'Title'}
        subtitle={'Subtitle'}
        rightText={'$9,2875'}
        /> */}
        </ScrollView>
        </Container>
    );
}