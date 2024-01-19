const products = [
    { title: 'Lahana', isFruit: false, id: 1},
    { title: 'Sarımsak', isFruit: false, id: 2},
    { title: 'Elma', isFruit: true, id: 3},
  ];
  
  export default function ShoppingList() {
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'red' : 'black',
        //   background: product.id=1 ? 'black' : 'red'
        }}
      >
        {product.title}
        {product.isFruit ? ' bir meyvedir.' : ' bir sebzedir.'}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }