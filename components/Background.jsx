import Image from "next/image";

export default function Mountain() {
  return (
    <div className="content">
      <Image
        src="/images/bg.jpg"
        layout='fill'
        unoptimized={true}
        alt="fundo"
      />

      <style jsx>{`
        .content {
          width: 100vw;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
      `}
      </style>
    </div>
  )
}