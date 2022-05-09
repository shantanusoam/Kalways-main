import React, { useState, useEffect } from 'react';
import client from './client';
import './App.css';
import Stickbar from './components/Stickbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import FooterSection from './components/FooterSection';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/about';
import Contact from './pages/contact';
import Products from './pages/Products';
// import BottomBar from './components/BottomBar';
// import PartnerCompnay from './components/PartnerCompnay';
import { ProductsPage } from './pages/ProductsPage';
// import { FooterContainer } from './components/FooterSection/FooterSectionElements';
// import { FooterContainerBlack } from './CONTAINERS/footer';
// import ShipFlight from './pages/shipFlieghtPage';
import ShipFlightPage from './pages/shipFlieghtPage';
import Shipper from './pages/Shipper';
import { Shipfreight } from './components/shipfreight';
import Industries from './components/Industries';
import WorkAtKalwayss from './components/WorkAtKalways';
import Careers from './components/Careers';
import Ecommerce from './components/ecommerce';
import KalPower from './components/KalPower';
import CreditApllication from './pages/CreditApllication';
import Blog from './components/Blog';
import SinglePost from './components/SinglePost';
import useLocalStorageState from './localStorageHook/index';
import Error from './components/Error';
// import LocalStorageFunction from './localStorageHook/localStotragefunction';
// function Setposts(data) {
//   var name = data[0].title;
//   console.log(`inside setposts ${data}`);
//   data.map((pos) => {
//     client
//       .fetch(
//         `*[title == ${pos.title} ]{

//       content[]

//       }`
//       )
//       .then((data) => {
//         console.log(`inside setposts ${pos.title} ${data[0].content}`);
//         LocalStorageFunction(pos.title, data[0].content);
//       })
//       .catch(console.error);
//   });
// }

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useLocalStorageState('Kalway');
  useEffect(() => {
    client
      .fetch(
        `*[title == 'Kalway' ]{
        Timing_2,
        Timing_1,
        logo,
        phone,
        Email,
        Address,
        }`
      )
      .then((data) => setName(data))
      .catch(console.error);
  }, [setName]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      {name ? (
        <>
          <Stickbar />
          <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
          <Navbar
            toggle={toggle}
            logo={name[0].logo.asset._ref}
            Phoneno={name[0].phone}
          ></Navbar>

          <Switch>
            <Route exact path="/" title="KALWAY - 5PL Logistics & Brokerage">
              <Home Phoneno={name[0].phone} />
            </Route>

            <Route
              exact
              path="/Contact"
              component={Contact}
              title="BigContact"
            />

            <Route exact path="/About" component={About} title="BigAbout" />

            <Route
              exact
              path="/Product"
              component={Products}
              title="KALWAYProduct"
            />
            <Route
              exact
              path="/services"
              component={ProductsPage}
              title="Inventory"
            />
            <Route
              exact
              path="/Carriers"
              component={ShipFlightPage}
              title="Inventory"
            />
            <Route exact path="/Shippers" component={Shipper} title="Shipper" />
            <Route
              exact
              path="/shipfreight"
              component={Shipfreight}
              title="Inventory"
            />
            <Route
              exact
              path="/industries"
              component={Industries}
              title="Inventory"
            />
            <Route
              exact
              path="/WorkAtKalway"
              component={WorkAtKalwayss}
              title="WorkAtKALWAY"
            />
            <Route exact path="/Careers" component={Careers} title="Careers" />
            <Route
              exact
              path="/Ecommerce"
              component={Ecommerce}
              title="Ecomerece"
            />
            <Route
              exact
              path="/CreditApplication"
              component={CreditApllication}
              title="Ecomerece"
            />
            <Route path="/blog/:slug" children={<SinglePost />}></Route>
            <Route exact path="/blogs" title="Ecomerece">
              <Blog />
            </Route>

            <Route
              exact
              path="/KalPower"
              component={KalPower}
              title="KalPower"
            />
            <Route exact path="*" title="Error">
              <Error />
            </Route>
          </Switch>

          {/* <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Switch> */}
          {/* <PartnerCompnay></PartnerCompnay> */}
          {/* <PartnerCompnay></PartnerCompnay> */}

          <FooterSection posts={name} />
        </>
      ) : null}

      {/* <BottomBar></BottomBar> */}
    </Router>
  );
}

export default App;
