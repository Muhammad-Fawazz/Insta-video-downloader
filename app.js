const url = 'https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/get-info-rapidapi?url=';
const searchButton = document.querySelector(".download");

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'cb39af937amshac358b703f9b3eep1e2094jsnbe63ab916d78',
        'x-rapidapi-host': 'instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com'
    }
};

const fetchData = async (link) => {
    try {
        const response = await fetch(link, options);
        const result = await response.json();
        if (result.download_url) {
            // Create a temporary link to trigger the download
            const tempLink = document.createElement('a');
            tempLink.href = result.download_url;
            tempLink.download = 'video.mp4'; // Filename for the downloaded video
            tempLink.click();
            document.getElementById('message').textContent = 'Downloading video...';
        } else {
            document.getElementById('message').textContent = 'Failed to download URL.';
        }
    } catch (error) {
        console.error(error);
        document.getElementById('message').textContent = 'An error occurred.';
    }
};

searchButton.addEventListener("click", () => {
    let link = document.getElementById("videoUrl").value.trim(); // Use let to modify the value
    if (!link) {
        document.getElementById("videoUrl").placeholder = "Please enter a valid URL";
        return;
    }
    link = url + encodeURIComponent(link); // Encode the URL
    fetchData(link);
});
