import './Best.scss';

import iwatch from '../../assets/iwatch.png';
import best1 from '../../assets/best1.png';
import best2 from '../../assets/best2.png';
import { Button } from '@mui/material';

function Best() {
    const bestData = [
        {
            title: 'Latest and gratest',
            text: 'Smart light bulb pack',
            img: iwatch,
        },
        {
            title: 'Best selling',
            text: 'Smart light bulb pack',
            img: best1,
        },
        {
            title: 'Every product',
            text: 'Smart light bulb pack',
            img: best2,
        },
    ]

    return (
        <section id='best' className='best'>
            <div className="top">
                <b>See the best around here</b>
                <p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
            </div>
            <div className="cards">
                {
                    bestData?.map((e, i) => (
                        <div key={i} className="card">
                            <p>{e.text}</p>
                            <b>{e.title}</b>
                            <Button variant='outlined' className='myBtn'>Explore</Button>
                            <img src={e.img} alt={e.img} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Best