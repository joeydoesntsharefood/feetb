import { useState } from 'react'
import styles from '../styles/Home.module.css'

const constants: Array<{ question: string, answer: number, options: Array<string> }> = [
  {
    answer: 0,
    question: 'Teste 1',
    options: [
      'teste - a',
      'teste - b',
      'teste - c',
      'teste - d',
    ]
  }
]

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const { answer, options, question } = constants[questionIndex ?? 0]
  const [error, setError] = useState<boolean>(false)

  function selectAnswer (index: number) {
    if (answer === index) setQuestionIndex(prev => prev + 1)
    else setError(prev => !prev)
  }

  return (
    <div className={styles.container}>
      { !error &&
        <>
          <h1 className='question' >{ question }</h1>
          <div className="options">
            {
              options?.map((option, index) => <button  onClick={() => selectAnswer(index)}>{ option }</button>)
            }
          </div>
        </>
      }
    </div>
  )
}
