import React from 'react'
import {useRouter} from 'next/router'
function Review() {
    const router = useRouter()
    const {productId, reviewId} = router.query
    return (
        <div>
            Review {reviewId} for {productId}
        </div>
    )
}

export default Review
