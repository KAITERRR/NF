app.get('/download', async (req, res) => {
    const format = req.query.format;
    const videoId = req.query.videoId;

    if (format === 'mp4' || format === 'webm') {
        try {
            const info = await ytdl.getInfo(videoId);
            const videoTitle = info.videoDetails.title;

            res.header('Content-Disposition', `attachment; filename="${videoTitle}.${format}"`);
            res.header('Content-Type', 'video/' + format);
            ytdl(videoId, { format }).pipe(res);
        } catch (error) {
            res.status(500).send('Error generating download link.');
        }
    } else {
        res.status(400).send('Invalid format requested.');
    }
});

        }
    } else {
        res.status(400).send('Invalid format requested.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
