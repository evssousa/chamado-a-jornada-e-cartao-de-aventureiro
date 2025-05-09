import CartaoDeAventureiro from "./components/CartaoDeAventureiro";
import MensagemInicial from "./components/MensagemInicial";

export default function App() {
  const [classe, setClasse] = useState('Aventureiro')
  const [nivel, setNivel] = useState(1)

  return (
    <div>
      <MensagemInicial nome={'Everson'} />

      <div>
        <h2>Escolha sua Classe:</h2>
        <button onClick={() => setClasse('Guerreiro')}>Guerreiro</button>
        <button onClick={() => setClasse('Mago')}>Mago</button>
        <button onClick={() => setClasse('Curandeiro')}>Curandeiro</button>

        <button onClick={() => setNivel(nivel +=1)}>Subir de Nível</button>
      </div>

      <CartaoDeAventureiro nome={'João'} classe={'Dev Frontend'} nivel={nivel} />
    </div>
  )
}