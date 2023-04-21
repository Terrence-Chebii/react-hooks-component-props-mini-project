import blogData from "../data/blog";

let image = blogData.image
let text = blogData.about

function About(){
    return(
        <aside>
            <img src='image' alt='blog logo'/>
            <p>{text}</p>
        </aside>
    )
}

export default About