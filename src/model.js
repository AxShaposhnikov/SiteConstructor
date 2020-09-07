import image from './assets/image.jpg'
import {TitleBlock, ImageBlock, TextBlock, TextColumnsBlock} from './classes/blocks' 
import {css} from './utils'

export const model = [

    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: css({
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        })
        //styles: 'background: linear-gradient(to right, #ff0099, #493240); color: #fff; padding: 1.5rem; text-align: center;'
    }),

    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
    }),

    new TextBlock('This is  another Test Text', {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c); font-weight: bold; padding: 1rem;'
    }),

    new TextColumnsBlock([
        'Приложение на чистом JavaSript без использования библиотек',
        'Соблюдены принципы ООП и SOLID',
        'Создаём UI своими руками'
    ], {
        styles: 'padding: 2rem 0; color: #fff; background: linear-gradient(to bottom, #8e2de2, #4a00e0); font-weight: bold; padding: 1rem;'
    })
]