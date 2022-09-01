/* ===== IMPORTACIONES Y EXPORTACIONES ===== */

/*En este caso voy a importar una interface. A la misma se le comenta "export" antes
  de interface y asi ya se puede exportar. En al archivo que la recive hay que importarla */
  import { Producto, calculaISV } from "./5-desestructuracion-obj";

  const carritoCompras: Producto[] = [
      {
          desc: 'Telefono 1',
          precio: 150
      },
      {
          desc: 'Telefono 2',
          precio: 225
      }
  ];
  
  const [total, isv] = calculaISV(carritoCompras);
  
  console.log('ISV: ', isv);
  console.log('Total: ', total);