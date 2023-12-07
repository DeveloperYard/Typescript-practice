import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Restaurant, Address } from './model/restaurant';
import BestMenu from './BestMenu';
// react component
// React.FunctionComponent

let data: Restaurant = {
  name: '누나네 식당',
  category: 'western',
  address: {
    city: 'incheon',
    detail: 'somewhere',
    zipCode: 123213,
  },
  menu:[{name: 'rose pasta', price: 2000, category: 'pasta'},
        {name: 'garlic pasta', price: 3000, category: 'pasta'},]
  
}


const App: React.FC = () => {
  // useState에 들어갈 타입을 제네릭으로 지정해준다!
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);



  const changeAddress = (address: Address) => {
    setMyRestaurant({...myRestaurant, address: address});
  }

  const showBestMenuName = (name: string) => {
    return name;
  }
  // type에 굉장히 엄격!!
  return (
    <div className="App">
      <Store info={myRestaurant} changeAddress={changeAddress}></Store>
      <BestMenu name="불고기피자" category="pizza" showBestMenuName={showBestMenuName}></BestMenu>
    </div>
  );
}

export default App;
