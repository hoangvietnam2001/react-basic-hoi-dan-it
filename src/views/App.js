import logo from './logo.svg';
import './App.scss';
// import MyComponent from './Example/MyComponent';
import FormComponent from './Example/FormComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HELLO GUYS ( I AM HOANG NAM {':>>>'})
        </p>
        <div>
          <FormComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
