import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export default function Article() {
  const { id } = useParams()
  const url = "http://localhost:3000/articles/" + id

  const navigate = useNavigate()
  const { data: article, isPending, error } = useFetch(url)

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/')
      }, 2000)
    }
  }, [error, navigate])

  return (
    <div>
      {isPending && <div> Carregando...</div>}
      {error && <div> {error} </div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>por {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  )
}
