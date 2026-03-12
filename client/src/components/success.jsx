import parkURL from "../assets/park.jpeg"

export default function Success() {
    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
            <main>
                <div className="h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
                    <img
                        src={parkURL}
                        alt="TODO"
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div>
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
                        <div className="lg:col-start-2">
                            <h1 className="text-sm font-medium text-indigo-600">Payment successful</h1>
                            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Thanks for your contribution!</p>
                            <p className="mt-2 text-base text-gray-500">
                                We appreciate your kindness and continued support of Niv's education
                            </p>
                            <div className="mt-16 border-t border-gray-200 py-6 text-right">
                                <a href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Home
                                    <span aria-hidden="true"> &rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}