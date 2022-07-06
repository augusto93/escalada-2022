import Image from 'next/image'

export default function Objectives({isOpen, setOpen, setAnoAtivo}) {

  return (
      <div className="content">
        <div className="data">

            <div className='item' onClick={() => {setOpen(!isOpen); setAnoAtivo(2018) }}>
              <div className='item-title'>
                <h4>2018</h4>
              </div>
              <div className='item-content'>
                <p>+4 bcm</p>
                <p>+385 MW</p>
              </div>
            </div>

          <div className='item' onClick={() => {setOpen(!isOpen); setAnoAtivo(2019) }}>
            <div className='item-title'>
              <h4>2019</h4>
            </div>
            <div className='item-content'>
              <p>+4,1 bcm</p>
              <p>+384 MW</p>
            </div>
          </div>

          <div className='item' onClick={() => {setOpen(!isOpen); setAnoAtivo(2020) }}>
            <div className='item-title'>
              <h4>
                2020
              </h4>
            </div>
            <div className='item-content'>
              <p>+5,5 bcm</p>
              <p>+000 MW</p>
            </div>
          </div>

          <div className='item' onClick={() => {setOpen(!isOpen); setAnoAtivo(2021) }}>
            <div className='item-title'>
              <h4>
                2021
              </h4>
            </div>
            <div className='item-content'>
              <p>+00 bcm</p>
              <p>+000 MW</p>
            </div>
          </div>
          
          
        </div>
        <Image
          src="/images/objective.png"
          height={272} 
          width={250}
          layout="fixed"
          alt="Logo Eneva"
        />

        <style jsx>{`
          .content {
            width: 100%;
            max-width: 250px;
            height: 100%;
            max-height: 272px;
            position: relative;
          }

          .data {
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            flex-direction: column-reverse;
            align-items: flex-end;
            z-index: 990;
            line-height: 0;
            right: 60px;
            top: -15px;
          }

          .item {
            position: relative;
            font-size: 0.6875rem;
            cursor: pointer;
            height: 60px;
          }

          .item-title {
            width: 100%;
            height: 30%;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background-color: #ffba38;
            font-size: 0.75rem;
            color: #006269;
            padding: 0 8px 0 0; 
          }

          .item-content {
            color: white;
            text-align: right;
            line-height: 0.125rem;
            padding: 0 8px 0 0;
          }

          `}
        </style>
      </div>
  )
}