import Product from "./Product";

export default function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItem: "center"
  };
  return (
    <div style={styles}>
      {/* <Product title="phone" price={45969}/>
      <Product title="laptop" price={21999}/>
      <Product title="pen" price={20}/> */}
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title="Petronics" idx={3}/>
    </div>
  );
}
