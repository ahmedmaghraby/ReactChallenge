export default function MyPortfolio() {
  return (
    <>
      <div className="dark:!bg-navy-800 shadow-shadow-500 rounded-primary relative mx-auto flex size-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] shadow-3xl dark:text-white dark:shadow-none">
        <div className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-gradient-to-r from-primary-700 to-primary-600 bg-cover">
          <div className="absolute -bottom-12 flex size-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
            <img
              className="size-full rounded-full"
              src="https://i.ibb.co/6YbS9ff/avatar11.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-bluePrimary text-xl font-bold">Adela Parkson</h4>
          <p className="text-lightSecondary text-base font-normal">Product Manager</p>
        </div>
        <div className="mb-3 mt-6 flex gap-4 md:!gap-14">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">17</h3>
            <p className="text-lightSecondary text-sm font-normal">Posts</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">9.7K</h3>
            <p className="text-lightSecondary text-sm font-normal">Followers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-bluePrimary text-2xl font-bold">434</h3>
            <p className="text-lightSecondary text-sm font-normal">Following</p>
          </div>
        </div>
      </div>
    </>
  )
}
