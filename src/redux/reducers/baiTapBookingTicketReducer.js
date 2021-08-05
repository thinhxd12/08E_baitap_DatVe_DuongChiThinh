import { DAT_GHE, HUY_GHE } from "../type/baiTapBookingTicketType";

const stateDefault = {
    danhSachGheDangDat: [
        // { soGhe: 'A1', gia: 1000 },
        // { soGhe: 'F5', gia: 1000 },
    ]
}

export const BaiTapBookingTicketReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(ghe=>ghe.soGhe === action.gheDangDat.soGhe);
            if (index !== -1){
                danhSachGheDangDatUpdate.splice(index,1)
            }
            else danhSachGheDangDatUpdate.push(action.gheDangDat);
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        } 
        case HUY_GHE:{
            let danhSachGheDangDatUpdate = state.danhSachGheDangDat.filter(ghe =>ghe.soGhe !== action.soGhe);
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        default: return { ...state };
    }
}

