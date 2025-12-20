import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '../data/products'
import { Check, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/products/$productId')({
    component: ProductDetail,
    loader: ({ params }) => {
        const product = products.find((p) => p.id === params.productId)
        if (!product) {
            throw new Error('Product not found')
        }
        return { product }
    },
})

function ProductDetail() {
    const { product } = Route.useLoaderData()

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-8">
                    <Link to="/products" className="text-sm font-semibold leading-6 text-sky-600 flex items-center hover:text-sky-500">
                        <ArrowLeft className="mr-1 h-4 w-4" /> Back to Products
                    </Link>
                </div>
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                        <div className="relative h-full">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-[1/1]"
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
                            <p className="mt-4 text-xl text-gray-500">{product.price}</p>
                            <p className="mt-6 text-base leading-7 text-gray-600">{product.description}</p>

                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h3 className="text-sm font-medium text-gray-900">Key Features</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {product.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-sky-600" aria-hidden="true" />
                                            <span className="text-sm leading-6 text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-10 flex">
                                <Link
                                    to="/contact"
                                    search={{ subject: product.name }}
                                    className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                                >
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
