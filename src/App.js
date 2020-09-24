import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, FormGroup, Row, Col, Button, Input } from 'reactstrap';
import NumberFormat from 'react-number-format';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hargaItem: "",
            qty: "",
            totalTransfer: "",
            hargaBeliPerItem: "",
            dijual: "",
            keuntungan: ""
        }
    }

    btnhandelClick = () => {
        const val = this.state;
        const hbp = val.totalTransfer / val.qty;
        this.setState({
            hargaBeliPerItem: hbp,
            keuntungan: val.dijual - hbp
        });
    }

    onChangeHandel = (e, f) => {
        const { formattedVal, value } = e;
        let data = { [f]: value }
        this.setState(data)
        setInterval(() => {
            const hbp = this.state.totalTransfer / this.state.qty;
            this.setState({
                hargaBeliPerItem: hbp,
                keuntungan: this.state.dijual - hbp
            });
        }, 200);

    }

    render() {
        const field = this.state
        return (
            <Container className="mt-5 mb-5">
                <h2 className="mb-5"> Shop<span className="" style={{ color: 'rgb(215, 4, 215)', fontFamily: " 'Great Vibes', cursive" }}>Sum</span></h2>
                <Row>
                    <Col md="12">
                        <form>
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label>Harga/Item</label>
                                        <NumberFormat placeholder="masukan harga item dari toko" id="hargaItem" customInput={Input} value={field.hargaItem} thousandSeparator={true} onValueChange={(values) => this.onChangeHandel(values, "hargaItem")} />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label>Qty</label>
                                        <NumberFormat placeholder="jumlah item yang anda pesan" id="qty" onValueChange={(values) => this.onChangeHandel(values, "qty")} customInput={Input} value={field.qty} thousandSeparator={true} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label>Total Transfer</label>
                                        <NumberFormat placeholder="total sudah termasuk ongkir" id="totalTransfer" onValueChange={(values) => this.onChangeHandel(values, "totalTransfer")} customInput={Input} value={field.totalTransfer} thousandSeparator={true} />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label>Dijual</label>
                                        <NumberFormat placeholder="item yang mau dijual" id="dijual" onValueChange={(values) => this.onChangeHandel(values, "dijual")} customInput={Input} value={field.dijual} thousandSeparator={true} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label>Harga Beli/Item + Ongkir</label>
                                        <NumberFormat prefix={"Rp "} disabled={true} id="hargaBeliPerItem" onValueChange={(values) => this.onChangeHandel(values, "hargaBeliPerItem")} customInput={Input} value={field.hargaBeliPerItem} thousandSeparator={true} />
                                    </FormGroup>
                                </Col>
                                <Col sm="12" md="6">
                                    <FormGroup>
                                        <label>Keuntungan</label>
                                        <NumberFormat disabled={true} prefix={"Rp "} id="keuntungan" onValueChange={(values) => this.onChangeHandel(values, "keuntungan")} customInput={Input} value={field.keuntungan} thousandSeparator={true} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </form>

                        <Button className="btn-block" onClick={this.btnhandelClick} color="primary" >Simpan</Button>
                    </Col>
                </Row>
            </Container>
        )
    };
}

export default App;
