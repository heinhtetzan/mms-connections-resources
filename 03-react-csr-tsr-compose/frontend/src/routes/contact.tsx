import { createFileRoute } from '@tanstack/react-router'
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export const Route = createFileRoute('/contact')({
    component: Contact,
    validateSearch: z.object({
        subject: z.string().optional(),
    }),
})

function Contact() {
    const { subject } = Route.useSearch()

    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            subject: subject || '',
            message: '',
        },
        // @ts-ignore - validatorAdapter might be the wrong name or type definition is outdated
        validatorAdapter: zodValidator(),
        onSubmit: async ({ value }) => {
            // Simulate API call
            console.log('Form submitted:', value)
            await new Promise((resolve) => setTimeout(resolve, 1000))
            alert('Message sent successfully!')
            form.reset()
        },
    })

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-sky-600">Contact Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Get in touch
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Have a question or want to work together? We'd love to hear from you.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Contact Information</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Our team is available Monday through Friday, 9am to 5pm PST.
                        </p>
                        <dl className="mt-8 space-y-6">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd className="text-base leading-7 text-gray-600">
                                    123 Tech Avenue
                                    <br />
                                    Silicon Valley, CA 94025
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd className="text-base leading-7 text-gray-600">
                                    <a href="tel:+1 (555) 123-4567" className="hover:text-gray-900">
                                        +1 (555) 123-4567
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd className="text-base leading-7 text-gray-600">
                                    <a href="mailto:contact@mmsconnections.com" className="hover:text-gray-900">
                                        contact@mmsconnections.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                form.handleSubmit()
                            }}
                            className="space-y-6"
                        >
                            <div>
                                <form.Field
                                    name="name"
                                    validators={{
                                        onChange: z.string().min(2, 'Name must be at least 2 characters'),
                                    }}
                                    children={(field) => (
                                        <>
                                            <label htmlFor={field.name} className="block text-sm font-medium leading-6 text-gray-900">
                                                Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    type="text"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-3"
                                                />
                                                {field.state.meta.errors ? (
                                                    <p className="mt-2 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                                ) : null}
                                            </div>
                                        </>
                                    )}
                                />
                            </div>

                            <div>
                                <form.Field
                                    name="email"
                                    validators={{
                                        onChange: z.string().email('Invalid email address'),
                                    }}
                                    children={(field) => (
                                        <>
                                            <label htmlFor={field.name} className="block text-sm font-medium leading-6 text-gray-900">
                                                Email
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    type="email"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-3"
                                                />
                                                {field.state.meta.errors ? (
                                                    <p className="mt-2 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                                ) : null}
                                            </div>
                                        </>
                                    )}
                                />
                            </div>

                            <div>
                                <form.Field
                                    name="subject"
                                    validators={{
                                        onChange: z.string().min(5, 'Subject must be at least 5 characters'),
                                    }}
                                    children={(field) => (
                                        <>
                                            <label htmlFor={field.name} className="block text-sm font-medium leading-6 text-gray-900">
                                                Subject
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    type="text"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-3"
                                                />
                                                {field.state.meta.errors ? (
                                                    <p className="mt-2 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                                ) : null}
                                            </div>
                                        </>
                                    )}
                                />
                            </div>

                            <div>
                                <form.Field
                                    name="message"
                                    validators={{
                                        onChange: z.string().min(10, 'Message must be at least 10 characters'),
                                    }}
                                    children={(field) => (
                                        <>
                                            <label htmlFor={field.name} className="block text-sm font-medium leading-6 text-gray-900">
                                                Message
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id={field.name}
                                                    name={field.name}
                                                    value={field.state.value}
                                                    onBlur={field.handleBlur}
                                                    onChange={(e) => field.handleChange(e.target.value)}
                                                    rows={4}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6 px-3"
                                                />
                                                {field.state.meta.errors ? (
                                                    <p className="mt-2 text-sm text-red-600">{field.state.meta.errors.join(', ')}</p>
                                                ) : null}
                                            </div>
                                        </>
                                    )}
                                />
                            </div>

                            <div>
                                <form.Subscribe
                                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                                    children={([canSubmit, isSubmitting]) => (
                                        <button
                                            type="submit"
                                            disabled={!canSubmit}
                                            className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 disabled:opacity-50 disabled:cursor-not-allowed items-center"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Message'}
                                            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                                        </button>
                                    )}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
