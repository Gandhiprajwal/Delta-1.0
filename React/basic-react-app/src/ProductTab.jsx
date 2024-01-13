import Product from "./Product";

export default function ProductTab() {
  return (
    <>
      <Product title="phone" price={45969}/>
      <Product title="laptop" price={21999}/>
      <Product title="pen"/>
    </>
  );
}
