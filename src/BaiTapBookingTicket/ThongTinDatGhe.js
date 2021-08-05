import React, { Component } from 'react'
import { connect } from 'react-redux'

class ThongTinDatGhe extends Component {
    renderGheDangDat = () => {

        return this.props.danhSachGheDangDat.map((ghe, index) => {
            return <tr key={index}>
                <td>{ghe.soGhe}</td>
                <td>{ghe.gia.toLocaleString()}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => {
                        const action = {
                            type: 'HUY_GHE',
                            soGhe: ghe.soGhe
                        }
                        this.props.dispatch(action);
                    }}>
                        X
                    </button>
                </td>
            </tr>
        })
    }

    render() {
        return (
            <div>
                <div className="mt-4">
                    <button className="gheDuocChon mr-3"></button><span className="text-light" style={{ fontSize: '20px' }}>ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon mr-3"></button><span className="text-light" style={{ fontSize: '20px' }}>ghế đang đặt</span>
                    <br />
                    <button className="ghe  ml-0 mr-3"></button><span className="text-light" style={{ fontSize: '20px' }}>ghế chưa đặt</span>
                    <br />
                </div>
                <div className="mt-4">
                    <table className="table table-striped border-light" border="2">
                        <thead className="text-light">
                            <tr>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody className="text-warning">
                            {this.renderGheDangDat()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td className="text-light">Tổng tiền</td>
                                <td colSpan="2" className="text-warning">
                                    {this.props.danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                        return tongTien += ghe.gia;
                                    }, 0).toLocaleString()}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.BaiTapBookingTicketReducer.danhSachGheDangDat
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe);