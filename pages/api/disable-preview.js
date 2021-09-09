export default function handler(req, res) {
    res.clearPreviewData()
    res.end('Privew mode disabled')
}