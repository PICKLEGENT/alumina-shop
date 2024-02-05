import { QuestionAnswerProps } from "../types"

const QuestionAnswer = ({ question, answer }: QuestionAnswerProps) => {
    return (
        <div className="my-50 tracking-wider text-red-100">
            <h3 className="mb-25 text-2xl uppercase leading-8">{question}</h3>
            <p className="text-base leading-8">{answer}</p>
        </div>
    )
}

export default QuestionAnswer