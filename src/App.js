import { ItemContext } from './context/ItemContext';
import Header from './components/header';
import Form from './components/form';
import { List } from "./components/List";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ItemContext>
      <Header />
      <Form />
      <List />
      <Footer />
    </ItemContext>
  );
}
export default App;