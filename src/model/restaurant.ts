// let data = {
//   name: '누나네 식당',
//   category: 'western',
//   address: {
//     city: 'incheon',
//     detail: 'somewhere',
//     zipCode: 123213,
//   },
//   menu:[{name: 'rose pasta', price: 2000, category: 'pasta'},
//         {name: 'garlic pasta', price: 3000, category: 'pasta'},]
  
// }

// custom type
// 타입의 타입, 즉 객체를 타입으로 만들 수 있음!
export type Restaurant = {
  name: string;
  category: string;
  address: Address,
  menu: Menu[]
}

// 타입을 세분화 할수록 모듈을 가져다 쓸 수 있음!!!
// 타입의 재정의
export type Address = {
  city: string,
  detail: string,
  zipCode?: number,
}

// export type AddressWithoutZipCode = {
//   // zipcode를 보여줄 필요가 없을 떄!
//   // 따로 타입을 만들어야 하는가?
//   // 귀찮아!!!!
//   city: string,
//   detail: string,
// }

export type AddressWithoutZipcode = Omit<Address, 'zipCode'>;

export type Menu = {
  name: string,
  price: Number,
  category: string,
}

// Menu 타입에 + 더 붙이고 싶을 때!
// -> extends

// restraunt의 category만 가져오고 싶다면?

export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>;

// API를 Typescript로 처리할 때 이런 식으로 처리할 수 있다.
// Type을 Dynamic하게 정리할 수 있음
export type ApiResponse<T> = {
  data: T[],
  totalPage: number,
  page: number,
}

export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
