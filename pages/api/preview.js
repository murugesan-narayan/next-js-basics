export default function handler(req, res) {
    res.setPreviewData({name: 'Sethu Raman'})
    res.redirect(req.query.redirect)
}