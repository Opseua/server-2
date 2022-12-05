import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImagemCasa from '../img/logo.jpg';


const FormaDePagamentoDetalhar = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://server-2.onrender.com/forma_de_pagamento/detalhar/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                <h2>Detalhe forma de pagamento</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h5>ID: {empdata.id}</h5>
                        <h2>Método: <b>{empdata.metodo}</b></h2>
                        <br></br>

                        <h5>Conta: {empdata.conta}</h5>
                        <h5>Limite de depósito: {empdata.limite_de_deposito}</h5>
                        <br></br>

                        {/* Botão VOLTAR */}
                        <Link to="/formas_de_pagamento/listar" className="btn btn-danger">Voltar</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default FormaDePagamentoDetalhar;