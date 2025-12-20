import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, CheckCircle, Globe, Shield, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-sky-200 to-sky-600 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Hello <span className="text-sky-600">Future</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            MMS Connections provides state-of-the-art software solutions tailored to elevate your business operations. Experience seamless integration and powerful performance.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/contact"
                                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                            >
                                Get Started
                            </Link>
                            <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900 flex items-center">
                                Learn more <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-sky-200 to-sky-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
                </div>
            </div>

            {/* Features Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-sky-600">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to scale
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Our platform offers a comprehensive suite of tools designed to streamline your workflow and boost productivity.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                    <Globe className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Global Connectivity
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Reach customers worldwide with our low-latency global network infrastructure.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                    <Shield className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Advanced Security
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Protect your data with enterprise-grade security protocols and compliance standards.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                    <Zap className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                High Performance
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Experience lightning-fast speeds and optimized performance for all your applications.
                            </dd>
                        </div>
                        <div className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                    <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Reliable Uptime
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600">
                                Count on us with our 99.99% uptime guarantee and 24/7 monitoring.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
