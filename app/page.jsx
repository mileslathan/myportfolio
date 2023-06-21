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
        <div className="container">
          <div>
                <h1 className="text-5xl poppins gap-2">Welcome to</h1>
            <h1 className="text-5xl font-bold blue_gradient pl-10">Miles Portfolio</h1>
                {/* <h1 className="text-5xl poppins gap-2">.</h1> */}
          <p className="poppins text-xl mt-2 flex-start max-w-lg">Hi I'm Miles, a passionate, self-driven software developer. Building dynamic Frontend and Backend applications.</p>
          <div className="mt-10"><h1>My Languages :</h1>
          next.js</div>
          </div>
          <div>
          <Image src="/assets/images/profile.jpg"
          width={400}
          height={400}
          className="rounded-full filter grayscale ml-5"
          alt="Miles Profile Picture"
          ></Image>
          </div>
        </div>
      </section>
  )
}

export default Home