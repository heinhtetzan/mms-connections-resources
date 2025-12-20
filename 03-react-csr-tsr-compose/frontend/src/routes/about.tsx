import { createFileRoute } from '@tanstack/react-router'
import { Users, Award, History } from 'lucide-react'

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-sky-600">About Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Building the future, one line of code at a time
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        MMS Connections was founded with a vision to revolutionize how businesses interact with technology. We believe in the power of software to transform operations and drive growth.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        <div className="flex flex-col items-center text-center">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                    <History className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Our History
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">
                                    Established in 2015, we have grown from a small startup to a global software provider, serving clients across 20+ countries.
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                    <Users className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Our Team
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">
                                    A diverse team of engineers, designers, and strategists passionate about creating exceptional digital experiences.
                                </p>
                            </dd>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                                    <Award className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                Our Mission
                            </dt>
                            <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                <p className="flex-auto">
                                    To empower businesses with innovative, reliable, and scalable software solutions that solve real-world problems.
                                </p>
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}
