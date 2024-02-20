import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Row from './Components/Row/Row';
import requests from './utils/Requests';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row
      title="Netflix Originals"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}
      />
<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
<Footer/>
    </div>
  );
}
export default App;
