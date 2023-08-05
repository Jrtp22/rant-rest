const React = require("react");
const Def = require("../Default.jsx");

function Show(data) {
    let comments = <h3 className='inactive'>No comments yet!</h3>;
    if (data.place.comments.length) {
        comments = data.place.comments.map((c) => {
            return (
                <div className='border'>
                    <h2 className='rant'>{c.rant ? "Rant! 😡" : "Rave! 😍"}</h2>
                    <h4>{c.comment}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            );
        });
    }

    return (
        <Def>
            <main>
                <h1>{data.place.name}</h1>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                    </div>
                </div>
                <h2>Comments</h2>
                {comments}
                <h2>Add a Comment</h2>
                <form action={`/places/${data.place.id}/comment`} method='POST'>
                    <div className='row'>
                        <div className='form-group col-xl-6'>
                            <label htmlFor='comment'>Comment</label>
                            <input
                                className='form-group'
                                type='text'
                                id='comment'
                                name='comment'
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='author'>Author</label>
                        <input
                            className='form-group'
                            type='text'
                            id='author'
                            name='author'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='stars'>Rating</label>
                        <input
                            className='form-group'
                            type='number'
                            id='stars'
                            name='stars'
                            min='1'
                            max='5'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='rant'>Rant?</label>
                        <input
                            className='form-group'
                            type='checkbox'
                            id='rant'
                            name='rant'
                        />
                    </div>
                    <br />
                    <input type='submit' />
                </form>
                <div className='row'>
                    <div class='col-md-2'>
                        <a
                            href={`/places/${data.id}/edit`}
                            className='btn btn-warning'>
                            Edit
                        </a>
                    </div>
                </div>
                <div className='row'>
                    <div class='col-md-2'>
                        <form
                            method='POST'
                            action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </Def>
    );
}

module.exports = Show;
