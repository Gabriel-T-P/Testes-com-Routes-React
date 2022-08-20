import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

// Styles
import './Home.css'

export default function Home() {
  const { data: articles, isPending, error } = useFetch('http://localhost:3000/articles')

  return (
    <div className="home">

      {isPending && <div>Carregando...</div>}
      {error && <div> {error} </div>}
      {articles && articles.map((article) => (
        <div className='card' key={article.id}>
          <h3> {article.title} </h3>
          <p> {article.author} </p>
          <Link to={`/articles/${article.id}`}>Saiba mais...</Link>
        </div>
      ))}

    </div>

  )
}
