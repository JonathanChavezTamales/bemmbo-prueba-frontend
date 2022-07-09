import CreditNoteList from './components/CreditNoteList';
import InvoiceList from './components/InvoiceList';

function App() {
  return (
    <div className="w-full px-4 py-4 mb-10">
      <h1 className="text-3xl font-bold mb-10">Bemmbo</h1>
      <div className="mx-auto w-full max-w-md space-y-10">
       <div>
        <h2 className="text-center font-medium text-lg mb-4">Selecciona una factura</h2>
        <InvoiceList/>
       </div>
       <div>
        <h2 className="text-center font-medium text-lg mb-4">Selecciona una nota de crédito</h2>
        <CreditNoteList/>
       </div>
       <div className='text-center'>
        <button className='bg-violet-600 p-4 text-white font-medium rounded-md' onClick={alert}>Asignar</button>
       </div>
      </div>
    </div>
  );
}

export default App;
