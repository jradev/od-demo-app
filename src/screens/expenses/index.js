
import * as React from 'react';
import { ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { Container, ListItem, SubHeader, Spacer, ViewAllItem } from '@/components';
import { PieChart } from "react-native-gifted-charts";
import { Colors } from '@/theme';
import styles from './style';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function (props){

    const { width } = useWindowDimensions()

    const navigation = useNavigation();

    const data = [
        {title: 'Home & Utilities', subtitle: '$2,000 spent', logo: 'https://t3.ftcdn.net/jpg/01/99/28/00/360_F_199280007_16Ac3vXFJ5eA5xg8lpH1CtiunxQcjflb.jpg'},
        {title: 'Travel', subtitle: '$3,500 spent', logo: 'https://png.pngtree.com/template/20210227/ourlarge/pngtree-mountain-circle-logo-vector-modern-simple-sophisticated-concepts-image_491662.png'},
        {title: 'Ride Sharing', subtitle: '$3,296 spent', logo: 'https://seeklogo.com/images/G/grab-logo-7020E74857-seeklogo.com.png'},
    ];

    const pieData = [
        {value: 54, color: 'rgb(84,219,234)', text: '54%'},
        {value: 40, color: 'lightgreen', text: '30%'},
        {value: 20, color: 'orange', text: '26%'},
    ];

    const renderLegend = (text, color) => {
        return (
          <View style={styles.legendContainer}>
            <View
              style={[styles.legendIndicator, { backgroundColor: color || 'white' }]}
            />
            <Text style={styles.legendText}>{text || ''}</Text>
          </View>
        );
    };

    const onViewCategories = () => navigation.push('ExpensesList')

    return (
        <Container backgroundColor={Colors.background}>
        <ScrollView nestedScrollEnabled={true} style={styles.scroll}>
        <View style={styles.chart}>
            <Spacer all={24} />
            <PieChart
            innerCircleBorderWidth={4}
            donut
            data={pieData}
            showText
            textColor={Colors.white}
            radius={120}
            textSize={14}
            focusOnPress
            showValuesAsLabels
            />        
            <View
              style={styles.pieBottomLabel}>
              {renderLegend('Rent', 'rgb(84,219,234)')}
              {renderLegend('Groceries', 'lightgreen')}
              {renderLegend('Drinks', 'orange')}
        </View>
        </View>
        <Spacer all={5} />
        
        <FlatList
        nestedScrollEnabled={false}
        style={styles.listItemContainer}
        ListHeaderComponent={<SubHeader title='Top Spending Categories' />} 
        ListFooterComponent={<ViewAllItem title='View all categories' onPress={onViewCategories} />}
        data={data}
        extraData={data}
        renderItem={({item}) => 
            <ListItem 
            title={item.title}
            subtitle={item.subtitle}
            logo={item.logo}
            rightIcon={true}
            />
        }
        keyExtractor={(item, k) => `${item.value}${k}`}
        />

        {/* <ListItem 
        title={'Title'}
        subtitle={'Subtitle'}
        rightText={'$9,2875'}
        /> */}
        <Spacer all={24} />
        </ScrollView>
        </Container>
    );
}