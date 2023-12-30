import Link from "next/link";

export default function NotFound() {
  return (
    <div>
        <h2>
            404 - Not Found
        </h2>
        <p>
            Desculpe mas a página que você está procurando não existe.
        </p>
        <Link href="/">
            Voltar para a página inicial
        </Link>
    </div>
  )
}
