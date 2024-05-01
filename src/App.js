import { useState } from "react";
import Header from './component/header';
import Form from './component/form';
import { List } from "./component/List";
import { Footer } from "./component/Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleitems(item) {
    setItems(items => [...items, item])
  }
  function handleRemoveItems(id) {
    setItems(items => items.filter((item) => item.id !== id))
  }
  function handleUpdateItems(id) {
    setItems(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }
  function clearALL() {
    setItems([])
  }
  return (
    < >
      <Header />
      <Form onAddItems={handleitems} />
      <List items={items} onRemoveItems={handleRemoveItems} onUpdateValue={handleUpdateItems} onClearAll={clearALL} />
      <Footer items={items} />
    </>
  );
}
export default App;