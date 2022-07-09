import { RadioGroup } from '@headlessui/react'

export default function Invoice({invoice}) {
    return (
        <RadioGroup.Option
        key={invoice.id}
                value={invoice}
                className={({ active, checked }) =>
                  `
                  ${
                    checked ? 'ring-2 ring-violet-300' : 'bg-white ring-1 ring-gray-200'
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                          <RadioGroup.Description
                            as="div"
                            className={`font-medium text-sm text-gray-900`}
                          >
                           <div className='font-bold'>
                            {invoice.organization_id}
                            </div>

                            <div>
                              ${invoice.amount} CLP
                            </div>

                            <div className={`text-gray-500 justify-self-end`}>
                              Recibida
                            </div>
                          </RadioGroup.Description>
                  </>
                )}
              </RadioGroup.Option>
    )
}
