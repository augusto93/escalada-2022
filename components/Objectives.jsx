import Image from 'next/image'
import Link from 'next/link'

export default function Objectives({isOpen, setOpen, }) {

  return (
      <div className="content">
        <div className="data">

          <Link href={"/marcos"}>
            <div className='item'>
              <div className='item-title'>
                <h4>Confira aqui</h4>
              </div>
              <div className='item-content'>
                <p>as escaladas dos</p>
                <p>anos anteriores</p>
              </div>
            </div>
          </Link>
          
        </div>
        <Image
          src="/images/objective.png"
          height={272} 
          width={250}
          layout="fixed"
          unoptimized={true}
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
            right: 30px;
            top: -100px;
          }

          .item {
            position: relative;
            font-size: 1rem;
            cursor: pointer;
            height: 60px;
          }

          .item-title {
            width: 100%;
            height: 35%;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background-color: #ffba38;
            font-size: 1.15rem;
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