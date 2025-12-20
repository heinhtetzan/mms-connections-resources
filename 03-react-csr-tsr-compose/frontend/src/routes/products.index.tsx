import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../data/products'
import { ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/products/')({
    component: Products,
})

function Products() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-sky-600">Our Products</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Tools to empower your business
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Explore our range of cutting-edge software products designed to solve complex problems and drive efficiency.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {products.map((product) => (
                        <article key={product.id} className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative w-full">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
                            </div>
                            <div className="max-w-xl p-6">
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-sky-600">
                                        <Link to="/products/$productId" params={{ productId: product.id }}>
                                            <span className="absolute inset-0" />
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{product.description}</p>
                                </div>
                                <div className="mt-4 flex items-center justify-between gap-x-4 text-xs">
                                    <span className="text-gray-500">{product.price}</span>
                                    <Link
                                        to="/products/$productId"
                                        params={{ productId: product.id }}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 flex items-center"
                                    >
                                        Details <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
