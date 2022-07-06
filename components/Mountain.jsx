import Image from 'next/image'

export default function Mountain() {
  return (
      <div className="content">
        <Image
          src="/images/mountain.png"
          width={1152}
          height={650} 
          layout='fixed'
          alt="Escalada"
        />

        <style jsx>{`
          .content {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            position: relative;
          }

          `}
        </style>
      </div>
  )
}