document.addEventListener("DOMContentLoaded", function () {
    const videoUrlInput = document.getElementById("video-url");
    const downloadButton = document.getElementById("download-button");
    const downloadOptions = document.getElementById("download-options");
    const formatSelect = document.getElementById("format-select");
    const startDownloadButton = document.getElementById("start-download-button");
    const downloadLink = document.getElementById("download-link");
    const downloadLinkAnchor = document.getElementById("download-link-anchor");

    downloadButton.addEventListener("click", function () {
        const videoUrl = videoUrlInput.value.trim();

        if (isValidUrl(videoUrl)) {
            downloadOptions.style.display = "block";
        } else {
            alert("Please enter a valid YouTube video URL.");
        }
    });

    startDownloadButton.addEventListener("click", function () {
        const selectedFormat = formatSelect.value;
        const videoId = extractVideoId(videoUrlInput.value);

        const downloadUrl = `/download?format=${selectedFormat}&videoId=${videoId}`;
        downloadLinkAnchor.href = downloadUrl;
        downloadLink.style.display = "block";
    });

    function isValidUrl(url) {
        // Implement your URL validation logic here
        // You can use regular expressions or other methods
        return true;
    }

    function extractVideoId(url) {
        // Implement your video ID extraction logic here
        // You need to extract the video ID from the YouTube URL
        return "VIDEO_ID";
    }
});

