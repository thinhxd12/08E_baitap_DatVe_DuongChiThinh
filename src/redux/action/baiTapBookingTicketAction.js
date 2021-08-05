import { DAT_GHE } from "../type/baiTapBookingTicketType"


export const datGheAction = (gheDangDat) => {
    return {
        type: DAT_GHE,
        gheDangDat
    }
}
