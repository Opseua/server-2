import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Páginas: Corretores //
import CorretoresListar from './paginas/CorretoresListar';
import CorretorDetalhar from './paginas/CorretorDetalhar';
import CorretorEditar from './paginas/CorretorEditar';
import CorretorAdicionar from './paginas/CorretorAdicionar';

// Páginas: Formas de pagamento //
import FormasDePagamentoListar from './paginas/FormasDePagamentoListar';
import FormaDePagamentoDetalhar from './paginas/FormaDePagamentoDetalhar';
import FormaDePagamentoEditar from './paginas/FormaDePagamentoEditar';
import FormaDePagamentoAdicionar from './paginas/FormaDePagamentoAdicionar';

// Páginas: Imóveis Comerciais //
import ImoveisComerciaisListar from './paginas/ImoveisComerciaisListar';
import ImovelComercialDetalhar from './paginas/ImovelComercialDetalhar';
import ImovelComercialEditar from './paginas/ImovelComercialEditar';
import ImovelComercialAdicionar from './paginas/ImovelComercialAdicionar';

// Páginas: Imóveis Residenciais //
import ImoveisResidenciaisListar from './paginas/ImoveisResidenciaisListar';
import ImovelResidencialDetalhar from './paginas/ImovelResidencialDetalhar';
import ImovelResidencialEditar from './paginas/ImovelResidencialEditar';
import ImovelResidencialAdicionar from './paginas/ImovelResidencialAdicionar';

// Páginas: Imóveis Residenciais //
import InquilinosListar from './paginas/InquilinosListar';
import InquilinoDetalhar from './paginas/InquilinoDetalhar';
import InquilinoEditar from './paginas/InquilinoEditar';
import InquilinoAdicionar from './paginas/InquilinoAdicionar';




// ROTAS //
function AppServer() {
  return (
    <div id="App" className="App">
      <h1 id="Titulo" className="Titulo">DREAMS IMOBILIÁRIA</h1>
      <BrowserRouter>
        <Routes>

          <Route exact path='/corretores/listar' element={<CorretoresListar />}></Route>
          <Route exact path='/corretor/detalhar/:empid' element={<CorretorDetalhar />}></Route>
          <Route exact path='/corretor/editar/:empid' element={<CorretorEditar />}></Route>
          <Route exact path='/corretor/adicionar' element={<CorretorAdicionar />}></Route>

          <Route exact path='/formas_de_pagamento/listar' element={<FormasDePagamentoListar />}></Route>
          <Route exact path='/forma_de_pagamento/detalhar/:empid' element={<FormaDePagamentoDetalhar />}></Route>
          <Route exact path='/forma_de_pagamento/editar/:empid' element={<FormaDePagamentoEditar />}></Route>
          <Route exact path='/forma_de_pagamento/adicionar' element={<FormaDePagamentoAdicionar />}></Route>

          <Route exact path='/imoveis_comerciais/listar' element={<ImoveisComerciaisListar />}></Route>
          <Route exact path='/imovel_comercial/detalhar/:empid' element={<ImovelComercialDetalhar />}></Route>
          <Route exact path='/imovel_comercial/editar/:empid' element={<ImovelComercialEditar />}></Route>
          <Route exact path='/imovel_comercial/adicionar' element={<ImovelComercialAdicionar />}></Route>

          <Route exact path='/imoveis_residenciais/listar' element={<ImoveisResidenciaisListar />}></Route>
          <Route exact path='/imovel_residencial/detalhar/:empid' element={<ImovelResidencialDetalhar />}></Route>
          <Route exact path='/imovel_residencial/editar/:empid' element={<ImovelResidencialEditar />}></Route>
          <Route exact path='/imovel_residencial/adicionar' element={<ImovelResidencialAdicionar />}></Route>

          <Route exact path='/inquilinos/listar' element={<InquilinosListar />}></Route>
          <Route exact path='/inquilino/detalhar/:empid' element={<InquilinoDetalhar />}></Route>
          <Route exact path='/inquilino/editar/:empid' element={<InquilinoEditar />}></Route>
          <Route exact path='/inquilino/adicionar' element={<InquilinoAdicionar />}></Route>

        </Routes>
      </BrowserRouter>
    </div >
  );

}

export default AppServer;
