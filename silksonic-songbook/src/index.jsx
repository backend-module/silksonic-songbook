import  ReactDOM  from "react-dom/client";

//reference root element in index.html
const root = document.querySelector("#root")

ReactDOM.createRoot(root).render(
    <main>
        <h1>Hello, react</h1>
        <p>{2* (8 -17)}</p>
    </main>
)

