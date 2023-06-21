import Image from 'next/image'

const Home = () => {
  return (
      <section className="container">
        {/* <table className="container">
          <tr className="flex-start">
                <td><h1 className="text-5xl poppins gap-2">Welcome to</h1>
            <h1 className="text-5xl font-bold blue_gradient ml-2">Miles Portfolio.</h1>
          <p className="poppins text-xl mt-2 flex-start">Hi I'm Miles, a passionate, self-driven software developer.</p>
            </td>
            <td rowspan="2"><Image src="/assets/images/profile.jpg"
          width={400}
          height={400}
          className="rounded-full filter grayscale"
          alt="Miles Profile Picture"
          ></Image></td>
            <tr className="mt-10"><h1>My Languages :</h1></tr>
          </tr>
        </table> */}
        <div className="container biryaniRegular">
          <div className="max-w-xl">
                <h1 className="text-6xl gap-2">WELCOME TO</h1>
            <h1 className="text-6xl font-bold animate-character pt-3 pl-10">MILES' PORTFOLIO</h1>
                {/* <h1 className="text-5xl poppins gap-2">.</h1> */}
          <p className="text-xl2 mt- flex-start">Hi I'm Miles, a passionate, self-driven software developer. Building dynamic Frontend and Backend applications.</p>
          <div className="mt-10 text-xl2"><h1>My Languages :</h1>
            <ul>
              <li>JAVASCRIPT</li>
              <li>NODEJS</li>
              <li>EXPRESS</li>
              <li>REACT</li>
              <li>HTML/CSS</li>
              <li>DJANGO</li>
              <li>POSTGRES</li>
              <li>MONGODB</li>
              </ul>
            </div>
          </div>
          <div className="justify-content-end">
          <Image src="/assets/images/profile.jpg"
          width={400}
          height={400}
          className="rounded-full filter grayscale ml-50"
          alt="Miles Profile Picture"
          ></Image>
          </div>
        </div>
      </section>
  )
}

export default Home