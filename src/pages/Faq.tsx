import { Heading, QuestionAnswer } from "../components"

const Faq = () => {
    return (
        <>
            <section className="mx-450 my-50 text-center text-red-100">
                <Heading title={'вопросы и ответы'} />
                <h2 className="text-xl mt-50 mb-25">Ответы на вопросы</h2>
            </section>
            <div className="flex flex-col justify-center items-start mx-400">
                <QuestionAnswer
                    question={'ЧТО ДЕЛАТЬ ЕСЛИ ПРИОБРЕТЕННЫЙ ТОВАР НЕ ПОДОШЕЛ, ИМЕЕТ ДЕФЕКТЫ ИЛИ ПОВРЕЖДЕНИЯ?'}
                    answer={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem officiis, exercitationem dolorum soluta natus fugit nostrum maiores, delectus saepe voluptate maxime odio obcaecati nobis enim unde libero fuga similique voluptatum!'}
                />
                <QuestionAnswer
                    question={'ЧТО ДЕЛАТЬ ЕСЛИ ПРИОБРЕТЕННЫЙ ТОВАР НЕ ПОДОШЕЛ, ИМЕЕТ ДЕФЕКТЫ ИЛИ ПОВРЕЖДЕНИЯ?'}
                    answer={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem officiis, exercitationem dolorum soluta natus fugit nostrum maiores, delectus saepe voluptate maxime odio obcaecati nobis enim unde libero fuga similique voluptatum!'}
                />
            </div>
        </>
    )
}

export default Faq