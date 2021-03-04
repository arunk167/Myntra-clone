import React, {Component} from "react"
import {View, Text,FlatList} from "react-native"
import DetailHeader from '../../Component/DetailHeader'
import imagePath from '../../../imagePath'
import Itemcategory from '../../Component/ItemCategory'


export default class LatestDeals extends Component{
    constructor(props){
        super(props);
        this.state={
            categoryArray: [
                {
                  id: 1,
                  image: imagePath.summer,
                },
                {
                  id: 2,
                  image: imagePath.gadgets,
                },
                {
                  id: 9,
                  image: imagePath.kids,
                },
                {
                  id: 6,
                  image: imagePath.men,
                },
                {
                  id: 8,
                  image: imagePath.women,
                },
        
                {
                  id: 7,
                  image: imagePath.plusSize,
                },
                {
                  id: 5,
                  image: imagePath.theme,
                },
                {
                  id: 3,
                  image: imagePath.beauty,
                },
                {
                  id: 4,
                  image: imagePath.homeLiving,
                },
              ],
        }
    }
    render(){
       
            const {categoryArray} = this.state;
            return (
              <View style={{flex: 1}}>
                <DetailHeader />
                <FlatList
                  keyExtractor={(item) => item.id.toString()}
                  data={categoryArray}
                  renderItem={({item}) => <Itemcategory data={item} />}
                />
              </View>  
           
          
            );
    }
}