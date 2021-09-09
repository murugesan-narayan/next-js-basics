import React from 'react'
import {useRouter, userRouter} from 'next/router'

/**
 * This is catch all route. which catches anythying under docs.
 */
function Doc() {
    const router = useRouter()
    const {params = []} = router.query
    console.log(params)
    
    if (params.length === 2) {
        return (    
            <div>
                <div>Viewing docs for feature {params[0]} and Concept {params[1]}</div>
            </div>
        )
    } else if (params.length === 1){
        return <div>Viewing docs for feature {params[0]}</div>
    } else {
        return <div>Doc Page {params.map(a=>a+'/')}</div>
    }
}

export default Doc
