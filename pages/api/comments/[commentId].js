import { comments } from "../../../data/comments";

export default function handler(req, res) {
    const {commentId} = req.query
        //console.log(commentId)
    if (req.method === 'GET') {
        const comment = comments.find((comment)=> comment.id == commentId)
        //console.log(comments)
        res.status(200).json(comment)
    } else if (req.method === 'DELETE') {
        const ind = comments.findIndex((comment) => comment.id == commentId)
        const deleted = comments.splice(ind, 1)
        //console.log(deleted[0])
        res.status(200).json(deleted[0])
    }
}