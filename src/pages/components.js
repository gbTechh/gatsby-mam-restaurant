import * as React from "react"
import { LayoutHome } from "../components"
import { Button, Col, Container, Row, Text } from "../components/ui"


export default function Components() {

  const handleClick = () => {
    console.log('click')
  }
  return (
    <LayoutHome >
      <Button
        size='full'
        className='botoncito'
        color='secondary1'
        br='sm'
        onClick={handleClick}
      >Botoncito 1</Button>
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
      <br></br>
      <br></br>
      <br></br>
      <Container className='pd-0'>
        <Row gap='7|t:2|d:4' wrap='wrap' align='center' justify='center'>
          <Col span='2|t:4|d:3'><Button size='full' color='primary1'>btn1</Button></Col>
          <Col span='4|t:2|d:2'><Button size='full' color='primary1'>btn1</Button></Col>
          <Col span='3|t:3|d:4'><Button size='full' color='primary1'>btn1</Button></Col>
          <Col span='3|t:3|d:3'><Button size='full' color='primary1'>btn1</Button></Col>

        </Row>

      </Container>
    </LayoutHome>
  )
}
