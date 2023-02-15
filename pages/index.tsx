import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import QueryCard from '../components/QueryCard'
import queries from '../lib/queries.json'
import { insertLineBreaks } from '../lib/helpers'
import searchIcon from '../lib/icons/search-interface-symbol.png'
import close from '../lib/icons/close.png'
import DisplayResults from '../components/DisplayResults'
import Thumbs from '../components/Thumbs'
import Header from '../components/Header'



const inter = Inter({ subsets: ['latin'] })

export type state = {
  prompt: string
  searching: boolean
  querying: boolean
  SQL: string
  data: any[]
  thumbs: "up" | "down" | null
}

export type store = [state, Dispatch<SetStateAction<state>>]


const defaultState = {
  prompt: '',
  searching: false,
  querying: false,
  SQL: '',
  data: [],
  thumbs: null
}

export default function Home(test:any) {

  return (
    <>
      <Head>
        <title>Easy Query</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header  />
    </>
  )
}
