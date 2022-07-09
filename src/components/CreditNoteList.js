import CreditNote from './CreditNote';
import { RadioGroup } from '@headlessui/react';

import {MOCK_invoices} from  "../mocks/invoices"

import { useEffect, useState } from "react";

export default function CreditNoteList(){

    const [creditNotes, setCreditNotes] = useState([]);
    const [selectedCreditNote, setSelectedCreditNote] = useState();


    useEffect(() => {
        setCreditNotes(MOCK_invoices)
    }, [])


    return(<RadioGroup value={selectedCreditNote} onChange={setSelectedCreditNote}>
        <div className="space-y-2">
        {creditNotes.filter((creditNote) => creditNote.type === 'credit_note')
          .map((creditNote) => 
              <CreditNote
              creditNote={creditNote}
              />)
          }
        </div>
      </RadioGroup>
    )

}