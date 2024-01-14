function doSomething(){
    console.log("Hello, its me!");
}

export default function Button() {
  return (
    <div>
      <button onClick={doSomething}> Click me!</button>
      <p onMouseOver={doSomething}>This para is for event demo</p>
    </div>
  );
}
