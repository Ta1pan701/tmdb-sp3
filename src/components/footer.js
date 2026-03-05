export function footer(){
    let box = document.querySelector("footer")

    box.innerHTML = `
      <div class="footer__socials">
            <a href="#"><i>f</i></a>
            <a href="#"><i>w</i></a>
            <a href="#"><i>x</i></a>
            <a href="#"><i>r</i></a>
            <a href="#"><i>m</i></a>
        </div>

    <div class="footer__menu">
        <a href="#">Movie Catalog</a>
        <a href="#">Media</a>
        <a href="#">Celebrities</a>
        <a href="#">Contact Us</a>
    </div>

    <div class="footer__copyright">
        2026 © Kinoarea. All rights reserved
    </div>

    <div class="footer__links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
    </div>
`
} 