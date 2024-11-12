// Function to trigger file download
function downloadFile() {
    // Provide the link to the file in your GitHub repository
    const fileUrl = "https://github.com/Supr-Corp/admine/raw/main/app.exe";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "AdMiner App.exe";
    a.click();

    // Show the thank you page after downloading
    document.querySelector('body').style.display = 'none'; // Hide the main content
    document.getElementById('thanks-page').style.display = 'block'; // Show thank you page
}
