import { QuestionAnswerProps } from '../types'

const QuestionAnswer = ({ question, answer }: QuestionAnswerProps) => {
    return (
        <div className='my-50 '>
            <h3 className='mb-25 text-2xl tracking-widest leading-relaxed uppercase text-red-100'>{question}</h3>
            <p className='text-lg tracking-wider leading-8'>{answer}</p>
        </div>
    )
}

export default QuestionAnswer