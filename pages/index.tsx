import { number } from 'prop-types'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

type translate = Record<number, 'A - ' | 'B - ' | 'C - ' | 'D - '>

function Steps ({ total, current } : { total: number, current: number }) {
  return (
    <div className='steps'>
      <div className='circle'></div>
    </div>
  )
}

const constants: Array<{ question: string, answer: number, options: Array<string> }> = [
  {
    answer: 0,
    question: 'Teste 1',
    options: [
      'teste',
      'teste',
      'teste',
      'teste',
    ]
  }
]

const translateIndex: translate = {
  0: 'A - ',
  1: 'B - ',
  2: 'C - ',
  3: 'D - '
}

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const { answer, options, question } = constants[questionIndex ?? 0]
  const [error, setError] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)

  function selectAnswer (index: number) {
    if (answer === index) {
      if (constants.length === (questionIndex + 1)) setSuccess(prev => !prev)
      else setQuestionIndex(prev => prev + 1)
    }
    else setError(prev => !prev)
  }

  return (
    <div className={styles.container}>
      { (!error && !success) &&
        <>
          <h1 className='question' >{ question }</h1>
          <div className="options">
            {
              options?.map((option, index) => <button  onClick={() => selectAnswer(index)}>{ translateIndex[index] + option }</button>)
            }
          </div>
        </>
      }
      { success &&
        <>
          <h1 style={{ color: 'white'}}>Final</h1>
        </>
      }
      { error &&
        <h1 style={{ color: 'white'}}>Error</h1>
      }
      <Steps current={0} total={0} />
    </div>
  )
}
