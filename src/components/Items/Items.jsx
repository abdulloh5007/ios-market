import './Items.scss'

import macbook1 from '../../assets/macbook1.png';
import macbook2 from '../../assets/macbook2.png';
import ipad from '../../assets/ipad.png';
import gwatch from '../../assets/gwatch.png';

function Items() {
    const itemsData = [
        {
            img: macbook1,
            title: 'MacBook Pro 13',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet',
            price: '$ 1,200.00 USD'
        },
        {
            img: gwatch,
            title: 'Smart Galaxy Watch 3',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            price: '$ 199.00 USD'
        },
        {
            img: macbook2,
            title: 'MacBook Air M1',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            price: '$ 1,009.00 USD'
        },
        {
            img: ipad,
            title: 'iPad',
            text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
            price: '$ 610.00 USD'
        },
    ]

    return (
        <section id='items' className='items'>
            <div className="top">
                <b>Save on our most selled items.</b>
                <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            </div>
            <div className="cards">
                {
                    itemsData?.map((e, i) => (
                        <div key={i} className="card">
                            <img src={e.img} alt={e.img} />
                            <div className="txt">
                                <b>{e.title}</b>
                                <p>{e.text}</p>
                                <span>{e.price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Items