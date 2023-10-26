import './App.css';
import CountryWrapper from './components/CountryWrapper/CountryWrapper';

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="page-title">Country Search</h1>
        <CountryWrapper />
      </div>
    </div>
  );
}
