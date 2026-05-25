function Counter() {
  const [count, setCount] = useState(0);

  const sayHello = () => {
    console.log("Hello");
  };

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
    </>
  );
}
export default Counter