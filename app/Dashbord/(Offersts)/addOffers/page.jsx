import React from 'react'
import AddOffersforms from '../../../../components/Offers/addOffersforms'
import { cairo100,cairo200 } from '../../../../fonts'
const page = () => {
    return (
        <div>
            <div className={`container mx-auto ${cairo100.className} ${cairo200.className} m-9`}>
                <div className='text-right p-6 rounded-lg shadow-md'>
                    <AddOffersforms />
                </div>
            </div>
        </div>
    )
}

export default page