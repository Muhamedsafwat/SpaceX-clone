import {
  Gallery,
  Hero,
  Destinations,
  Missions,
  Suit,
  Vehicles,
  History,
} from "@/sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Destinations />
      <Missions />
      <Suit />
      <Vehicles />
      <History />
    </main>
  );
}
