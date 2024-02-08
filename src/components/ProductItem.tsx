import { CustomButton } from "."

const ProductItem = () => {

    // const productItemArr = {
    //     article: document.getElementById('product-item__article'),
    //     panelWidth: document.getElementsByClassName('product-item__panelWidth'),
    //     layersWidth: document.getElementsByClassName('product-item__layersWidth'),
    //     panelSize: document.getElementsByClassName('product-item__panelSize'),
    //     panelColor: document.getElementsByClassName('product-item__panelColor'),
    //     panelQuantity: document.getElementsByClassName('product-item__panelQuantity'),
    // }

    // const addToCart = () => {
    //     localStorage.setItem('AluminaCart', productItemArr);
    //     console.log(localStorage)
    //     console.log(art)
    // }

    return (
        <>
            <div className='py-25 w-full border-y border-red-100 tracking-wider'>
                <div className='flex justify-between'>
                    <div className='product-item__color-preview flex justify-center items-center w-250 h-250 bg-red-100'>
                        <p className="text-xl">желтый</p>
                    </div>
                    <div className='flex flex-col justify-between ml-200 w-[70%]'>
                        <div className='flex'>
                            <div className='flex'>
                                <div className="font-medium">
                                    <p>Артикул:</p>
                                    <p className='my-50'>Толщина панели:</p>
                                    <p>Толщина слоев:</p>
                                </div>
                                <div className='mx-50 text-red-100'>
                                    <div>
                                        <p id='product-item__article'>fff</p>
                                        <p className='my-50 product-item__panel-width'>FJDJFDK</p>
                                        <p className='product-item__layers-width'>FJDJFDK</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex mx-100'>
                                <div className="font-medium">
                                    <p>Размер панели:</p>
                                    <p className='my-50'>Цвет панели:</p>
                                    <p>Количество:</p>
                                </div>
                                <div className='mx-50 text-red-100'>
                                    <p className='product-item__panel-size'>FJDJFDK</p>
                                    <p className='my-50 product-item__panel-color'>FJDJFDK</p>
                                    <p className='product-item__panel-quantity'>FJDJFDK</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex text-xl'>
                            <p className="font-medium">Цена:</p>
                            <p className='mx-25 text-red-100'>1337 &#8381;</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='my-25 text-lg tracking-wider leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi laudantium quo? Asperiores ipsa a, itaque ea doloremque est illum iure nemo quaerat inventore iusto animi fuga, dicta, incidunt expedita esse officiis quas alias accusamus. Unde minus distinctio atque ea qui. Architecto delectus ipsa modi dolor ex adipisci necessitatibus temporibus.</p>
            <CustomButton title={'добавить'} />
        </>
    )
}

export default ProductItem