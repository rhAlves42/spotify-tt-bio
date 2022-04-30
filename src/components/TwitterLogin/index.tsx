import React from 'react'
import { authTwitter } from '../../services/twitter'

const TwitterLogin = () => {
  const onClick = () => {
    authTwitter()
  }
  return (
    <section className="">
      <h2>aqui ficara o modal de login no twitter</h2>
      <button onClick={onClick}>Logar</button>
    </section>
  )
}
export default TwitterLogin
