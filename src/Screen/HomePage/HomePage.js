import React, {Component} from 'react';
import {View, FlatList, Image, StyleSheet, ScrollView} from 'react-native';
import Header from '../../Component/Header';
import Category from '../../Component/Category';
import CrazyDeals from '../../Component/CrazyDeals';
import MenProducts from '../../Component/MenProducts';
import imagePath from '../../../imagePath';

export default class HomePage extends Component {
  
  constructor() {
    super(); 
    this.state = {
      count: 0,  
      cartArray: [],
      productArray: [
        {
          id: 0,
          name: 'HERE&NOW',
          detail: 'Men Priented Round Neck T-shirt',
          price: 447,
          quantity:1,
          lastprice: 999,
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/4318138/2018/5/4/11525433792765-HERENOW-Men-Black-Printed-Round-Neck-T-shirt-2881525433792598-1.jpg',
        },
        {
          id: 1,
          name: 'Huetrap',
          detail: 'Men Priented Round Neck T-shirt',
          price: 519,
          quantity:1,
          lastprice: 999,
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg',
        },
        {
          id: 2,
          name: 'Roadster',
          quantity:1,
          detail: 'Men Priented Round Neck T-shirt',
          price: 435,
          lastprice: 999,
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12003948/2020/7/27/5555b83c-80e4-42ef-9477-7f8adc96ce171595840861827-Roadster-Men-Rust-Printed-Round-Neck-T-shirt-487159584085982-1.jpg',
        },
        {
          id: 3,
          name: 'Nautica',
          detail: ' Red Solid Round Neck T-shirt',
          price: 550,
          quantity:1,
          lastprice: 999,
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11630290/2020/7/8/41d7ce6d-37cf-4fcc-9564-ebe97c7c393a1594198655634-Nautica-Men-Red-Solid-Round-Neck-T-shirt-6191594198653845-1.jpg',
        },
        {
          id: 4,
          name: 'HRX by Hrithik Roshan',
          detail: 'Yellow Printed Round Neck T-Shirt',
          price: 799,
          quantity:1,
          lastprice: 999,
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg',
        },
        {
          id: 5,
          name: 'Louis Philippe Sport',
          detail: ' Solid Polo Collar T-shirt',
          price: 456,
          quantity:1,
          lastprice: 999,
          image:
            'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12390256/2020/9/29/7e467ca7-a127-42c6-be62-dc4b837e66a51601352033431-Louis-Philippe-Sport-Men-Tshirts-541601352032002-1.jpg',
        },
      ],
      deals: [
        {
          id: 0,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/c5bc885d-f26e-48f8-bf2b-5851eef2853d1614235197378-highlander.jpg',
        },

        {
          id: 1,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/c2bf2b41-0db7-4234-ad2e-255c126bd5391614235197391-PUMA.jpg',
        },

        {
          id: 2,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/b8ff996e-c648-421c-9203-f1e550c211ef1614236063192-W-home.jpg',
        },

        {
          id: 3,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/4476d870-ad30-4651-b004-569f8ff0766c1614267660890-unnamed--1-.jpg',
        },
        {
          id: 4,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/730e4053-bf21-4ec6-a8b0-4d7f103ae7981614236063206-Nike-Home.jpg',
        },
        {
          id: 5,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/7dc85995-9d42-4c00-88ca-96c06dc81b181614267660873-unnamed--2-.jpg',
        },

        {
          id: 6,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/85c4ba7d-5088-4f92-b1a4-fed176ac14261614236063220-HRX-home.jpg',
        },

        {
          id: 7,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/306754bf-8989-4c07-87c8-8c38491fab5f1614236063235-HnN-home.jpg',
        },
      ],
      offerForHer: [
        {
          id: 0,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/b872d99c-13c0-4c5a-97bf-60be5c6c83851614247155344-Kurta-_-Kurta_sets.jpg',
        },
        {
          id: 1,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/840b1a2a-0306-4a1e-aaf8-accc0a19313b1614247155381-Sarees.jpg',
        },
        {
          id: 2,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/293a4e00-f1ed-4a94-9cf1-1f620d2723591614247155284-Dress.jpg',
        },
        {
          id: 3,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/b3537abb-805d-4aa8-9f0c-bb5835dba4e61614247155394-Tops-_-Tees.jpg',
        },
        {
          id: 4,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/925a7ce7-63c6-4ece-936c-962e06677d8a1614247155295-Flat-_-heels.jpg',
        },
        {
          id: 5,
          price: 1999,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/16041e1d-4e78-4601-986d-6775d8618eae1614247155320-Jeans.jpg',
        },
      ],
      offerForHim: [
        {
          id: 0,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/7af050c6-6642-43c9-b8df-0aff81874b2b1614246275237-T-Shirts.jpg',
        },
        {
          id: 1,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/1cd87fa9-6740-4e75-95f0-02a6141d27f21614246275106-Jeans.jpg',
        },
        {
          id: 2,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/5e8b7a3d-cc15-4046-9d59-925776dc4cf71614246275163-Shorts.jpg',
        },
        {
          id: 3,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/c389654b-c815-4183-8d6c-abbe8c93092d1614246275190-Sports-Shoe.jpg',
        },
        {
          id: 4,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/7b017503-3a8b-45d0-a8cf-4e81899d8d581614246275222-Trackpants.jpg',
        },
        {
          id: 5,
          price: 2000,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/5e8b7a3d-cc15-4046-9d59-925776dc4cf71614246275163-Shorts.jpg',
        },
      ],
      categories: [
        {
          title: 'MEN',
          image:
            'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859',
        },
        {
          title: 'WOMEN',
          image:
            'https://www.youngisthan.in/wp-content/uploads/2017/04/aishwarya-rai-bachchan.jpg',
        },
        {
          title: 'KIDS',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wXrHB1JSWydIS4TFQFXL392VIeGN0iGIWQ&usqp=CAU',
        },
        {
          title: 'BEAUTY',
          image:
            'https://media.istockphoto.com/photos/makeup-products-and-decorative-cosmetics-on-color-background-fashion-picture-id1153433392?k=6&m=1153433392&s=170667a&w=0&h=j3ZXkFnSW56IM01B8j4TYO2JFf9j1UVrjRcDHOoE-cA=',
        },
        {
          title: 'FOOTWEAR',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhl_Xe1exR5wHX7h9bvQKyPGRNvkxFwj0QA&usqp=CAU',
        },
        {
          title: 'JEWELLERY',
          image:
            'https://images.herzindagi.info/image/2019/Apr/jewellery-diamonds-at.jpg',
        },
        {
          title: 'GADGETS',
          image:
            'https://media.wired.com/photos/5f52a44bb555bc55dbcdf5a8/master/pass/Gear-Wireless-Bluetooth-1226031847.jpg',
        },
      ],
      dealsZone: [
        {
          id: 1,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/612ec8eb-cf72-40b8-b681-88061cfc11011614254213929-Jack_-_Jones-_USPA_and_Spykar.png',
        },
        {
          id: 2,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/9fe52268-fb0f-4af6-99ba-57aaec307c981614254214184-Philips.png',
        },
        {
          id: 3,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/25399ee2-39bb-4cca-b719-4dbccd041e5d1614254213638-Asics.png',
        },
        {
          id: 4,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/693ecc2b-dc7c-4232-9a7f-997b22a134bf1614254214000-Levis-_Flying_Machine.png',
        },
        {
          id: 5,
          image:
            'https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/25/bca64302-4e6c-4099-8d86-da73c7bd12821614254214052-Libas_-_Gerua.png',
        },
      ],
    };
  }
  componentDidMount(){
    this.focusListener=this.props.navigation.addListener('focus',
    ()=>{
      if(this.props.route.params){
        let newItemadded=this.props.route.params.productDetail
        this.addCart(newItemadded)
        this.props.route.params=null
      }
    }
    )
  }
  componentWillUnmount(){
    if(this.focusListener){
      this.focusListener();
    }
  }
  datapass = (id) => {
    const {navigation} = this.props;
    const {productArray, addCart, count} = this.state;
    let newArray = [...productArray];
    navigation.navigate('ProductDetail', {selectedItem: newArray[id]});
  };
  addCart = (id) => {
    const {count, cartArray, productArray} = this.state;
    let demoArray = [...productArray];
    if(!cartArray.includes(demoArray[id])){
       let newArray=[...cartArray,demoArray[id]]
       
      this.setState({
        count: count + 1,
        cartArray:newArray,
        
        
      });
      
    }
  
    
    
    
  };

  render() {
    const {
      categories,
      deals,
      count,
      cartArray,
      offerForHer,
      offerForHim,
      dealsZone,
      productArray,
    } = this.state;
    return (
      <View style={{flex: 1}}>
        <Header count={count} data={cartArray} />

        <ScrollView>
          <View>
            <FlatList
              style={{backgroundColor: 'white'}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.title.toString()}
              data={categories}
              renderItem={({item}) => <Category data={item} />}
            />
          </View>
          <View>
            <Image source={imagePath.image1} style={styles.image} />
          </View>

          <View style={{backgroundColor: 'white', flexDirection: 'row'}}>
            <Image
              style={{width: '100%', height: 50}}
              source={imagePath.titlelogo}
            />
          </View>

          <FlatList
            style={{backgroundColor: 'white'}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            data={deals}
            renderItem={({item}) => <CrazyDeals data={item} />}
            numColumns={2}
          />
          <Image
            style={{
              width: '100%',
              height: 100,
              borderColor: '#DAB763',
              borderWidth: 3,
            }}
            source={imagePath.image2}
          />
          <Image
            style={{width: '100%', height: 50}}
            source={imagePath.offerForHim}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.name.toString()}
            data={productArray}
            renderItem={({item}) => (
              <MenProducts
                data={item}
                datapass={this.datapass}
                addCart={this.addCart}
              />
            )}
            numColumns={2}
          />

          <Image
            style={{width: '100%', height: 75}}
            source={imagePath.dealsZone}
          />
          <FlatList
            style={{backgroundColor: 'white', height: 230}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            data={dealsZone}
            renderItem={({item}) => <CrazyDeals data={item} />}
          />

          <Image
            style={{width: '100%', height: 50}}
            source={imagePath.offerForHer}
          />
          <FlatList
            style={{backgroundColor: 'white'}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            data={offerForHer}
            renderItem={({item}) => <CrazyDeals data={item} />}
            numColumns={2}
          />
          <Image
            style={{width: '100%', height: 50}}
            source={imagePath.offerForHim}
          />
          <FlatList
            style={{backgroundColor: 'white'}}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            data={offerForHim}
            renderItem={({item}) => <CrazyDeals data={item} />}
            numColumns={2}
          />
        </ScrollView>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 360,
    resizeMode: 'contain',
  },
});
