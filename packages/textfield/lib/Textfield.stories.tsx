import React from 'react'
import { Meta } from '@storybook/react'
import DojimaTextfield from './index'

export default {
  component: DojimaTextfield,
  title: 'Components/Textfield'
} as Meta

export function Lightmode() {
  return <DojimaTextfield label='primary' type='text' />
}
