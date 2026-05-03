import Card from "./components/Card";
import languages from "./data/languages.js";
import "./index.css";

function App() {
  return (
    <>
      {
        languages.map(languages => {
          return <Card key= {languages.id}
            buttonTitle= {languages.title}
            buttonContent= {languages.description}
          />
        })
      }
    </>
  );
}
export default App;
