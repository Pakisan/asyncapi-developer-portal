export default new Promise((res) => {
    const script = document.createElement('script');
    script.onload = () => res();
    script.setAttribute('src', 'https://plugins.jetbrains.com/assets/scripts/mp-widget.js');
    document.head.appendChild(script);
});
