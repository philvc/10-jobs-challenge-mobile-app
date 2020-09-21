function tryShare(title: string, text: string, url: string) {
    try {
        navigator.share({ title, text, url })
    } catch (error) {
        navigator.clipboard.writeText(url).then(() => alert('Share link copied to clipboard'))
    }
}

export { tryShare }