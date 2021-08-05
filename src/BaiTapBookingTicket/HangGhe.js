import React, { Component } from 'react'
import { connect } from 'react-redux';
import { datGheAction } from '../redux/action/baiTapBookingTicketAction';

class HangGhe extends Component {
    renderHangGhe = () => {
        let { hang } = this.props.hangGhe;
        return <button disabled={true} className="rowNumber">
            {hang}
        </button>
    }

    renderDanhSachGhe = () => {
        let { hang, danhSachGhe } = this.props.hangGhe;
        if (hang === '') {
            return danhSachGhe.map((ghe, index) => {
                return <button key={index} className="rowNumber" disabled="true">
                    {ghe.soGhe}
                </button>
            })
        }
        else
            return danhSachGhe.map((ghe, index) => {
                let cssGheDaDat = '';
                let disabled = false;
                if (ghe.daDat) {
                    cssGheDaDat = 'gheDuocChon';
                    disabled = true;
                }
                //Xét trạng thái ghế đang đặt
                let cssGheDangDat = '';
                let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
                if (indexGheDangDat !== -1) {
                    cssGheDangDat = 'gheDangChon';
                }

                return <button key={index} disabled={disabled} className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} onClick={() => {
                    this.props.datGhe(ghe);
                }}>
                    {ghe.soGhe}
                </button>
            })
    }

    render() {
        return (
            <div className="mr-5">
                {this.renderHangGhe()}
                {this.renderDanhSachGhe()}
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.BaiTapBookingTicketReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);