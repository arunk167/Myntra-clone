import React, {Component} from "react"
import {View, Text, FlatList, StyleSheet} from "react-native"
import CartItem from '../../Component/CartItem'


export default class Cart extends Component{
    state={
      totalprice:0,
      
        
    }
    flatListItemSeparator=
    () => {
      return (
        <View
          style={{
            height:4,
            width: "100%",
            backgroundColor:'#DCDCDC',
           
           
          }}
        />
      );
    }
    
    addCount=(id)=>{
      const {data,totalprice,demoprice}=this.props.route.params;
      let newcountData=[...data]
      
      let itemindex=newcountData.findIndex((item)=>item.id==id)
      let newQunantity=newcountData[itemindex];
      newQunantity.quantity+=1
      let nr=0;
      for (let i in data){
        
         nr+=data[i].price*data[i].quantity 
      }
    
      this.setState({
          data:newQunantity,
          totalprice:nr
         
          
      })

   }
   deleteCount=(id)=>{
    const {data}=this.props.route.params;
    let newcountData=[...data]
    
    let itemindex=newcountData.findIndex((item)=>item.id==id)
    let newQunantity=newcountData[itemindex];
    newQunantity.quantity-=1
    let nr=0;
      for (let i in data){
        
        
         nr+=data[i].price*data[i].quantity 
      }
    this.setState({
        data:newQunantity,
        totalprice:nr
    })

 }
//  removeItem=(id)=>{
//   const {data}=this.props.route.params;
 
//   let newremoveArray=[...data]
  
//   //  let index=newremoveArray.findIndex(item=>item.id===id)

//   let newArray=newremoveArray.filter((item)=>item.id!==id)
//    console.log(newArray)
//       this.setState({
//        data:newArray 
//   })
//  } 
componentDidMount(){
  const {data}=this.props.route.params;
  let nr=0;
  for (let i in data){
    nr+=data[i].price*data[i].quantity 

  }
  this.setState({
    
    totalprice:nr
   
    
})
}

    render(){
        const {data}=this.props.route.params;
        const {totalprice}=this.state
        
        return(
            <View style={{flex:1,backgroundColor:'white'}} >
                
           <FlatList
         showsHorizontalScrollIndicator={false}
         keyExtractor={(item) => item.id.toString()}
         ItemSeparatorComponent={this.flatListItemSeparator}
         data={data}
         renderItem={({item}) => <CartItem data={item} addCount={this.addCount} deleteCount={this.deleteCount} removeItem={this.removeItem}  />}
       />
            
          <View style={styles.totalprice}>
            <Text style={styles.totalpriceText}>
              Total Price : {totalprice}
            </Text>
            </View> 

          </View>
        )
    }
}
const styles=StyleSheet.create({
  totalprice:{
    backgroundColor:'#FF3E6C',
    height:50,
    justifyContent:'center',
    alignItems:'center'
  },
  totalpriceText:{
    fontSize:20,
    color:'white'
  }
})