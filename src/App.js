import React from "react"
import styles from "./App.module.css"
import CharacterEditor from "./components/CharacterEditor"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <div className={styles.shade} />
      <CharacterEditor />
      <Footer />
    </>
  )
}

export default App
