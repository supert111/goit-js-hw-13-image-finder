var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight,
  );
let totalHeight = 0;
export default function scroll() {
    window.scrollTo({
        top: totalHeight += scrollHeight,
        behavior: "smooth"       
    });
}
