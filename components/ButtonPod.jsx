import Image from 'next/image'

export default function ButtonPod() {
  return (
    <div className='content'>
      <div className='ico'>
        <Image
          src="/images/eneva_w.png"
          height={29} 
          width={29}
          layout="fixed"
          unoptimized={true}
          alt="Botão de play"
        />
      </div>
      <div className="text">
        <p>Escute aqui</p>
        <p>o Eneva Cast</p>
      </div>

      <style jsx> {`
        .content {
          width: 135px;
          height: 55px;
          background-color: #ffffff;
          border-radius: 12px;
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          transition: transform 0.4s;
        }

        .content:hover {
          transform: scale(1.05);
        }

        .ico{
          width: 100%;
          max-width: 49px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 0 0 8px;
        }

        .text {
          width: 100%;
          max-width: 331px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 0 0 -8px;
        }

        .text :first-child {
          font-weight: bold;
        }

        p {
          font-size: 0.6875rem;
          color: #006269;
          margin: 0;
        }

      `}
      </style>
      
    </div>
  )
}