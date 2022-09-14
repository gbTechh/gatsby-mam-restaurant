import * as React from "react"
import { LayoutHome } from "../components"
import { Button, Text } from "../components/ui"


export default function Homepage() {

  const handleClick = () => {
    console.log('click')
  }
  return (
    <LayoutHome >
      <Button
        className='botoncito'
        color='secondary1'
        br='full'
        onClick={handleClick}
      >Boton 1</Button>
      <Text size='h1' color='primary1' fw>Texto aqui</Text>
      <Text size='h1' color='primary2'>Texto aqui</Text>
      <Text size='h2' color='secondary1'>Texto aqui</Text>
      <Text size='h2' color='secondary2'>Texto aqui</Text>
      <Text size='h3' color='warning1'>Texto aqui</Text>
      <Text size='h3' color='warning2'>Texto aqui</Text>
      <Text size='h4' color='error1'>Texto aqui</Text>
      <Text size='h4' color='error2'>Texto aqui</Text>
      <Text size='base'>Texto aqui</Text>
      <Text size='small'>Texto aqui</Text>
    </LayoutHome>
  )
}
