import CreditNote from './CreditNote';
import { RadioGroup } from '@headlessui/react';

import {MOCK_invoices} from  "../mocks/invoices"

import { useEffect, useState } from "react";

export default function CreditNoteList({selectedCreditNote, setSelectedCreditNote, selectedInvoiceId}){

    const [creditNotes, setCreditNotes] = useState([]);


    useEffect(() => {
        setCreditNotes(MOCK_invoices)
    }, [])


    return(<>
      {selectedInvoiceId && <RadioGroup value={selectedCreditNote} onChange={setSelectedCreditNote}>
        <div className="space-y-2">
        {creditNotes.filter((creditNote) => creditNote.type === 'credit_note' && selectedInvoiceId === creditNote.reference)
          .map((creditNote) => 
              <CreditNote
              creditNote={creditNote}
              />)
          }
        </div>
      </RadioGroup>}
    </>
    )

}