import { ReactLenis } from 'lenis/react';
import { EraEarlyCSS, EraFarFuture, EraModern, EraNearFuture, EraResponsive, EraWeb1, EraWeb2 } from './components/Eras';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <ReactLenis root>
      <Navigation />
      <main className="w-full bg-black overflow-x-hidden">
        <EraWeb1 />
        <EraEarlyCSS />
        <EraWeb2 />
        <EraResponsive />
        <EraModern />
        <EraNearFuture />
        <EraFarFuture />
      </main>
    </ReactLenis>
  );
}
