import Invoice from './Invoice';
import { RadioGroup } from '@headlessui/react';

import {MOCK_invoices} from  "../mocks/invoices"

import { useEffect, useState } from "react";

export default function InvoiceList({selectedInvoice, setSelectedInvoice}){

    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        setInvoices(MOCK_invoices)
    }, [])

    return(
        <RadioGroup value={selectedInvoice} onChange={setSelectedInvoice}>
          <div className="space-y-2">
          {invoices.filter((invoice) => invoice.type === 'received')
            .map((invoice) => 
                <Invoice
                invoice={invoice}
                />)
            }
          </div>
        </RadioGroup>
    )

}