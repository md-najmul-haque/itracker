import React from 'react'

const ContactUs = () => {
  return (
    <section className="max-w-full">
      <div className="flex justify-center items-center my-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email address</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="address"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your message</span>
                  </label>
                  <textarea
                    name="message"
                    placeholder="Your message"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center content-center">
          <img
            className="lg:w-3/4"
            src="https://mobibizmarketing.com/wp-content/uploads/Contact.gif"
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default ContactUs
