import CartaoDeAventureiro from "./components/CartaoDeAventureiro";
import MensagemInicial from "./components/MensagemInicial";

export default function App() {
  return (
    <div>
      <MensagemInicial nome={'Everson'} />
      <CartaoDeAventureiro nome={'João'} classe={'Dev Fronend'} nivel={1} />
    </div>
  )
}