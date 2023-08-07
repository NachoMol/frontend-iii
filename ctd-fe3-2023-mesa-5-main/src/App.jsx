import styles from './app.module.css'

const productos = [
  {
      "id": 0,
      "nombre": "Macbook Air 13 Chip M1 256gb",
      "imagen": "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
      "precio": "$ 1499.00"
  },
  {
      "id": 1,
      "nombre": "Amazon Echo Dot (4a Gen.)", 
      "imagen": "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
      "precio": "$ 14.99"
  },
  {
      "id": 2,
      "nombre": "Cámara IP Inalámbrica 360°",
      "imagen": "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
      "precio": "$ 39.00"
  },
  {
      "id": 3,
      "nombre": "CERRADURA DIGITAL INTELIGENTE FORTEZZA ZIGBEE",
      "imagen": "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
      "precio": "$ 99.00"
  }
]

function App() {
  return (
    <>
    <div>
      <h1>Productos</h1>
      {productos.map((e)=> {
        return(
          <div className={styles.container}>
          <ul key={e.id} className={styles.products}>
          <li className={styles.product}>
            <h2>{e.nombre}</h2>
            <img src={e.imagen} alt="imagen" />
            <h3 className= {styles.price}>{e.precio}</h3>
          </li>
          </ul>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;