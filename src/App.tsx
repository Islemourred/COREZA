import { ArrowRight, Check, Menu, X, BarChart3, Users, ShoppingCart, CreditCard, Package, Warehouse, ClipboardList, Factory, FileCheck, FolderOpen, Calendar, HeadphonesIcon, Building, Layout } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const modules = [
    {
      icon: Users,
      name: 'CRM',
      description: 'Gestion complète des clients, pipeline de vente intelligent avec IA, suivi des interactions et rapports de visite automatiques'
    },
    {
      icon: ShoppingCart,
      name: 'Ventes',
      description: 'Devis intelligents, calcul de marge en temps réel, gestion des commandes et facturation automatisée'
    },
    {
      icon: CreditCard,
      name: 'Point de Vente',
      description: 'Interface POS moderne, synchronisation automatique des stocks et gestion multi-caissiers'
    },
    {
      icon: BarChart3,
      name: 'Finance',
      description: 'Trésorerie en temps réel, prévisions financières, déclarations mensuelles et analyse prédictive par IA'
    },
    {
      icon: Package,
      name: 'Achats',
      description: 'Gestion des fournisseurs, comparaison de devis, suivi des réceptions et calcul automatique des retenues'
    },
    {
      icon: Warehouse,
      name: 'Entrepôts',
      description: 'Gestion multi-entrepôts, transferts intelligents, optimisation des réassorts par IA'
    },
    {
      icon: ClipboardList,
      name: 'Inventaire',
      description: 'Inventaire en temps réel, coût moyen pondéré automatique, prévisions de rupture de stock'
    },
    {
      icon: Factory,
      name: 'Production',
      description: 'Planification intelligente, analyse des coûts, simulation de capacité par IA'
    },
    {
      icon: FileCheck,
      name: 'Approbations',
      description: 'Workflow personnalisable, validation multi-niveaux, prédiction des délais par IA'
    },
    {
      icon: FolderOpen,
      name: 'GED',
      description: 'Archivage numérique centralisé, classement automatique par OCR et recherche intelligente'
    },
    {
      icon: Calendar,
      name: 'Ressources Humaines',
      description: 'Gestion des contrats, plannings flexibles, fiches de paie automatiques, analyse de satisfaction'
    },
    {
      icon: HeadphonesIcon,
      name: 'Service d\'assistance',
      description: 'Ticketing intelligent, attribution automatique, priorisation par IA et réponses prédictives'
    },
    {
      icon: Building,
      name: 'Hébergements',
      description: 'Gestion hôtelière complète, check-in/out automatiques, yield management par IA'
    },
    {
      icon: Layout,
      name: 'Tableaux de bord',
      description: 'Business Intelligence avancée, KPIs personnalisables, heatmaps et benchmarking sectoriel'
    }
  ];

  const features = [
    'Intelligence artificielle intégrée',
    'Application mobile native',
    'Synchronisation temps réel',
    'Sécurité et conformité maximale',
    'Intégration ERP complète',
    'Support multilingue'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center">
                <svg className="w-10 h-10" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 25C15 25 10 15 25 15C40 15 35 35 50 35C65 35 60 15 75 15C90 15 85 25 85 25C85 25 90 35 75 35C60 35 65 15 50 15C35 15 40 35 25 35C10 35 15 25 15 25Z" fill="#2563EB" />
                </svg>
                <span className="ml-2 text-2xl font-bold">
                  <span className="text-blue-600">Core</span>
                  <span className="text-orange-500">za</span>
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#modules" className="text-gray-700 hover:text-blue-600 transition-colors">Modules</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Fonctionnalités</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Tarifs</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
                Démo gratuite
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <a href="#modules" className="block text-gray-700 hover:text-blue-600">Modules</a>
              <a href="#features" className="block text-gray-700 hover:text-blue-600">Fonctionnalités</a>
              <a href="#pricing" className="block text-gray-700 hover:text-blue-600">Tarifs</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">Contact</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Démo gratuite
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                La plateforme ERP qui révolutionne votre entreprise
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                COREZA offre une suite complète de modules intégrés avec intelligence artificielle pour optimiser tous les aspects de votre gestion d'entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all font-medium flex items-center justify-center group shadow-lg hover:shadow-xl">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-colors font-medium border-2 border-blue-600">
                  Planifier une démo
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-orange-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <BarChart3 className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">Chiffre d'affaires</div>
                          <div className="text-sm text-gray-500">Aujourd'hui</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-green-600">+24%</div>
                    </div>
                    <div className="h-32 bg-gradient-to-r from-blue-100 to-orange-100 rounded-xl"></div>
                    <div className="grid grid-cols-3 gap-4">
                      {['CRM', 'Ventes', 'Finance'].map((item, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-3 text-center">
                          <div className="text-xs text-gray-500 mb-1">{item}</div>
                          <div className="font-semibold text-gray-900">{Math.floor(Math.random() * 100)}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              14 modules pour gérer toute votre entreprise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une suite complète et intégrée pour optimiser chaque aspect de votre activité avec l'intelligence artificielle
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <module.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {module.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Propulsé par l'intelligence artificielle
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des fonctionnalités avancées qui transforment vos données en décisions stratégiques
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Analyse prédictive',
                description: 'Anticipez les ventes, la saisonnalité et les tendances du marché avec des algorithmes d\'IA avancés',
                color: 'blue'
              },
              {
                title: 'Automatisation intelligente',
                description: 'Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment',
                color: 'orange'
              },
              {
                title: 'Recommandations personnalisées',
                description: 'Recevez des suggestions contextuelles pour optimiser vos processus métier',
                color: 'blue'
              },
              {
                title: 'Détection d\'anomalies',
                description: 'Identifiez automatiquement les irrégularités et les risques potentiels',
                color: 'orange'
              },
              {
                title: 'Scoring intelligent',
                description: 'Évaluez automatiquement les opportunités, clients et fournisseurs',
                color: 'blue'
              },
              {
                title: 'Tableaux prédictifs',
                description: 'Visualisez les tendances futures et simulez différents scénarios',
                color: 'orange'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <Check className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-blue-50 mb-8">
            Rejoignez des centaines d'entreprises qui font confiance à COREZA pour gérer leur activité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors font-medium shadow-lg">
              Essai gratuit 30 jours
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Contacter un expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 25C15 25 10 15 25 15C40 15 35 35 50 35C65 35 60 15 75 15C90 15 85 25 85 25C85 25 90 35 75 35C60 35 65 15 50 15C35 15 40 35 25 35C10 35 15 25 15 25Z" fill="white" />
                </svg>
                <span className="ml-2 text-xl font-bold text-white">
                  <span className="text-blue-400">Core</span>
                  <span className="text-orange-400">za</span>
                </span>
              </div>
              <p className="text-sm">L'ERP intelligent qui grandit avec votre entreprise</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modules</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mises à jour</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Ressources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>2025 COREZA. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
