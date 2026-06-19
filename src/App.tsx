import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { Events } from "./components/Events";
import { Fleet } from "./components/Fleet";
import { Stats } from "./components/Stats";
import { Nightlife } from "./components/Nightlife";
import { Jets } from "./components/Jets";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Fleet />
      <Destinations />
      <Events />
      <Stats />
      <Nightlife />
      <Jets />
      <Contact />
    </div>
  );
}

export default App;
