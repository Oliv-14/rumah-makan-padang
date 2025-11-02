import Hero from '../component/Hero.jsx';
import BestSeller from '../component/BestSeller.jsx';

function HomePage() {
  return (
    <> {/* Gunakan Fragment (<>) karena kita punya dua komponen level atas */}
      <Hero />
      <BestSeller />
    </>
  );
}

export default HomePage;