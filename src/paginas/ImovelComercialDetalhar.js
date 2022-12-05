import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImagemCasa from '../img/logo.jpg';


const ImovelComercialDetalhar = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("https://server-2.onrender.com/imovel_comercial/detalhar/" + empid).then((res) => {
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
                <h2>Detalhe imóvel comercial</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h5>ID: {empdata.id}</h5>
                        <h2>Tipo de imóvel: <b>{empdata.tipo_de_imovel}</b></h2>
                        <br></br>

                        <h5>Endereço: {empdata.endereco}</h5>
                        <h5>Salas: {empdata.salas}</h5>
                        <h5>Banheiros: {empdata.banheiros}</h5>
                        <h5>Garagens: {empdata.garagens}</h5>
                        <h5>Tipo de contrato: {empdata.tipo_de_contrato}</h5>
                        <h5>Valor do imóvel: {empdata.valor_do_imovel}</h5>
                        <h5>Valor do condomínio: {empdata.valor_do_condominio}</h5>
                        <br></br>

                        {/* Botão VOLTAR */}
                        <Link to="/imoveis_comerciais/listar" className="btn btn-danger">Voltar</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default ImovelComercialDetalhar;