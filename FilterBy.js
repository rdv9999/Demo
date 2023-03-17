import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
import Constant from '../Config/Constant';
import MultipleButton from './Component/MultipleButton';


const { width, height } = Dimensions.get('window');

const listTab1 = [
    {
        status: 'Category'
    },
    {
        status: 'Price'
    },
    {
        status: 'Variant'
    },
    {
        status: 'Material'
    },
]
const data=[
    {
        name: 'Kurti',
        status: 'Category',
        isSelected: true
    },
    {
        name: 'Princess Cut',
        status: 'Category',
        isSelected: false
    },
    {
        name: 'Saree',
        status: 'Category',
        isSelected: false
    },
    {
        name: 'Evening',
        status: 'Category',
        isSelected: false
    },
    {
        name: 'Party Were',
        status: 'Price',
        isSelected: false
    },
    {
        name: 'Banarasi',
        status: 'Variant',
        isSelected: false
    },
    {
        name: 'Cotton Saree',
        status: 'Material',
        isSelected: false
    },
]

const FilterBy = ({ navigation }) => {

    const [status, setStatus] = useState('Category')
    const [datalist, setDataList] = useState([ data
        // {
        //     name: 'Kurti',
        //     status: 'Category',
        //     isSelected: true
        // },
        // {
        //     name: 'Princess Cut',
        //     status: 'Category',
        //     isSelected: false
        // },
        // {
        //     name: 'Saree',
        //     status: 'Category',
        //     isSelected: false
        // },
        // {
        //     name: 'Evening',
        //     status: 'Category',
        //     isSelected: false
        // },
        // {
        //     name: 'Party Were',
        //     status: 'Price',
        //     isSelected: false
        // },
        // {
        //     name: 'Banarasi',
        //     status: 'Variant',
        //     isSelected: false
        // },
        // {
        //     name: 'Cotton Saree',
        //     status: 'Material',
        //     isSelected: false
        // },
    ])
    const [isSelected, setSelection] = useState(false);

    const setstatusFilter = status => {//purple and green
        if (status !== 'Category') {
            setDataList([...data.filter(e => e.status === status)])
        } else {
            setDataList(data)
            // console.log(datalist)
        }
        setStatus(status)
    }

    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        style={styles.checkbox}
                        value={item.isSelected}
                        // color={isSelected ? "skyblue" : undefined}
                        // borderWidth={0}
                        onValueChange={() => {
                            item.isSelected = !item.isSelected;
                            setDataList([...data])
                        }}
                        tintColors={{ true: 'skyblue', false: 'black' }}
                    />
                    <Text style={styles.itemName}>{item.name}</Text>
                </View>

            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <View style={{ borderWidth: 1, padding: 5, justifyContent: 'space-between', flexDirection: 'row', height: 40, borderWidth: 0, elevation: 15, borderBottomWidth: 0.5, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20, color: 'skyblue' ,fontFamily:'Poppins-Bold'}}>Filter By</Text>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo
                        style={{ marginRight: 10 }}
                        //color={focused ? 'skyblue' : 'black'}
                        name="cross" size={28} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.listTab}
                >
                    {
                        listTab1.map(e => {
                            return (
                                <TouchableOpacity
                                    style={[
                                        styles.btnTab,
                                        //status === e.status && styles.btnTabActive
                                    ]}
                                    onPress={() => setstatusFilter(e.status)}
                                >
                                    <Text style={[
                                        styles.textTab,
                                        status === e.status && styles.textTabActive
                                    ]}>{e.status}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }

                </View>
            </ScrollView>
            <FlatList
                data={datalist}
                keyExtractor={(e, i) => i.toString()}
                renderItem={renderItem}
            />

            <View style={{ flexDirection: 'row', width: width, marginTop: 5, backgroundColor: 'white', borderBottomWidth: 0.1, justifyContent: 'space-evenly', alignItems: 'flex-end', borderColor: 'lightgrey', alignContent: 'flex-end' }}>
                <MultipleButton
                    label={'Clear Fliters'}
                    //   onPress={() => { setVisible(true); }}
                    textColor='white'
                    // alignSelf={'center'}
                    elevation={8}
                    padding={14}
                    borderColor={'white'}
                    bgColor={'skyblue'}
                    width={'100%'}
                    onValueChange={()=>{
                        !item.isSelected(false)
                    }}
                />
                <MultipleButton
                    label={'Apply'}
                    // onPress={() => navigation.navigate('')}
                    textColor='skyblue'
                    borderColor={'skyblue'}
                    elevation={8}
                    padding={14}
                    width={'100%'}
                />
            </View>
        </ScrollView>
    )
}

export default FilterBy

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listTab: {
        // flex:1,
        backgroundColor: '#fff',
        width: '100%',
        // marginRight:15,
        //padding: 15,
        // marginBottom: 20,
        flexDirection: 'row'
    },
    btnTab: {
        width: width / 3.5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#EBEBEB',
        padding: 10,
        justifyContent: 'center'
    },
    textTab: {
        fontSize: 17,
        color: 'black',
        fontFamily: 'Poppins-Medium'
    },
    // btnTabActive: {
    //     backgroundColor: 'white'
    // },
    textTabActive: {
        color: 'skyblue'
    },
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    itemName: {
        fontWeight: 'bold',
        fontSize: 16,
        alignSelf: 'center'
    },
    // itemStatus: {
    //     backgroundColor: 'green',
    //     paddingHorizontal: 6,
    //     justifyContent: 'center',
    //     right: 10
    // },

    checkboxContainer: {
        flexDirection: 'row',
        marginLeft: 12,
    },
    checkbox: {
        left: 0,
        alignSelf: 'flex-end',
        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
        // borderColor:'red',
        margin: 5,
        // color:Constant.color.BLACK,
    },
    label: {
        margin: 5,
        fontSize: 12,
        left: 0,
        alignSelf: 'flex-end',
        color: Constant.color.BLACK,
    },
})