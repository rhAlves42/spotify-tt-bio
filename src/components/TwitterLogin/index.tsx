import React from 'react'
import { loginTwitter } from '../../services'

const TwitterLogin = () => {
  const [hasError, setHasError] = React.useState<boolean>()
  const onClick = async () => await loginTwitter()
  return (
    <section className="">
      <h2>
        aqui ficara o modal de login no twitter{' '}
        {`${hasError ? 'errrroooo' : 'deu bomá'}`}
      </h2>
      <button onClick={onClick}>Logar</button>
    </section>
  )
}
export default TwitterLogin
