import { combineReducers, createStore } from 'redux';

import { BaiTapBookingTicketReducer } from './reducers/baiTapBookingTicketReducer'

//state trong redux là reducer
const rootReducer = combineReducers({
    //Các state ứng dụng sẽ được lưu tại đây
    BaiTapBookingTicketReducer: BaiTapBookingTicketReducer

});



export const store = createStore(rootReducer);