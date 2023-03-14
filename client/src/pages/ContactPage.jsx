import React from 'react';

export default function ContactPage() {
    return (
        <div className="container">
            <h1>Drop us a line</h1>
            <form className="" action="/contact" method="post">

                <div className="form-group">
                    <label className="font-weight-bold">First Name</label>
                    <input type="text" className="form-control" id="fname" name="firstname" placeholder="Enter your name..." />
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">Last Name</label>
                    <input type="text" className="form-control" id="lname" name="lastname" placeholder="Enter last name..." />
                </div>

                <div className="form-group">
                    <label className="font-weight-bold">Email</label>
                    <input type="email" className="form-control" id="email" name="Email" placeholder="Enter Your email..." />
                </div>


                <div className="form-group">
                    <label className="font-weight-bold">Subject</label>
                    <textarea className="form-control" id="subject" textarea name="subject"
                        placeholder="Leave comment..." rows="5" cols="30"></textarea>
                </div>
                <button type="submit" name="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}