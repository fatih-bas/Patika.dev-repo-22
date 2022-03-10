import "./App.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import NoteList from "./components/NoteList/NoteList";
import Search from "./components/Search/Search"


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Form />
      <NoteList />
    </div>
  );
}

export default App;
