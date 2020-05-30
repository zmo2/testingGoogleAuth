import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import StreamCreate from "./streams/streamCreate"
import StreamDelete from "./streams/streamDelete.js"
import StreamEdit from "./streams/streamEdit.js"
import StreamList from "./streams/streamList"
import StreamShow from "./streams/streamShow"
import Header from "./Header"

const App = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit" exact component={StreamEdit} />
                <Route path="/streams/delete" exact component={StreamDelete} />
                <Route path="/streams/show" exact component={StreamShow} />
            </BrowserRouter>
        </div>
    )
}

export default App