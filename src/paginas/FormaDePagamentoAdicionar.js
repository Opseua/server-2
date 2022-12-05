import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const FormaDePagamentoAdicionar = () => {

    const [id, idchange] = useState("");
    const [metodo, metodochange] = useState("");
    const [conta, contachange] = useState("");
    const [limite_de_deposito, limite_de_depositochange] = useState("");
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { metodo, conta, limite_de_deposito };


        fetch("https://server-2.onrender.com/forma_de_pagamento/adicionar", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Adicionado com sucesso.')
            navigate('/formas_de_pagamento/listar');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>

            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Adicionar forma de pagamento</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label><b>ID</b></label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* OPCAO: Método */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label><b>Método</b></label>
                                            <input required value={metodo} onMouseDown={e => valchange(true)} onChange={e => metodochange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* OPCAO: Conta */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label><b>Conta</b></label>
                                            <input required value={conta} onMouseDown={e => valchange(true)} onChange={e => contachange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    {/* OPCAO: Limite de depósito */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label><b>Limite de depósito</b></label>
                                            <input required value={limite_de_deposito} onMouseDown={e => valchange(true)} onChange={e => limite_de_depositochange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>





                                    {/* Botão SALVAR e VOLTAR */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <br></br>
                                            <button className="btn btn-success" type="submit">Salvar</button>
                                            &nbsp;
                                            <Link to="/formas_de_pagamento/listar" className="btn btn-danger">Voltar</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default FormaDePagamentoAdicionar;