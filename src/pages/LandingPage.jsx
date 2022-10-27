import Hero from "../components/Hero"
import Header from "../components/Header"
import Section from "../components/Section"

import Footer from "../components/Footer"
import Information from "../components/Information"
import Pricing from "../components/PricingComponent"



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
      <Hero />
      <Section />
      <Information />
      {/* <Testimonial /> */}
      {/* <ContactUs /> */}
      <Pricing />
      <Footer />
      {/* </> */}
    </>

  );
}

export default App;
