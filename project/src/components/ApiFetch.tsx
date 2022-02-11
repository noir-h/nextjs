import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ApiFetch: React.VFC = () => {
  const [posts, setPosts] = useState<any>([])
  const [id, setId] = useState<number>(1)
  const [clicked, setClicked] = useState<boolean>(true)

  const handlerClicked = () => {
    setClicked(!clicked)
  }
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
  //     setPosts(res.data)
  //   })
  // }, [])

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPosts(res.data)
      })
  }, [clicked])
  return (
    <div>
      <input
        type="number"
        value={id}
        onChange={(eve) => setId(eve.target.valueAsNumber)}
      />
      <button type="button" onClick={handlerClicked}>
        Get post
      </button>
      <br />
      {posts.title}
      {/* <ul>
        {posts.map((post: any) => (
          <li key={post.id}> {post.title} </li>
        ))}
      </ul> */}
    </div>
  )
}

export default ApiFetch
