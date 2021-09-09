import React from 'react'
import Image from 'next/image'

//image can be declared like blow and can be used in image tag like src={img_one}
import img_one from '../public/one.jpg'

/**
 * Image component pre cache the image with expected reduced size.
 * It loads lazily, means page will loaded first then image will get loaded one by one.
 */
function Pets() {
    return (
        <div>
            <Image src={img_one} placeholder='blur' alt='pet' width='280' height='420'/>
            {
                ['One','Two','Three','Four','Five'].map(name => {
                    return <dev key={name}>
                        <Image src={`/${name}.jpg`} alt='pet' width='280' height='420'/>
                    </dev>
                })
            }
        </div>
    )
}

export default Pets
