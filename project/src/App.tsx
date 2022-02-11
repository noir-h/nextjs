import React from 'react'
import logo from './logo.svg'
import './App.css'
import Basic1 from './components/Basic1'
import Basic2 from './components/Basic2'
import Basic3 from './components/Basic3'
import Basic4 from './components/BasicUseEffect'
import TimerContainer from './components/TimerContainer'
import ApiFetch from './components/ApiFetch'
import UserData from './data.json'
import AppContext from './contexts/AppContext'
import B from './components/B'
import BasicReducer from './components/BasicReducer'
import CompB from './components/CompB'
import Memo from './components/Memo'

import { useReducer } from 'react'

// Json 型推論
type USERS = typeof UserData

// リテラル型
const name = 'hello'

// アノテーション
let username: string = 'hello'
let dummyNum: number = 2
let bool: boolean = true

let array1 = [true, false, true]
let array2 = [0, 'hello', true]

// interfaceはデータ型の宣言
interface NAME {
  firstName: string
  // ?でlastNameがある場合はStringという風に指定可能
  lastName?: string | null
}
let nameObj: NAME = { firstName: 'Yamada', lastName: null }

// define function
const func1 = (x: number, y: number): number => {
  return x + y
}

// Intersection Types: データ型を合体して使う
type PROFILE = {
  age: number
  city: string
}
type LOGIN = {
  username: string
  password: string
}
type USER = PROFILE & LOGIN

const userA: USER = {
  age: 30,
  city: 'Tokyo',
  username: 'xxx',
  password: 'yyy',
}

// Union Types: 変数が受け取れるデータ型を宣言できる
let value: boolean | number
value = true
// value = 'test' //compiled error

// 配列にも要素として取れる型を指定できる
let arrayUni: (number | String)[]
arrayUni = [0, 1, 'hello']
// arrayUni = [0, 1, 'hello', true] //compiled error

// 文字列リテラル型 && UionTypes
let company: 'Facebook' | 'Google' | 'Amazon'
company = 'Google'
// company = 'Apple' //compiled error

// 数値リテラル型 && UionTypes
let memory: 256 | 512
memory = 256
// memory = 12 //compiled error

// typeof: 元の変数のデータ型を継承する
let massage: string = 'Hi'
let massage2: typeof massage
massage2 = 'Hello'

let animal = { cat: 'small cat' }
let newAnimal: typeof animal = { cat: 'big cat' }

// keyof: keyの値しか受け付けない
type KEYS = {
  primary: string
  secondary: string
}
let key: keyof KEYS
key = 'primary'
// key = "mary"; // compiled error

//typeof + keyof: 定義済のobjectのkeyの文字列だけ取れる
// keyofはtypeもしくはinterfaceからしかとれないから定義済のobjectからkeyだけ取るときに使う
const SPORTS = {
  soccer: 'Soccer',
  baseball: 'Baseball',
}
// let keySports: keyof SPORTS // 定義済objectからは取れない
let keySports: keyof typeof SPORTS
keySports = 'soccer'

// enum: 列挙型
// 推奨されていない, uion typesを使う方がいいみたい
enum OS {
  Windows,
  Mac,
  Linux,
}
interface PC {
  id: number
  OSType: OS
}
const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
}
const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
}

// 型の互換性
// 抽象的なstring型のcomp2に代入は可能
const comp1 = 'test'
let comp2: string = comp1

// 具体的なリテラル型のcomp3に抽象的なstring型は代入は不可能
let comp3: string = 'tset'
// let comp4: "test" = comp3; //comiled error

let funcComp1 = (x: number) => {}
let funcComp2 = (x: string) => {}
// funcComp1 = funcComp2; //compiled error

// Generics
interface GEN<T> {
  item: T
}
const gen0: GEN<string> = { item: 'hello' }
// const gen1: GEN = { item: 'hello' } //compiled error
const gen2: GEN1<number> = { item: 3 }
// Generics default
interface GEN1<T = string> {
  item: T
}
const gen1: GEN1 = { item: 'hello' }
interface GEN2<T extends string | number> {
  item: T
}
const gen4: GEN2<string> = { item: 'hello' }
const gen5: GEN2<number> = { item: 3 }
// const gen6: GEN2<boolean> = { item: true } // compiled error

function funcGen<T>(props: T) {
  return { item: props }
}
const gen7 = funcGen<string>('test')
const gen8 = funcGen<string | null>(null)

function funcGen1<T extends string | null>(props: T) {
  return { values: props }
}
const gen9 = funcGen1(null)
// const gen10 = funcGen1(3) //compiled error

interface Props {
  price: number
}
function funcGen3<T extends Props>(props: T) {
  return { value: props.price }
}
const gen11 = funcGen3({ price: 10 })
// アロー関数ver
const funcGen4 = <T extends Props>(props: T) => {
  return { value: props.price }
}

const initialState = 0
// actionはdispatchの引数
const reducer = (currentState: number, action: string): number => {
  switch (action) {
    case 'add_1':
      return currentState + 1
    case 'multiple_3':
      return currentState * 3
    case 'reset':
      return initialState
    default:
      return currentState
  }
}
// 関数にReact.VFCという型を付ける
const App: React.VFC = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider
      value={{ countProvided: count, dispatchProvided: dispatch }}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Basic1 text="noir" />
          {/* <TimerContainer /> */}
          {/* <ApiFetch /> */}
          {/* <B /> */}
          {/* <BasicReducer /> */}
          {/* Count {count}
          <CompB /> */}
          {/* <Memo /> */}
        </header>
      </div>
    </AppContext.Provider>
  )
}

export default App
