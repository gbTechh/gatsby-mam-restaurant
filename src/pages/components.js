import * as React from "react"
import { LayoutHome } from "../components"
import { Button, Text } from "../components/ui"


export default function Components() {

  const handleClick = () => {
    console.log('click')
  }
  return (
    <LayoutHome >
      <Button
        size='sm'
        className='botoncito'
        color='secondary1'
        br='full'
        onClick={handleClick}
      >Boton 1</Button>
      <Button
        size='md'
        className='botoncito'
        color='secondary2'
        br='full'
        onClick={handleClick}
      >Boton 1</Button>
      <Button
        size='l'
        className='botoncito'
        color='error1'
        br='full'
        onClick={handleClick}
      >Boton 1</Button>
      <Button
        size='full'
        className='botoncito'
        color='error1'
        br='full'
        onClick={handleClick}
      >Boton 1</Button>
      <Button
        size='auto'
        className='botoncito'
        color='error1'
        br='full'
        onClick={handleClick}
      >auto</Button>
      <Text size='h1' color='primary1' fw='strong'>Texto aqui</Text>
      <Text size='h1' color='primary2' fw='head'>Texto aqui</Text>
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
