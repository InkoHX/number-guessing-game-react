import { NextPage } from 'next'
import React from 'react'

const Page: NextPage = () => {
  const [correctCount, setCorrectCount] = React.useState(0)
  const [hitCount, setHitCount] = React.useState(0)
  const targetNumbers = React.useMemo(() => [...Array(5)].map(() => Math.round(Math.random() * 10)), [correctCount])

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputNumbers = [...event.target.value].map(value => Number.parseInt(value))

    if (inputNumbers.length > targetNumbers.length) return

    const hitCount = inputNumbers.filter(value => targetNumbers.includes(value)).length

    if (hitCount === targetNumbers.length) {
      setCorrectCount(value => value + 1)
      setHitCount(0)
      event.target.value = ''
    } else {
      setHitCount(hitCount)
    }
  }

  return (
    <>
      <p>正解数: {correctCount}</p>
      <p>数当たり: {hitCount}</p>
      <label>
        回答:
        <input type='text' maxLength={5} autoComplete='off' onChange={inputHandler} />
      </label>
    </>
  )
}

export default Page
