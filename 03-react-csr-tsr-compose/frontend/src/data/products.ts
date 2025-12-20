export interface Product {
    id: string
    name: string
    description: string
    price: string
    features: string[]
    image: string
}

export const products: Product[] = [
    {
        id: 'enterprise-suite',
        name: 'Enterprise Suite',
        description: 'A complete software ecosystem for large-scale organizations.',
        price: '$999/mo',
        features: ['Unlimited Users', 'Advanced Analytics', '24/7 Priority Support', 'Custom Integrations'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'cloud-connect',
        name: 'Cloud Connect',
        description: 'Seamlessly bridge your on-premise infrastructure with the cloud.',
        price: '$499/mo',
        features: ['Hybrid Cloud Support', 'Real-time Sync', 'Encrypted Data Transfer', 'Automated Backups'],
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'security-shield',
        name: 'Security Shield',
        description: 'Next-generation cybersecurity to protect your digital assets.',
        price: '$299/mo',
        features: ['Threat Detection', 'Firewall Management', 'Vulnerability Scanning', 'Incident Response'],
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'analytics-pro',
        name: 'Analytics Pro',
        description: 'Deep insights into your business performance with AI-driven analytics.',
        price: '$199/mo',
        features: ['Custom Dashboards', 'Predictive Modeling', 'Exportable Reports', 'Data Visualization'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
]
