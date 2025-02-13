
import "@fontsource/open-sans";
// importiamo i components
import Header from './components/header.Jsx';
import Main from './components/Main.Jsx';
import Footer from './components/Footer.Jsx';

import './App.css'


export default function App() {
  const navLinks = [
    { id: 1, text: "CHARACTERS", url: "#", current: false },
    { id: 2, text: "COMICS", url: "#", current: false },
    { id: 3, text: "MOVIES", url: "#", current: true },
    { id: 4, text: "TV", url: "#", current: false },
    { id: 5, text: "GAMES", url: "#", current: false },
    { id: 6, text: "COLLECTIBLES", url: "#", current: true },
    { id: 7, text: "VIDEOS", url: "#", current: false },
    { id: 8, text: "FANS", url: "#", current: true },
    { id: 9, text: "NEWS", url: "#", current: false },
    { id: 10, text: "SHOP", url: "#", current: true }
  ];

  return (
    <>
      <Header appNavLinks={navLinks} />
      <Main />
      <Footer />
    </>
  )
}









