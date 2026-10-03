const copyButton = document.getElementById("copyIP");

copyButton.addEventListener("click", async () => {
    const serverIP = "play.test1mc.com";

    await navigator.clipboard.writeText(serverIP);

    copyButton.textContent = "IP COPIED!";

    setTimeout(() => {
        copyButton.textContent = "COPY SERVER IP";
    }, 1500);
});