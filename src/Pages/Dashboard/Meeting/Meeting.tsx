import React, { useState } from 'react';
import AddMeeting from './AddMeeting';

const Meeting = () => {
    const [modal, setModal] = useState(false)

    return (
        <div className='mt-20 mx-10'>
            <div className='flex justify-between'>
                {/* <h3 className='font-bold text-2xl text-primary'>New Project</h3> */}
                <label htmlFor="add-meeting" onClick={() => setModal(true)} className='btn bg-accent hover:bg-accent-focus text-white'>+ Create Meeting</label>
            </div>

            <div>
                {
                    modal && <AddMeeting />
                }
            </div>
        </div>
    );
};

export default Meeting;