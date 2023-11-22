
import Card from './card'

export default function Home() {

  const words = [
    'appeared',
    'wit',
    'milk',
    'desk',
    'meet',
    'yonder',
    'hand',
    'grant',
    'believes',
    'obey'
  ]
  return (
    <main>
      <Card words={words.slice(0, 4)} />
      <Card words={words.slice(4, 8)} />
      <Card words={words.slice(8, 10)} />
    </main>
  )
}
