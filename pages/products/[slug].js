import {useRouter} from 'next/router'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div>Slug : {slug} </div>
    )
}

export default Post