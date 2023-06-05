import { Header } from "./Components/Header"
import { Sidebar } from "./Components/Sidebar"
import { Post, PostType } from "./Components/Post"
import styles from "./App.module.css"
import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/guiraccone.png",
      name: "Guilherme Raccone",
      role: "Admin"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: "link", content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-11 13:47:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://i.pinimg.com/originals/0f/62/05/0f62058ee89389e00e7c6b0af5f7d984.jpg",
      name: "Bruno",
      role: "User"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: "link", content: 'jane.design/doctorc are' },
    ],
    publishedAt: new Date('2022-05-14 13:47:00')
  }
]

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return <Post
              key={post.id}
              post={post}
            />
          })}
        </main>
      </div>
    </>
  )
}

export default App
