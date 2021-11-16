import React from 'react'
import DojimaButton from './index'
import { Meta } from '@storybook/react'

export default {
  component: DojimaButton,
  title: 'Components/Button'
} as Meta

export const LightMode: React.FC<{}> = () => {
  return (
    <>
      <DojimaButton
        text='primary contained flex-end'
        color='primary'
        onClick={() => {}}
        justifyContent='flex-end'
      />
      <DojimaButton
        text='secondary space-around outlined'
        color='secondary'
        onClick={() => {}}
        justifyContent='space-around'
        variant='outlined'
      />
      <DojimaButton
        text='success text flex-start'
        justifyContent='flex-start'
        color='success'
        onClick={() => {}}
        variant='text'
      />
      <DojimaButton
        container
        item
        text='error'
        justifyContent='space-between'
        md={6}
        color='error'
        onClick={() => {}}
      />
      <DojimaButton
        container
        item
        text='warning'
        color='warning'
        onClick={() => {}}
        md={6}
      />
    </>
  )
}
