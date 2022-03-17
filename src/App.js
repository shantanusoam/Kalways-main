import React, { useState } from 'react';
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
import BottomBar from './components/BottomBar';
import PartnerCompnay from './components/PartnerCompnay';
import { ProductsPage } from './pages/ProductsPage';
import { FooterContainer } from './components/FooterSection/FooterSectionElements';
import { FooterContainerBlack } from './CONTAINERS/footer';
import ShipFlight from './pages/shipFlieghtPage';
import ShipFlightPage from './pages/shipFlieghtPage';
import Shipper from './pages/Shipper';
import shipfreight from './components/shipfreight';
import Industries from './components/Industries';
import WorkAtKalwayss from './components/WorkAtKalways';
import Careers from './components/Careers';
import ecommerce from './components/ecommerce';
import KalPower from './components/KalPower';
import CreditApllication from './pages/CreditApllication';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Stickbar />
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>

      <Switch>
        <Route
          exact
          path="/"
          component={Home}
          title="KALWAY - 5PL Logistics & Brokerage"
        />
        <Route exact path="/Contact" component={Contact} title="BigContact" />

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
          component={shipfreight}
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
          component={ecommerce}
          title="Ecomerece"
        />
        <Route
          exact
          path="/CreditApplication"
          component={CreditApllication}
          title="Ecomerece"
        />
        <Route exact path="/KalPower" component={KalPower} title="KalPower" />
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

      <FooterSection />
      {/* <BottomBar></BottomBar> */}
    </Router>
  );
}

export default App;
