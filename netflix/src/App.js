import './App.css';
import Row from './components/Row';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div >
      <Nav/>
      <Banner/>
      <Row isPoster={true} title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Trending' fetchUrl={requests.fetchTrending}/>
      <Row title='Top rated' fetchUrl={requests.fetchTopRated}/>
      <Row title='Action' fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentary' fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
