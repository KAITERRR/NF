const express = require('express');
const bodyParser = require('body-parser');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000; // Change this to your desired port

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/download', async (req, res) => {
    const format = req.query.format;
    const videoId = req.query.videoId;

    if (format === 'mp4' || format === 'webm') {
        try {
            const info = await ytdl.getInfo(videoId);
            const videoTitle = info.videoDetails.title;

            res.header('Content-Disposition', `attachment; filename="${videoTitle}.${format}"`);
            ytdl(videoId, { format }).pipe(res);
        } catch (error) {
            res.status(500).send('Error generating download link.');
        }
    } else {
        res.status(400).send('Invalid format requested.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
