const React = require("react");
const Def = require("./Default");

function Home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/chia-fruit-drink.jpg" alt="A fruity drink with chia seeds" />
                    <div>
                        Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = Home;
