import './App.css'
import Navbar from './components/Navbar'
import { navData } from './json'
import Guide from './components/Guide'
import { traincard, hotelcard, globalcard } from './json'
import Recent from './components/Recent'
import { trip, temple, mountain, Man } from './json'
import Destination from './components/Destination';
import { popular, popularCards } from './json';
import NewsLetter from "./components/NewsLetter"
import Places from "./components/Places"
import { PlacesInfo1, PlacesInfo2, PlacesInfo3, PlacesInfo4, PlacesInfo5, PlacesInfo6, } from "./json"
import CTA from './components/CTA'
import Video from './components/video'

function App() {
  return (
    <>
      <Navbar nav={navData} />

      <section className="Search-box"> 
        <CTA /> 
      </section>

      <section className="Destination">
        <div className="Des-title">
          <h3>{popular.heading}</h3>
          <p>{popular.description}</p>
        </div>
        <div className="destination-wrapper">
          <div className="flex">
            {popularCards.map((card, index) => (
              <div className="single-destination" key={index}>
                <Destination img={card.src} title={card.title} places={card.places} />
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="newsletter">
        <NewsLetter />
      </section>

      <section className="places">
          <div className="Des-title">
            <h3>Popular Places</h3>
            <p>Suffered alteration in some form, by injected humour or good day<br /> randomised booth anim 8-bit hella wolf moon beard words.</p>
          </div>
          <div className="flex">
            <div className="single-place">
              <Places img={PlacesInfo1.src} placeName={PlacesInfo1.placeName} cityName={PlacesInfo1.cityName} rating={PlacesInfo1.rating} days={PlacesInfo1.days} cost={PlacesInfo1.cost} />
            </div>

            <div className="single-place">
              <Places img={PlacesInfo2.src} placeName={PlacesInfo2.placeName} cityName={PlacesInfo2.cityName} rating={PlacesInfo2.rating} days={PlacesInfo2.days} cost={PlacesInfo2.cost} />
            </div>

            <div className="single-place">
              <Places img={PlacesInfo3.src} placeName={PlacesInfo3.placeName} cityName={PlacesInfo3.cityName} rating={PlacesInfo3.rating} days={PlacesInfo3.days} cost={PlacesInfo3.cost} />
            </div>
          </div>

          <div className="flex">
            <div className="single-place">
              <Places img={PlacesInfo4.src} placeName={PlacesInfo4.placeName} cityName={PlacesInfo4.cityName} rating={PlacesInfo4.rating} days={PlacesInfo4.days} cost={PlacesInfo4.cost} />
            </div>

            <div className="single-place">
              <Places img={PlacesInfo5.src} placeName={PlacesInfo5.placeName} cityName={PlacesInfo5.cityName} rating={PlacesInfo5.rating} days={PlacesInfo5.days} cost={PlacesInfo5.cost} />
            </div>

            <div className="single-place">
              <Places img={PlacesInfo6.src} placeName={PlacesInfo6.placeName} cityName={PlacesInfo6.cityName} rating={PlacesInfo6.rating} days={PlacesInfo6.days} cost={PlacesInfo6.cost} />
            </div>
          </div>
      </section>

      <section className="travel-area">
        <div className="group">
          <Guide image={traincard.image} heading={traincard.heading} paragraph={traincard.paragraph} />
          <Guide image={hotelcard.image} heading={hotelcard.heading} paragraph={hotelcard.paragraph} />
          <Guide image={globalcard.image} heading={globalcard.heading} paragraph={globalcard.paragraph} />
        </div>
      </section>

      <section className="trips">
        <Recent title={trip.title} />
        <div className="groupes">
          <Recent image={temple.image} heading={temple.heading} paragraph={temple.paragraph} />
          <Recent image={mountain.image} heading={mountain.heading} paragraph={mountain.paragraph} />
          <Recent image={Man.image} heading={Man.heading} paragraph={Man.paragraph} />
        </div>
      </section>

      <section className="play">
        <Video/>
      </section>
    </>
  )
}

export default App