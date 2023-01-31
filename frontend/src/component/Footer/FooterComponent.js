import github from "./github.png";
import linkedin from "./linkedin.png";
import document from "./document.png";

function FooterComponent() {
    return (
        <div className="Footer">
            <div className="grid grid-cols-3">
                <a href="https://github.com/anuraagm"><figure><img style={{marginLeft:10}} src={github}/><figcaption className="text-xxs text-gray-100">github</figcaption></figure></a>
                <a href="https://www.linkedin.com/in/anuraag-muktevi-334028143/"><figure><img style={{marginLeft:10}} src={linkedin}/><figcaption className="text-xxs text-gray-100">linkedin</figcaption></figure></a>
                <a href="https://drive.google.com/file/d/1CMMirHwfsEyLlJbZqW8px8cUzBBa6HSd/view?usp=share_link"><figure><img style={{marginLeft:10}} src={document}/><figcaption className="text-xxs text-gray-100">resume</figcaption></figure></a>
            </div>
            <div className="mt-6">
                <p className="text-xxs text-gray-100">Designed by <a className="text-xxs text-gray-400" href="https://www.karankowshik.com/">Karan Kowshik</a></p>
            </div>
        </div>
    )
}

export default FooterComponent;