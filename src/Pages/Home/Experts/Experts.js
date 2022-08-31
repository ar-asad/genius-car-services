import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'will Smith', img: expert1 },
        { id: 2, name: 'Sangakara', img: expert2 },
        { id: 3, name: 'Michel Stark', img: expert3 },
        { id: 4, name: 'Sean Williams', img: expert4 },
        { id: 5, name: 'Andre Russel', img: expert5 },
        { id: 6, name: 'Pat Cummins', img: expert6 }
    ]
    return (
        <div id='expert' className='container'>
            <h1 className='text-primary text-center mt-5'>Ours Experts</h1>
            <div className='row g-5'>
                {
                    experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }
            </div>

        </div>
    );
};

export default Experts;