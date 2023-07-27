const React = require("react");
const Def = require("../Default.jsx");

function Show(data) {
    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} alt={data.place.name} />
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                    Edit
                </a>
                <form
                    method='POST'
                    action={`/places/${data.id}?_method=DELETE`}>
                    <button type='submit' className='btn btn-danger'>
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    );
}

module.exports = Show;
