import { Flex, Spacer, Container, Button, Heading, Text } from '@chakra-ui/react'
import style from './style.module.scss';

interface ComponentUIProps {
  children: React.ReactNode
  className?: string
}

function ContainerUI(props: ComponentUIProps) {
  const { children } = props;
  return <Container maxW={1200}>{children}</Container>
}

function ButtonUI(props: ComponentUIProps) {
  const { children, className } = props;
  return <Button className={`${style.btn} ${className}`}>{children}</Button>
}

export {
  Flex,
  Spacer,
  ContainerUI as Container,
  ButtonUI as ButtonDark,
  Button,
  Heading,
  Text,
}
