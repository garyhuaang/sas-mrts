function test() {
  return (
    <div className="container">
      <nav className="navbar navbar-light navbar-expand-md sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Brand
          </a>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  First Item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Second Item
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Third Item
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div className="container">
          <div
            className="text-white bg-dark border rounded border-0 p-4 p-md-5"
            style={{
              position: 'sticky',
              top: '60px',
              display: 'flex',
              justifyItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              marginBottom: '0em',
            }}
          >
            <svg
              viewBox="0 0 138 26"
              fill="none"
              stroke="#fff"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              title="CodePen"
              width="500px"
              style={{ margin: '0 auto' }}
            >
              <path d="M15 8a7 7 0 100 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0l11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 010 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 000-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6"></path>
            </svg>
            <h2 className="fw-bold text-center text-white mb-3">
              Biben dum fringi dictum, augue purus
            </h2>
            <p className="text-center mb-4">
              Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus
              sapien, risus donec ad fusce augue interdum.
            </p>
          </div>
          <section
            id="products"
            className="slogan-trigger scroll-section"
            style={{ background: 'var(--bs-purple)' }}
          >
            <div className="row reveal-later">
              <div className="col">
                <h1 className="figcaption">Products</h1>
              </div>
            </div>
            <div className="row product-list reveal-later">
              <div className="col">
                <div className="product-card">
                  <div className="face">
                    <div className="content">
                      <img />
                    </div>
                  </div>
                  <div className="face">
                    <div className="content">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing <br />
                        pleasure and praising pain was born and I will give you
                        a complete <br />
                        account of the system, and expound the actual teachings
                        of the great <br />
                        explorer of the truth, the master-builder of human
                        happiness. No one <br />
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, <br />
                        but because those who do not know how to pursue pleasure
                        rationally <br />
                        encounter consequences that are extremely painful. Nor
                        again is there <br />
                        anyone who loves or pursues or desires to obtain pain of
                        itself, because
                        <br /> it is pain, but because occasionally
                        circumstances occur in which toil <br />
                        and pain can procure him some great pleasure. To take a
                        trivial example,
                        <br /> which of us ever undertakes laborious physical
                        exercise, except to <br />
                        obtain some advantage from it? But who has any right to
                        find fault with a<br /> man who chooses to enjoy a
                        pleasure that has no annoying consequences, <br />
                        or one who avoids a pain that produces no resultant
                        pleasure?
                        <br />
                      </p>
                      <div className="flex-row">
                        <button
                          className="btn btn-primary me-2 raised round gradient"
                          type="button"
                        >
                          Learn More
                        </button>
                        <button
                          className="btn btn-success raised round gradient"
                          type="button"
                        >
                          Other Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product-card">
                  <div className="face">
                    <div className="content">
                      <img />
                    </div>
                  </div>
                  <div className="face">
                    <div className="content">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing <br />
                        pleasure and praising pain was born and I will give you
                        a complete <br />
                        account of the system, and expound the actual teachings
                        of the great <br />
                        explorer of the truth, the master-builder of human
                        happiness. No one <br />
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, <br />
                        but because those who do not know how to pursue pleasure
                        rationally <br />
                        encounter consequences that are extremely painful. Nor
                        again is there <br />
                        anyone who loves or pursues or desires to obtain pain of
                        itself, because
                        <br /> it is pain, but because occasionally
                        circumstances occur in which toil <br />
                        and pain can procure him some great pleasure. To take a
                        trivial example,
                        <br /> which of us ever undertakes laborious physical
                        exercise, except to <br />
                        obtain some advantage from it? But who has any right to
                        find fault with a<br /> man who chooses to enjoy a
                        pleasure that has no annoying consequences, <br />
                        or one who avoids a pain that produces no resultant
                        pleasure?
                        <br />
                      </p>
                      <div className="flex-row">
                        <button
                          className="btn btn-primary me-2 raised round gradient"
                          type="button"
                        >
                          Learn More
                        </button>
                        <button
                          className="btn btn-success raised round gradient"
                          id="buy-vetter"
                          type="button"
                        >
                          Bla Blah
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="products-1"
            className="slogan-trigger scroll-section"
            style={{ background: 'var(--bs-pink)' }}
          >
            <div className="row reveal-later">
              <div className="col">
                <h1 className="figcaption">Products</h1>
              </div>
            </div>
            <div className="row product-list reveal-later">
              <div className="col">
                <div className="product-card">
                  <div className="face">
                    <div className="content">
                      <img />
                    </div>
                  </div>
                  <div className="face">
                    <div className="content">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing <br />
                        pleasure and praising pain was born and I will give you
                        a complete <br />
                        account of the system, and expound the actual teachings
                        of the great <br />
                        explorer of the truth, the master-builder of human
                        happiness. No one <br />
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, <br />
                        but because those who do not know how to pursue pleasure
                        rationally <br />
                        encounter consequences that are extremely painful. Nor
                        again is there <br />
                        anyone who loves or pursues or desires to obtain pain of
                        itself, because
                        <br /> it is pain, but because occasionally
                        circumstances occur in which toil <br />
                        and pain can procure him some great pleasure. To take a
                        trivial example,
                        <br /> which of us ever undertakes laborious physical
                        exercise, except to <br />
                        obtain some advantage from it? But who has any right to
                        find fault with a<br /> man who chooses to enjoy a
                        pleasure that has no annoying consequences, <br />
                        or one who avoids a pain that produces no resultant
                        pleasure?
                        <br />
                      </p>
                      <div className="flex-row">
                        <button
                          className="btn btn-primary me-2 raised round gradient"
                          type="button"
                        >
                          Learn More
                        </button>
                        <button
                          className="btn btn-success raised round gradient"
                          type="button"
                        >
                          Other Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product-card">
                  <div className="face">
                    <div className="content">
                      <img />
                    </div>
                  </div>
                  <div className="face">
                    <div className="content">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing <br />
                        pleasure and praising pain was born and I will give you
                        a complete <br />
                        account of the system, and expound the actual teachings
                        of the great <br />
                        explorer of the truth, the master-builder of human
                        happiness. No one <br />
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, <br />
                        but because those who do not know how to pursue pleasure
                        rationally <br />
                        encounter consequences that are extremely painful. Nor
                        again is there <br />
                        anyone who loves or pursues or desires to obtain pain of
                        itself, because
                        <br /> it is pain, but because occasionally
                        circumstances occur in which toil <br />
                        and pain can procure him some great pleasure. To take a
                        trivial example,
                        <br /> which of us ever undertakes laborious physical
                        exercise, except to <br />
                        obtain some advantage from it? But who has any right to
                        find fault with a<br /> man who chooses to enjoy a
                        pleasure that has no annoying consequences, <br />
                        or one who avoids a pain that produces no resultant
                        pleasure?
                        <br />
                      </p>
                      <div className="flex-row">
                        <button
                          className="btn btn-primary me-2 raised round gradient"
                          type="button"
                        >
                          Learn More
                        </button>
                        <button
                          className="btn btn-success raised round gradient"
                          id="buy-vetter-1"
                          type="button"
                        >
                          Bla Blah
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="products-2"
            className="slogan-trigger scroll-section"
            style={{ background: 'var(--bs-blue)' }}
          >
            <div className="row reveal-later">
              <div className="col">
                <h1 className="figcaption">Products</h1>
              </div>
            </div>
            <div className="row product-list reveal-later">
              <div className="col">
                <div className="product-card">
                  <div className="face">
                    <div className="content">
                      <img />
                    </div>
                  </div>
                  <div className="face">
                    <div className="content">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing <br />
                        pleasure and praising pain was born and I will give you
                        a complete <br />
                        account of the system, and expound the actual teachings
                        of the great <br />
                        explorer of the truth, the master-builder of human
                        happiness. No one <br />
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, <br />
                        but because those who do not know how to pursue pleasure
                        rationally <br />
                        encounter consequences that are extremely painful. Nor
                        again is there <br />
                        anyone who loves or pursues or desires to obtain pain of
                        itself, because
                        <br /> it is pain, but because occasionally
                        circumstances occur in which toil <br />
                        and pain can procure him some great pleasure. To take a
                        trivial example,
                        <br /> which of us ever undertakes laborious physical
                        exercise, except to <br />
                        obtain some advantage from it? But who has any right to
                        find fault with a<br /> man who chooses to enjoy a
                        pleasure that has no annoying consequences, <br />
                        or one who avoids a pain that produces no resultant
                        pleasure?
                        <br />
                      </p>
                      <div className="flex-row">
                        <button
                          className="btn btn-primary me-2 raised round gradient"
                          type="button"
                        >
                          Learn More
                        </button>
                        <button
                          className="btn btn-success raised round gradient"
                          type="button"
                        >
                          Other Button
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="product-card">
                  <div className="face">
                    <div className="content">
                      <img />
                    </div>
                  </div>
                  <div className="face">
                    <div className="content">
                      <p>
                        But I must explain to you how all this mistaken idea of
                        denouncing <br />
                        pleasure and praising pain was born and I will give you
                        a complete <br />
                        account of the system, and expound the actual teachings
                        of the great <br />
                        explorer of the truth, the master-builder of human
                        happiness. No one <br />
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure, <br />
                        but because those who do not know how to pursue pleasure
                        rationally <br />
                        encounter consequences that are extremely painful. Nor
                        again is there <br />
                        anyone who loves or pursues or desires to obtain pain of
                        itself, because
                        <br /> it is pain, but because occasionally
                        circumstances occur in which toil <br />
                        and pain can procure him some great pleasure. To take a
                        trivial example,
                        <br /> which of us ever undertakes laborious physical
                        exercise, except to <br />
                        obtain some advantage from it? But who has any right to
                        find fault with a<br /> man who chooses to enjoy a
                        pleasure that has no annoying consequences, <br />
                        or one who avoids a pain that produces no resultant
                        pleasure?
                        <br />
                      </p>
                      <div className="flex-row">
                        <button
                          className="btn btn-primary me-2 raised round gradient"
                          type="button"
                        >
                          Learn More
                        </button>
                        <button
                          className="btn btn-success raised round gradient"
                          id="buy-vetter-2"
                          type="button"
                        >
                          Bla Blah
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default test
