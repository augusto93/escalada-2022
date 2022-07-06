export default function Topic({videoOpen, setVideoOpen}) {
  
  const video = document.querySelector("#video")

  return (
    <>
      <div className="container" onClick={() => {
        setVideoOpen(!videoOpen)
        video.pause()
        video.currentTime = 0
        }}>

        <div className='content'>
          <div className="content-video" >
            <div className="close">X</div>
            <video id="video" src="/images/video.mp4" controls></video>
          </div>
        </div>

        <style jsx>{`

            .container {
              width: 100%;
              height: 100vh;
              display: ${videoOpen? "flex" : "none"};
              justify-content: center;
              align-items: center;
              z-index: 9998;
              position: absolute;
              background-color:rgba(0,0,0,0.8);
              animation: fadeIn 0.3s !important;
            }

            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
                }
              }

            .content{
              width: 100%;
              height: 100%;
              z-index: 9999;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              cursor: pointer;
              color: #ffffff;
            }

            .content-video {
              border: 20px solid #ffffff;
              border-radius: 30px;
              display: flex;
              justify-content: flex-end;
            }

            .content-video video {
              width: 100%;
              max-width: 648px;
              height: 100%
            }

            .close {
              width: 40px;
              height: 40px;
              border-radius: 40px;
              background-color: #ffffff;
              color:red;
              position:fixed;
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 9999;
              margin: -30px -30px 0 0;
              font-size: 1.375rem;
              font-weight: bold;
            }

          `}
        </style>
      </div>
    </>
  )
}