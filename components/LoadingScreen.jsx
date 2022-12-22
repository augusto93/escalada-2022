import Image from 'next/image'

export default function LoadingScreen() {
    return (
        <>
          <div className="content fade-in-image">

            <Image 
              src="/images/loader.gif"
              width={150}
              height={84} 
              layout='fixed'
              unoptimized={true}
              alt="loading"
            />
  
            <style jsx>{`
              .content {
                width: 100%;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ffffff;

              }
              .fade-in-image {
                animation: fadeIn 1.8s;
                -webkit-animation: fadeIn 1.8s;
                -moz-animation: fadeIn 1.8s;
                -o-animation: fadeIn 1.8s;
                -ms-animation: fadeIn 1.8s;
                }

              @keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
                }

              @-moz-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
                }

              @-webkit-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
                }

              @-o-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
                }

              @-ms-keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
                }
              `}
            </style>
          </div>
        </>
    )
}