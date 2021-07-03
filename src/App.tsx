import UseStateComponent from './Hooks/UseStateComponent';
import UseEffectComponent from './Hooks/UseEffectComponent';
function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseEffectComponent />
      <h1>useEffect</h1>
      <UseStateComponent />
    </div>
  );
}

export default App;
