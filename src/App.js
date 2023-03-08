
import './stylesheet.css';

function App() {
  return (
    <div>
        <nav className="navbar is-black ">
          <div className="navbar-menu">
            <div className="navbar is-black">
              <a href="#Home" className="navbar-item " style={{color: 'white'}}>Home</a>
              <a href="#About" className="navbar-item" style={{color: 'white'}}>About</a>
              <a href="#Education" className="navbar-item" style={{color: 'white'}}>Education</a>
              <a href="#Awards" className="navbar-item" style={{color: 'white'}}>Awards</a>
            </div>
          </div>
        </nav>
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-8 is-vertical is-parent">
                <div className="column ">
                  <h1 className="title is-size-3-tablet-only is-size-3-mobile-only" style={{color: 'aqua', fontSize: '900%'}}>MY PROFILE</h1> 
                  <p style={{color: 'white', fontSize: '200%', textAlign: 'left'}}>Hello, My Name is,</p>
                  <h1 className="subtitle" style={{color: 'white', fontSize: '400%', textAlign: 'left'}}>HEMADRI PERERA</h1>
                  <p style={{color: 'white', fontSize: '200%', textAlign: 'left'}}>UNDERGRADUATE AT UCSC</p>                      
                </div> 
              </div>
              <div className="tile is-parent is-vertical">
                <figure className="image is-by8">
                  <img src="anime.png" alt="profile pic" media="(min-width:40rem)" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <hr />
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child ">
                  <h1 className="title" style={{color: 'aqua', textAlign: 'center', fontSize: '400%'}}>ABOUT ME</h1>
                </div>
                <div className="tile is-child ">
                  <figure className="image is-1by1">
                    <img className="is-rounded" src="MEE.jpg" />
                  </figure>
                </div>
                <div className="tile is-child ">
                  <p style={{textAlign: 'center'}}>Undergraduate</p>
                  <h1 className="title" style={{textAlign: 'center'}}>HEMADRI PERERA</h1>
                </div>
              </div>
              <div className="tile is-parent is-vertical">
                <div className="tile is-child ">
                </div>
                <div className="tile is-child ">
                  <p className="title" style={{textAlign: 'center'}}>I am a first year at university of colombo school of computing studying informations sysyem degree.</p>
                </div>
                <div className="tile is-parent is-horizontal">
                  <div className="tile is-child ">
                    <p className="is-size-4">Name: Hemadri Perera<br />
                      Birthday: 29th January 2002<br />
                      20 y/o<br />
                      Address: Matale. Sri Lanka</p>
                  </div>
                  <div className="tile is-child ">
                    <p className="is-size-4">University: University of Colombo<br />
                      Email: perera2002@gmail.com<br />
                      GitHub: @Perera<br />
                      YouTube: H Perera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <hr />
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child ">
                  <h1 className="title" style={{color: 'aqua', textAlign: 'center', fontSize: '400%'}}>EDUCATION</h1>
                </div>
                <div className="tile is-child ">
                  <figure className="image is-1by1">
                    <img src="GRAD.png" />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent is-vertical">
                <div className="tile is-child ">
                </div>
                <div className="tile is-child ">
                  <ul className="is-size-2">
                    <li>Bachelors's Degree</li>
                    <li>University of Colombo</li>
                    <li>2021 - Present</li>
                  </ul>
                </div>
                <div className="tile is-child ">
                  <ul className="is-size-2">
                    <li>School Education</li>
                    <li>Sri Sangamitta Girls school Matale</li>
                    <li>2002- 2020</li>
                  </ul>
                </div>
                <div className="tile is-child ">
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <hr />
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child ">
                  <h1 className="title" style={{color: 'aqua', textAlign: 'center', fontSize: '400%'}}>PROJECTS</h1>
                </div>
                <div className="tile is-child ">
                  <figure className="image is-1by2">
                    <img src="proj.png" />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent is-vertical">
                <div className="tile is-child ">
                </div>
                <div className="tile is-child ">
                  <p className="is-size-2">cyber security system development for RDH2 COMPANY</p>
                </div>
                <div className="tile is-child ">
                  <p className="is-size-2">
                    Research on cyber bullying
                  </p>
                </div>
                <div className="tile is-child ">
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <hr />
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child ">
                  <h1 className="title" style={{color: 'aqua', textAlign: 'center', fontSize: '400%'}}>AWARDS</h1>
                </div>
                <div className="tile is-child ">
                  <figure className="image is-1by1">
                    <img src="MEDAL.png" />
                  </figure>
                </div>
              </div>
              <div className="tile is-parent is-vertical">
                <div className="tile is-child ">
                </div>
                <div className="tile is-child ">
                  <p className="is-size-2">Best Cyber security planner 2021</p>
                </div>
                <div className="tile is-child ">
                  <p className="is-size-2">
                    Hackathon 2022 runnerup
                  </p>
                </div>
                <div className="tile is-child ">
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <hr />
        <section className="hero is-black is-fullheight">
          <div className="hero-body">
            <div className="tile is-ancestor">
              <div className="tile is-6 is-vertical is-parent">
                <div className="tile is-child ">
                </div>
                <div className="tile is-child ">
                  <p className="is-size-2" style={{textAlign: 'center'}}>GET IN TOUCH WITH ME<br />
                    Matale, Sri Lanka<br />
                    perera2002@gmail.com<br />
                    +94 774563874</p>
                </div>
                <div className="tile is-child ">
                </div>
              </div>
              <div className="tile is-parent is-vertical">
                <div className="tile is-child ">
                  <figure className="image is-1by1">
                    <img src="map.png" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr />
      </div>
  );
}

export default App;
