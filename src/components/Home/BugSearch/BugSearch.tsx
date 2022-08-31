import issue from '../../../assets/monitoring.gif'

const BugSearch = () => {

  return (
    <section className="max-w-full bg-white px-10 py-10 dark:bg-black dark:text-white">
      <div className="flex flex-col lg:flex-row justify-center items-center my-10 container mx-auto">
        <div>
          <h1 className="text-4xl uppercase font-bold">
            Ship great software with <br /> automated issue tracking
          </h1>
          <p className="py-6 text-xl">
            A simple, fast and scalable bug tracking system that helps you
            manage bugs <br /> easily and deliver great products on time.
          </p>
        </div>
        <div className="flex justify-center content-center">
          <img className="w-full" src={issue} alt="" />
        </div>
      </div>
    </section>
  )
}

export default BugSearch
