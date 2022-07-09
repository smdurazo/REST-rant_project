const React = require ('react');
const Def = require('./default');

function home() {
    return (
        <Def>
            <main>
                <h1>REST-rant</h1>
                <div>
                    <img src="/images/pizza.jpg" alt="Pizza Slice" />
                    <div>
                        Photo by <a href="https://unsplash.com/@pablopacheco_videografo">Pablo Pacheco</a> on<a href="http://upsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home;