import Hero from '../components/Hero';
import Header from '../components/Header';
import Section from '../components/Section';
import Testimonial from '../components/Testimonial';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Pricing from '../components/PricingComponent';

// const theme = createTheme({
//   typography: {
//     fontFamily: [
//       'Poppins',
//       'sans-serif',
//     ].join(','),
//   },});

function App() {
  return (
    <>
      {/* <> */}
      {/* <CssBaseline /> */}
      <Header />

      <Pricing />
      <Footer />
      {/* </> */}
    </>
  );
}

export default App;
