import React                           from 'react'

import { Column, Layout, Text }        from '@design/ui'
import { PlusIcon, TurnedInIcon }      from '@ui/icons' // TODO: LeftArrowIcon, MagnifierIcon

import { Checkbox, Input, PriceInput } from '..'

export default {
  title: 'Компоненты|Поле ввода',
}

export const Size = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Размер</Text>
    </Layout>
    <Layout mt={15} mx={20} maxWidth='400px'>
      <Input size='large' placeholder='Large' />
    </Layout>
    <Layout mt={15} mx={20} maxWidth='400px'>
      <Input size='medium' placeholder='Medium' />
    </Layout>
    <Layout mt={15} mx={20} maxWidth='400px'>
      <Input size='normal' placeholder='Normal' />
    </Layout>
  </Column>
)

export const PrefixAndSuffix = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Префикс и постфикс</Text>
    </Layout>
    <Layout mt={15} mx={20} maxWidth='400px'>
      <Input
        size='normal'
        placeholder='Поле ввода'
        prefix={<TurnedInIcon width={20} height={20} />}
        suffix={<PlusIcon width={20} height={20} />}
      />
    </Layout>
  </Column>
)

export const Additions = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Дополнения</Text>
    </Layout>
    <Layout mt={15} mx={20} maxWidth='400px'>
      <Input size='normal' placeholder='Сайт' addonBefore='https://' addonAfter='.com' />
    </Layout>
  </Column>
)

export const Mask = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Маска</Text>
    </Layout>
    <Layout mt={15} mx={20} maxWidth='400px'>
      <Input
        placeholder='Поле ввода'
        iconLeft={<PlusIcon width={20} height={20} />}
        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      />
    </Layout>
    <Layout mt={15} mx={20} maxWidth='400px'>
      <PriceInput placeholder='0 ₽' />
    </Layout>
  </Column>
)

export const Switch = () => (
  <Column>
    <Layout mt={15} mx={20}>
      <Text fontSize='giant'>Переключатель</Text>
    </Layout>
    <Layout mt={15} mx={20} maxWidth='400px'>
      <Checkbox>Текст</Checkbox>
    </Layout>
  </Column>
)

Size.story = {
  name: 'Размер',
}

PrefixAndSuffix.story = {
  name: 'Префикс и постфикс',
}

Additions.story = {
  name: 'Дополнения',
}

Mask.story = {
  name: 'Маска',
}

Switch.story = {
  name: 'Переключатель',
}
