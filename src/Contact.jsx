import React from 'react'

const Contact = () => {
    return (
        <section className='section-contact container mt-5 d-flex flex-column'>
            <h1 className='text-center mb-5'>Contect Us</h1>
            <form>
            <div class="input-group mt-2 mb-4 ">
                <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mt-2 mb-4 ">
                <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                <input type="email" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="input-group mt-2 mb-4 ">
                <span class="input-group-text" id="inputGroup-sizing-default">Subject</span>
                <input type="text" required class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
            </div>
            <div class="form-floating mb-5">
                <textarea class="form-control" required placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Comments</label>
            </div>
                <a href='/'><button className='btn btn-success'> Submit </button></a>
                </form>
        </section>
    );
}

export default Contact
