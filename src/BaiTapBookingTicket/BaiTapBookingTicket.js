import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import danhSachGheData from '../Data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return <HangGhe key={index} hangGhe={hangGhe} />
        })
    }

    render() {
        return (
            <div className="bookingMovie">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
                            <div className="text-center">
                                <h3 className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
                                <h3 className="text-light">Màn hình</h3>
                                <div className="screen"></div>
                                {this.renderHangGhe()}
                            </div>
                        </div>
                        <div className="col-4">
                            <h3 className="text-light text-center">
                                DANH SÁCH GHẾ BẠN CHỌN
                            </h3>
                            <ThongTinDatGhe />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
