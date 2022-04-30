import React from 'react'
import tryCatch from '../../hooks/tryCatch'
import { authTwitter } from '../../services/twitter'

const TwitterLogin = () => {
  const [hasError, setHasError] = React.useState<boolean>()
  const onClick = async () => {
    const [result, error] = await tryCatch({ req: authTwitter() });
    if (error) setHasError(true)
    if (result) {
      setHasError(false)
      console.log('result', result);
    }
  }
  return (
    <section className="">
      <h2>aqui ficara o modal de login no twitter {`${hasError ? 'errrroooo': 'deu bomá}`}</h2>
      <button onClick={onClick}>Logar</button>
    </section>
  )
}
export default TwitterLogin
