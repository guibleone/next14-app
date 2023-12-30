import Image from 'next/image'

export default function AboutPage() {
  return (
    <div>
      <Image src="/about.png" alt='Sobre imagem' width={200} height={200} />
    </div>
  )
}
