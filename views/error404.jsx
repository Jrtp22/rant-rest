const React = require("react");
const Def = require("./Default");

function Error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/404.jpg" alt="funny 404 pic" />
                    <div>
                        Photo by <a href="https://unsplash.com/@visuals">Visuals</a> on <a href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = Error404;
