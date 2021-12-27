import React from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pesan :0
        },
        this.pesanan = this.pesanan.bind(this),
        this.rubahPesan = this.rubahPesan.bind(this);
    }
    rubahPesan(){
        this.setState((state, props) => {
            return{
                pesan: state.pesan
            };
        })
    }
    pesanan(e){
        console.log(e.target.value);
    }
    render(){
        return(
            <div>
                <h3>Daftar Makanan</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.rubahPesan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.rubahPesan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.rubahPesan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.rubahPesan}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.rubahPesan}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <input type="text" onChange={this.pesanan} placeholder="Masukkan Makanan"></input>
                <h3>Pesanan Anda : {this.state.pesan}</h3>
            </div>
        );
    }
}
export default MenuMakanan;