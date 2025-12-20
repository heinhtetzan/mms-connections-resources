import { createFileRoute } from '@tanstack/react-router'
import { Code, Cloud, Database, Smartphone, Lock, BarChart } from 'lucide-react'

export const Route = createFileRoute('/services')({
    component: Services,
})

function Services() {
    const services = [
        {
            name: 'Custom Software Development',
            description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
            icon: Code,
        },
        {
            name: 'Cloud Integration',
            description: 'Seamlessly migrate and integrate your operations with leading cloud platforms for enhanced scalability.',
            icon: Cloud,
        },
        {
            name: 'Database Management',
            description: 'Robust database architecture and management services ensuring data integrity and availability.',
            icon: Database,
        },
        {
            name: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that deliver engaging user experiences on iOS and Android.',
            icon: Smartphone,
        },
        {
            name: 'Cybersecurity Solutions',
            description: 'Comprehensive security assessments and implementation to protect your digital assets from threats.',
            icon: Lock,
        },
        {
            name: 'Data Analytics',
            description: 'Turn your data into actionable insights with our advanced analytics and visualization tools.',
            icon: BarChart,
        },
    ]

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-sky-600">Our Services</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Solutions for every challenge
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We offer a wide range of services to help you navigate the digital landscape and achieve your business goals.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                                    <service.icon className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                    {service.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{service.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
