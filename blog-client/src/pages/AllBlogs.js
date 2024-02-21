import React from 'react'

const AllBlogs = () => {
  return (

    <>
      <div className='blog-page border-2'>
        {/* card 1 */}
        <div className="card mb-3 card-mesur my-3" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-56976,resizemode-75,msid-96407393/news/sports/after-a-month-of-football-madness-lets-return-to-cricket/1.jpg" className="img-fluid rounded-start card-img-size"
                alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">discription</p>

              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card mb-3 card-mesur" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-56976,resizemode-75,msid-96407393/news/sports/after-a-month-of-football-madness-lets-return-to-cricket/1.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">discription</p>

              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="card mb-3 card-mesur" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-56976,resizemode-75,msid-96407393/news/sports/after-a-month-of-football-madness-lets-return-to-cricket/1.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">discription</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default AllBlogs
