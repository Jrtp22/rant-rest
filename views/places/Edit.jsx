const React = require("react");
const Def = require("../Default.jsx");

function Edit_form(data) {
    return (
        <Def>
            <main>
                <h2>Edit a Place</h2>
                <form
                    action={`/places/${data.place.id}?_method=PUT`}
                    method='POST'>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='name'>Place Name:</label>
                            <input
                                className='form-group'
                                type='text'
                                id='name'
                                name='name'
                                defaultValue={data.place.name}
                            />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='pic'>Place Picture:</label>
                            <input
                                className='form-group'
                                type='text'
                                id='pic'
                                name='pic'
                                defaultValue={data.place.pic}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='city'>City:</label>
                            <input
                                className='form-group'
                                type='text'
                                id='city'
                                name='city'
                                defaultValue={data.place.city}
                            />
                        </div>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='state'>State:</label>
                            <input
                                className='form-group'
                                type='text'
                                id='state'
                                name='state'
                                defaultValue={data.place.state}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='form-group col-sm-6'>
                            <label htmlFor='cuisines'>Cuisines:</label>
                            <input
                                className='form-group'
                                type='text'
                                id='cuisines'
                                name='cuisines'
                                defaultValue={data.place.cuisines}
                            />
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='founded'>Founded</label>
                            <input
                                className='form-control'
                                id='founded'
                                name='founded'
                                value={data.place.founded}
                            />
                        </div>
                    </div>
                    <a className='col justify-content-center>'>
                        <input className='btn btn-primary' type='submit' value='Update Place' />
                    </a>
                </form>
            </main>
        </Def>
    );
}

module.exports = Edit_form;
