import './App.css'

function App() {

  return (
    <main className='content'>
      <div className='card'>
        <div className='image'>
          <img src='/images/illustration-hero.svg' alt="banner-image" />
        </div>
        <div className='info'>
          <h2 className='title'>Order Summary</h2>
          <p className='description'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div className='pricing'>
            <div className='icon-and-detail'>
              <img className='music-icon' src='/images/icon-music.svg' alt="music icon"></img>
              <div className='details'>
                <span className='details-title'>Annual Plan</span>
                <span className='price'>$59.99/year</span>
              </div>
            </div>
            <a className='change-action'>Change</a>
          </div>
          <button className='payment'>Proceed to Payment</button>
          <a className='cancel-action'>Cancel order</a>
        </div>
      </div>
    </main>
  )
}

export default App
