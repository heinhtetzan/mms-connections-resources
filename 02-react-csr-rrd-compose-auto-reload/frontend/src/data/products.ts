import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'CloudSync Enterprise',
    description: 'Enterprise-grade cloud synchronization solution for seamless data management across your organization.',
    fullDescription: 'CloudSync Enterprise is our flagship cloud management platform designed for large-scale organizations. It provides real-time synchronization, advanced security features, and seamless integration with your existing infrastructure.',
    features: [
      'Real-time data synchronization',
      'End-to-end encryption',
      'Multi-cloud support',
      'Advanced analytics dashboard',
      'Automated backup and recovery',
      '24/7 technical support'
    ],
    price: 'Starting at $499/month',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Cloud Solutions'
  },
  {
    id: '2',
    name: 'SecureAuth Pro',
    description: 'Advanced authentication and identity management system with multi-factor authentication and biometric support.',
    fullDescription: 'SecureAuth Pro delivers enterprise-level security with cutting-edge authentication methods. Protect your organization with our comprehensive identity management solution.',
    features: [
      'Multi-factor authentication',
      'Biometric integration',
      'Single sign-on (SSO)',
      'Role-based access control',
      'Compliance reporting',
      'Active directory integration'
    ],
    price: 'Starting at $299/month',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Security'
  },
  {
    id: '3',
    name: 'DataFlow Analytics',
    description: 'Powerful business intelligence platform with real-time data visualization and predictive analytics.',
    fullDescription: 'Transform your raw data into actionable insights with DataFlow Analytics. Our AI-powered platform helps you make data-driven decisions with confidence.',
    features: [
      'Real-time dashboards',
      'Predictive analytics',
      'Custom report builder',
      'API integration',
      'Machine learning insights',
      'Export to multiple formats'
    ],
    price: 'Starting at $399/month',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Analytics'
  },
  {
    id: '4',
    name: 'TeamConnect Hub',
    description: 'Collaborative workspace platform that brings your team together with integrated communication and project management.',
    fullDescription: 'TeamConnect Hub is the all-in-one collaboration solution your team needs. Streamline communication, manage projects, and boost productivity.',
    features: [
      'Video conferencing',
      'Project management tools',
      'File sharing and storage',
      'Team messaging',
      'Calendar integration',
      'Mobile apps'
    ],
    price: 'Starting at $199/month',
    image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Collaboration'
  },
  {
    id: '5',
    name: 'AutoDeploy CI/CD',
    description: 'Continuous integration and deployment platform for faster, more reliable software delivery.',
    fullDescription: 'AutoDeploy CI/CD automates your entire development pipeline from code commit to production deployment. Ship faster with confidence.',
    features: [
      'Automated testing',
      'Multi-environment deployment',
      'Rollback capabilities',
      'Docker and Kubernetes support',
      'Pipeline visualization',
      'Integration with popular VCS'
    ],
    price: 'Starting at $349/month',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'DevOps'
  },
  {
    id: '6',
    name: 'MobileFirst SDK',
    description: 'Comprehensive mobile development toolkit for building native iOS and Android applications.',
    fullDescription: 'MobileFirst SDK accelerates mobile app development with pre-built components, backend integration, and cross-platform capabilities.',
    features: [
      'Cross-platform development',
      'Pre-built UI components',
      'Backend integration',
      'Push notifications',
      'Offline functionality',
      'Analytics integration'
    ],
    price: 'Starting at $249/month',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Development'
  }
];
