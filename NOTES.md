recruiting.api.bemmbo.com/invoices/pending

## TODO

migrate to ts

lint and format

refactorizar app.js, quitar todo ese código de modal y ordenarlo más

que se pueda quitar la selección volviendo a clickear en la opción

testing

extras del challenge

## Notas

La ruta del api da cors, por lo que decidí no perder tanto tiempo en solucionarlo e hice mocks.

Hice un componente para nota de crédito y otro para invoice. A pesar de que pude ponerlo en el mismo componente y simplemente poner una condicional extra en el .filter(), se me hizo mejor decisión hacer componentes separados por si después cambian entre sí. No conozco el contexto total de la diferencia entre ambas, por eso tomé esa decisión rápido.

Pude haber usado el context api para mejor legibilidad, ya que entre los componentes hay props que ensucian el componente y no lo hacen reutilizable, pero ya no alcancé de tiempo y lo dejé así para el demo.