import "./App.css";
import { Search } from "./components/Atividade/Search";
// import { Requisicao } from "./components/Revisando/Req";
// import { Nome } from "./components/Nome";
// import { Title } from "./components/Title";
// import { Subtitle } from "./components/Subtitle";
// import { UpperCase } from "./components/Uppercase";

// import { CardReq } from "./components/Req";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search></Search>
        {/* <Requisicao></Requisicao> */}
        {/* <Nome />
        <Title text="Gui" />
        <Title text="Pan" />
        <Title text="Pluto" />
        <Title text="Frida" />
        <Subtitle>Sim</Subtitle>
        <Subtitle>Não</Subtitle>
        <Subtitle>Talvez</Subtitle>
        <UpperCase recebido="lol" />
        <CardReq /> */}
      </header>
    </div>
  );
}

export default App;
