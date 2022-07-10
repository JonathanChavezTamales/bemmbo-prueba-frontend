import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment } from 'react';
import CreditNoteList from './components/CreditNoteList';
import InvoiceList from './components/InvoiceList';

function App() {

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState()
  const [selectedCreditNote, setSelectedCreditNote] = useState()

  return (
    <div className="w-full px-4 py-4 mb-10">
      <h1 className="text-3xl font-bold mb-10">Bemmbo</h1>
      <div className="mx-auto w-full max-w-md space-y-10">
       <div>
        <h2 className="text-center font-medium text-lg mb-4">Selecciona una factura</h2>
        <InvoiceList selectedInvoice={selectedInvoice} setSelectedInvoice={setSelectedInvoice}/>
       </div>
       <div>
        <h2 className="text-center font-medium text-lg mb-4">Selecciona una nota de crédito</h2>
        <CreditNoteList selectedCreditNote={selectedCreditNote} setSelectedCreditNote={setSelectedCreditNote} selectedInvoiceId={selectedInvoice && selectedInvoice.id}/>
       </div>
       <div className='text-center'>
        <button className='bg-violet-600 p-4 text-white font-medium rounded-md' onClick={() => setModalOpen(true)}>Asignar</button>
       </div>
      </div>

      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setModalOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Nota de crédito asignada correctamente
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Factura: {selectedInvoice && selectedInvoice.id}
                      Nota de crédito: {}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-violet-500 px-4 py-2 text-sm font-medium text-white hover:bg-violet-600 focus:outline-none"
                      onClick={() => setModalOpen(false)}
                    >
                      Seguir asignando
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

    </div>
  );

}

export default App;
