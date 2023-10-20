import "./App.css";
import Card from "./components/Card";



function App() {
  return (
    <>
    <h1 className="bg-orange-400 text-white p-4 rounded-xl mb-4">
      Hello Tailwind CSS and Props!
    </h1>
    <Card username="Subhajeet" btnText="Click Me" />
    
    <Card username="Hitesh" btnText="Visit Me" />

      
    </>
  );
}

export default App;
