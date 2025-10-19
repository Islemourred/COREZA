import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import { translations } from "./i18n/translations";
import { corezaLogos } from "./assets/logos";
import { AnimatedStat } from "./components/AnimatedStat";
import { AnimatedNumber } from "./components/AnimatedNumber";
import { AnimatedChart } from "./components/AnimatedChart";
import {
  ArrowRight,
  Menu,
  X,
  BarChart3,
  Users,
  ShoppingCart,
  CreditCard,
  Package,
  Warehouse,
  ClipboardList,
  Factory,
  FileCheck,
  FolderOpen,
  Calendar,
  HeadphonesIcon,
  Building,
  Layout,
  Moon,
  Sun,
  Shield,
  Lock,
  Database,
  Zap,
  Globe,
  TrendingUp,
  Award,
  Star,
  Play,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  ExternalLink,
  CheckCircle,
  Clock,
  Users2,
  Target,
  Lightbulb,
  Settings,
} from "lucide-react";
import { useState, useEffect } from "react";

function AppContent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const modules = [
    {
      icon: Users,
      name: "CRM",
      description: "Gestion complète des clients, pipeline de vente intelligent avec IA, suivi des interactions et rapports de visite automatiques",
      color: "blue",
    },
    {
      icon: ShoppingCart,
      name: "Ventes",
      description: "Devis intelligents, calcul de marge en temps réel, gestion des commandes et facturation automatisée",
      color: "orange",
    },
    {
      icon: CreditCard,
      name: "Point de Vente",
      description: "Interface POS moderne, synchronisation automatique des stocks et gestion multi-caissiers",
      color: "green",
    },
    {
      icon: BarChart3,
      name: "Finance",
      description: "Trésorerie en temps réel, prévisions financières, déclarations mensuelles et analyse prédictive par IA",
      color: "purple",
    },
    {
      icon: Package,
      name: "Achats",
      description: "Gestion des fournisseurs, comparaison de devis, suivi des réceptions et calcul automatique des retenues",
      color: "blue",
    },
    {
      icon: Warehouse,
      name: "Entrepôts",
      description: "Gestion multi-entrepôts, transferts intelligents, optimisation des réassorts par IA",
      color: "orange",
    },
    {
      icon: ClipboardList,
      name: "Inventaire",
      description: "Inventaire en temps réel, coût moyen pondéré automatique, prévisions de rupture de stock",
      color: "green",
    },
    {
      icon: Factory,
      name: "Production",
      description: "Planification intelligente, analyse des coûts, simulation de capacité par IA",
      color: "purple",
    },
    {
      icon: FileCheck,
      name: "Approbations",
      description: "Workflow personnalisable, validation multi-niveaux, prédiction des délais par IA",
      color: "blue",
    },
    {
      icon: FolderOpen,
      name: "GED",
      description: "Archivage numérique centralisé, classement automatique par OCR et recherche intelligente",
      color: "orange",
    },
    {
      icon: Calendar,
      name: "Ressources Humaines",
      description: "Gestion des contrats, plannings flexibles, fiches de paie automatiques, analyse de satisfaction",
      color: "green",
    },
    {
      icon: HeadphonesIcon,
      name: "Service d'assistance",
      description: "Ticketing intelligent, attribution automatique, priorisation par IA et réponses prédictives",
      color: "purple",
    },
    {
      icon: Building,
      name: "Hébergements",
      description: "Gestion hôtelière complète, check-in/out automatiques, yield management par IA",
      color: "blue",
    },
    {
      icon: Layout,
      name: "Tableaux de bord",
      description: "Business Intelligence avancée, KPIs personnalisables, heatmaps et benchmarking sectoriel",
      color: "orange",
    },
  ];

  const stats = [
    { 
      number: "10,000+", 
      label: t.stats.customers, 
      icon: Users2, 
      actualNumber: 10000, 
      suffix: "+",
      delay: 0
    },
    { 
      number: "50+", 
      label: t.stats.countries, 
      icon: Globe, 
      actualNumber: 50, 
      suffix: "+",
      delay: 200
    },
    { 
      number: "99.9%", 
      label: t.stats.uptime, 
      icon: Clock, 
      actualNumber: 99.9, 
      suffix: "%",
      decimals: 1,
      delay: 400
    },
    { 
      number: "98%", 
      label: t.stats.satisfaction, 
      icon: Star, 
      actualNumber: 98, 
      suffix: "%",
      delay: 600
    },
  ];

  const integrations = [
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png" },
    { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png" },
    { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_black.svg/1200px-Shopify_logo_black.svg.png" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png" },
    { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" },
    { name: "QuickBooks", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Intuit_QuickBooks_logo.svg/1200px-Intuit_QuickBooks_logo.svg.png" },
    { name: "Xero", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Xero_logo.svg/1200px-Xero_logo.svg.png" },
  ];

  const testimonials = [
    {
      content: "COREZA a transformé notre gestion interne. L'interface est intuitive et l'IA nous aide à prendre de meilleures décisions.",
      author: "Marie Dubois",
      role: "Directrice Générale",
      company: "TechCorp",
      avatar: "MD",
    },
    {
      content: "L'intégration avec nos outils existants s'est faite sans problème. Nous avons gagné 40% de temps sur nos processus.",
      author: "Ahmed Benali",
      role: "Directeur Financier",
      company: "Innovate Solutions",
      avatar: "AB",
    },
    {
      content: "Le support client est exceptionnel et la plateforme évolue constamment. C'est exactement ce dont nous avions besoin.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "Global Dynamics",
      avatar: "SJ",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === "dark" ? "bg-brand-neutral-900 text-white" : "bg-white text-brand-neutral-900"
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === "dark" 
            ? "bg-brand-neutral-900/95 backdrop-blur-md border-b border-brand-neutral-800" 
            : "bg-white/95 backdrop-blur-md border-b border-brand-neutral-200"
          : "bg-transparent"
      }`}>
        <div className="container-max">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={theme === 'dark' ? corezaLogos.dark : corezaLogos.light} 
                alt="COREZA Logo"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#modules" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.modules}
              </a>
              <a href="#features" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.features}
              </a>
              <a href="#security" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.security}
              </a>
              <a href="#integrations" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.integrations}
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.pricing}
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.contact}
              </a>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl transition-all duration-200 ${
                  theme === "dark" 
                    ? "bg-brand-neutral-800 hover:bg-brand-neutral-700 text-brand-secondary-400" 
                    : "bg-brand-neutral-100 hover:bg-brand-neutral-200 text-brand-neutral-600"
                }`}
              >
                {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </button>
              
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "fr" | "en" | "ar")}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  theme === "dark"
                    ? "bg-brand-neutral-800 border-brand-neutral-700 text-white"
                    : "bg-brand-neutral-100 border-brand-neutral-200 text-brand-neutral-700"
                } border focus:outline-none focus:ring-2 focus:ring-brand-primary-500`}
              >
                <option value="fr">🇫🇷 FR</option>
                <option value="en">🇬🇧 EN</option>
                <option value="ar">🇩🇿 AR</option>
              </select>

              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-10 px-4 py-2">
                {t.nav.demo}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-brand-neutral-200 dark:border-brand-neutral-800 bg-white dark:bg-brand-neutral-900">
            <div className="container-max py-6 space-y-4">
              <a href="#modules" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.modules}
              </a>
              <a href="#features" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.features}
              </a>
              <a href="#security" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.security}
              </a>
              <a href="#integrations" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.integrations}
              </a>
              <a href="#pricing" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.pricing}
              </a>
              <a href="#contact" className="block text-sm font-medium hover:text-brand-primary-600 transition-colors">
                {t.nav.contact}
              </a>
              <div className="flex items-center space-x-4 pt-4 border-t border-brand-neutral-200 dark:border-brand-neutral-800">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-xl transition-all duration-200 ${
                    theme === "dark" 
                      ? "bg-brand-neutral-800 hover:bg-brand-neutral-700 text-brand-secondary-400" 
                      : "bg-brand-neutral-100 hover:bg-brand-neutral-200 text-brand-neutral-600"
                  }`}
                >
                  {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                </button>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as "fr" | "en" | "ar")}
                  className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    theme === "dark"
                      ? "bg-brand-neutral-800 border-brand-neutral-700 text-white"
                      : "bg-brand-neutral-100 border-brand-neutral-200 text-brand-neutral-700"
                  } border focus:outline-none focus:ring-2 focus:ring-brand-primary-500`}
                >
                  <option value="fr">🇫🇷 FR</option>
                  <option value="en">🇬🇧 EN</option>
                  <option value="ar">🇩🇿 AR</option>
                </select>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-10 px-4 py-2 flex-1">
                  {t.nav.demo}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-brand-neutral-900">
        {/* Minimalistic Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-neutral-100 dark:bg-brand-neutral-800/50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-brand-neutral-200 dark:bg-brand-neutral-700/30 rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-primary-50 dark:bg-brand-primary-900/20 text-brand-primary-600 dark:text-brand-primary-400 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  {t.hero.subtitle}
                </div>
                <h1 className="text-5xl lg:text-7xl font-display font-bold hero-title text-balance">
                  {t.hero.title}
                </h1>
                <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed max-w-2xl">
                  {t.hero.desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-brand-primary-600 text-white hover:bg-brand-primary-700 h-12 px-8 text-lg group">
                  {t.hero.start}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 text-lg group">
                  <Play className="mr-2 w-5 h-5" />
                  {t.hero.schedule}
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-brand-neutral-500 dark:text-brand-neutral-400">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  {t.hero.trusted}
                </div>
              </div>
            </div>

            {/* Right Content - Minimalistic Dashboard Preview */}
            <div className="relative animate-slide-in-right">
              <div className="relative">
                {/* Main Dashboard */}
                <div className="bg-white dark:bg-brand-neutral-900 rounded-2xl shadow-medium p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500 border border-brand-neutral-200 dark:border-brand-neutral-700">
                  <div className="space-y-6">
                    {/* Clean Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-brand-neutral-900 dark:bg-white rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-white dark:text-brand-neutral-900" />
                        </div>
                        <div>
                          <div className="text-lg font-semibold text-brand-neutral-900 dark:text-white">Dashboard</div>
                          <div className="text-sm text-brand-neutral-500 dark:text-brand-neutral-400">Vue d'ensemble</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-brand-neutral-600 dark:text-brand-neutral-300">En ligne</span>
                      </div>
                    </div>

                    {/* Clean KPI Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-brand-neutral-50 dark:bg-brand-neutral-800 rounded-xl p-5 border border-brand-neutral-200 dark:border-brand-neutral-700">
                        <div className="flex items-center justify-between mb-3">
                          <TrendingUp className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400" />
                          <div className="text-xs text-green-600 font-medium">+12.5%</div>
                        </div>
                        <div className="text-2xl font-bold text-brand-neutral-900 dark:text-white mb-1">
                          <AnimatedNumber 
                            end={2847500} 
                            prefix="€" 
                            duration={3000} 
                            delay={500}
                            className="text-2xl font-bold text-brand-neutral-900 dark:text-white"
                          />
                        </div>
                        <div className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400">Chiffre d'affaires</div>
                      </div>
                      <div className="bg-brand-neutral-50 dark:bg-brand-neutral-800 rounded-xl p-5 border border-brand-neutral-200 dark:border-brand-neutral-700">
                        <div className="flex items-center justify-between mb-3">
                          <Users className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400" />
                          <div className="text-xs text-blue-600 font-medium">+8.2%</div>
                        </div>
                        <div className="text-2xl font-bold text-brand-neutral-900 dark:text-white mb-1">
                          <AnimatedNumber 
                            end={1247} 
                            duration={2500} 
                            delay={800}
                            className="text-2xl font-bold text-brand-neutral-900 dark:text-white"
                          />
                        </div>
                        <div className="text-sm text-brand-neutral-600 dark:text-brand-neutral-400">Clients actifs</div>
                      </div>
                    </div>

                    {/* Animated Chart Area */}
                    <div className="bg-brand-neutral-50 dark:bg-brand-neutral-800 rounded-xl p-6 border border-brand-neutral-200 dark:border-brand-neutral-700">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm font-semibold text-brand-neutral-900 dark:text-white">Performance</div>
                          <div className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">Évolution mensuelle</div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-xs text-green-600 font-medium">+24.3%</div>
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Animated Chart */}
                      <div className="flex items-center justify-center">
                        <AnimatedChart
                          data={[
                            { month: 'Jan', value: 65 },
                            { month: 'Fév', value: 78 },
                            { month: 'Mar', value: 85 },
                            { month: 'Avr', value: 92 },
                            { month: 'Mai', value: 88 },
                            { month: 'Jun', value: 95 },
                            { month: 'Jul', value: 100 }
                          ]}
                          height={80}
                          width={280}
                          color={theme === 'dark' ? '#FFFFFF' : '#1F2937'}
                          delay={1000}
                        />
                      </div>
                      
                      {/* Chart Statistics */}
                      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-brand-neutral-900 dark:text-white">
                            <AnimatedNumber 
                              end={92.3} 
                              suffix="%" 
                              decimals={1}
                              duration={2000}
                              delay={1500}
                            />
                          </div>
                          <div className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">Moyenne</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-green-600">
                            <AnimatedNumber 
                              end={100} 
                              suffix="%" 
                              duration={2000}
                              delay={1800}
                            />
                          </div>
                          <div className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">Pic</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-blue-600">
                            <AnimatedNumber 
                              end={35} 
                              suffix="%" 
                              duration={2000}
                              delay={2100}
                            />
                          </div>
                          <div className="text-xs text-brand-neutral-500 dark:text-brand-neutral-400">Croissance</div>
                        </div>
                      </div>
                    </div>

                    {/* Clean Module Navigation */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-brand-neutral-50 dark:bg-brand-neutral-800 rounded-lg p-3 text-center border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-sm transition-all duration-300 cursor-pointer">
                        <Users className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400 mx-auto mb-2" />
                        <div className="text-xs font-medium text-brand-neutral-900 dark:text-white">CRM</div>
                      </div>
                      <div className="bg-brand-neutral-50 dark:bg-brand-neutral-800 rounded-lg p-3 text-center border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-sm transition-all duration-300 cursor-pointer">
                        <ShoppingCart className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400 mx-auto mb-2" />
                        <div className="text-xs font-medium text-brand-neutral-900 dark:text-white">Ventes</div>
                      </div>
                      <div className="bg-brand-neutral-50 dark:bg-brand-neutral-800 rounded-lg p-3 text-center border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-sm transition-all duration-300 cursor-pointer">
                        <Package className="w-5 h-5 text-brand-neutral-600 dark:text-brand-neutral-400 mx-auto mb-2" />
                        <div className="text-xs font-medium text-brand-neutral-900 dark:text-white">Stock</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Minimalistic Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-neutral-900 dark:bg-white rounded-xl shadow-medium flex items-center justify-center animate-bounce-subtle">
                  <Award className="w-6 h-6 text-white dark:text-brand-neutral-900" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-lg shadow-medium flex items-center justify-center animate-bounce-subtle animation-delay-400">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white dark:bg-brand-neutral-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 title-spacing text-balance">
              {t.stats.title}
            </h2>
            <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto">
              {t.stats.subtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
                actualNumber={stat.actualNumber}
                suffix={stat.suffix}
                decimals={stat.decimals}
                delay={stat.delay}
                duration={2500}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="section-padding gradient-bg">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 title-spacing text-balance">
              {t.modules.title}
            </h2>
            <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto mb-8">
              {t.modules.subtitle}
            </p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              {t.modules.cta}
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-white dark:bg-brand-neutral-800 rounded-xl p-6 group cursor-pointer border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-md transition-all duration-300">
                <div className={`w-14 h-14 bg-brand-neutral-100 dark:bg-brand-neutral-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand-neutral-200 dark:border-brand-neutral-600`}>
                  <module.icon className="w-7 h-7 text-brand-neutral-700 dark:text-brand-neutral-300" />
                </div>
                <h3 className="text-lg font-semibold text-brand-neutral-900 dark:text-white mb-2 group-hover:text-brand-primary-600 dark:group-hover:text-brand-primary-400 transition-colors">
                  {module.name}
                </h3>
                <p className="text-sm text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white dark:bg-brand-neutral-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.features.title}
            </h2>
            <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Analyse prédictive",
                description: "Anticipez les ventes, la saisonnalité et les tendances du marché avec des algorithmes d'IA avancés",
                color: "blue",
              },
              {
                icon: Settings,
                title: "Automatisation intelligente",
                description: "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte vraiment",
                color: "orange",
              },
              {
                icon: Target,
                title: "Recommandations personnalisées",
                description: "Recevez des suggestions contextuelles pour optimiser vos processus métier",
                color: "green",
              },
              {
                icon: Shield,
                title: "Détection d'anomalies",
                description: "Identifiez automatiquement les irrégularités et les risques potentiels",
                color: "purple",
              },
              {
                icon: TrendingUp,
                title: "Scoring intelligent",
                description: "Évaluez automatiquement les opportunités, clients et fournisseurs",
                color: "blue",
              },
              {
                icon: BarChart3,
                title: "Tableaux prédictifs",
                description: "Visualisez les tendances futures et simulez différents scénarios",
                color: "orange",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-brand-neutral-800 rounded-xl p-8 group border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-brand-neutral-100 dark:bg-brand-neutral-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-brand-neutral-200 dark:border-brand-neutral-600">
                  <feature.icon className="w-6 h-6 text-brand-neutral-700 dark:text-brand-neutral-300" />
                </div>
                <h3 className="text-xl font-semibold text-brand-neutral-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="section-padding gradient-bg">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 text-balance">
                {t.security.title}
              </h2>
              <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-300 mb-8 leading-relaxed">
                {t.security.subtitle}
              </p>

              <div className="space-y-6">
                {[
                  { icon: Lock, title: t.security.encryption },
                  { icon: Shield, title: t.security.compliance },
                  { icon: Database, title: t.security.backup },
                  { icon: Clock, title: t.security.monitoring },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-brand-primary-500 to-brand-secondary-500 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-brand-neutral-900 dark:text-white">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-brand-neutral-800 rounded-3xl shadow-large p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-brand-neutral-900 dark:text-white mb-2">
                      Sécurité Certifiée
                    </h3>
                    <p className="text-brand-neutral-600 dark:text-brand-neutral-300">
                      Vos données sont protégées par les standards les plus élevés de l'industrie
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-brand-neutral-50 dark:bg-brand-neutral-700 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">256-bit</div>
                      <div className="text-sm text-brand-neutral-600 dark:text-brand-neutral-300">Chiffrement</div>
                    </div>
                    <div className="text-center p-4 bg-brand-neutral-50 dark:bg-brand-neutral-700 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">99.9%</div>
                      <div className="text-sm text-brand-neutral-600 dark:text-brand-neutral-300">Disponibilité</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section - Creative Vertical Animation */}
      <section id="integrations" className="section-padding bg-white dark:bg-brand-neutral-900 relative overflow-hidden">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.integrations.title}
            </h2>
            <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto mb-8">
              {t.integrations.subtitle}
            </p>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              {t.integrations.cta}
              <ExternalLink className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Creative Vertical Logo Animation */}
          <div className="relative">
            <div className="flex justify-center items-center space-x-8 lg:space-x-16">
              {/* Left Column */}
              <div className="flex flex-col space-y-8 opacity-60">
                {integrations.slice(0, 4).map((integration, index) => (
                  <div key={index} className="group">
                    <div className="w-24 h-24 bg-white dark:bg-brand-neutral-800 rounded-xl flex items-center justify-center p-4 shadow-sm border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-md transition-all duration-500 hover:scale-105">
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="max-w-full max-h-full object-contain filter dark:invert group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Column - Main Focus */}
              <div className="flex flex-col space-y-8">
                {integrations.slice(4, 8).map((integration, index) => (
                  <div key={index + 4} className="group animate-pulse-slow">
                    <div className="w-32 h-32 bg-white dark:bg-brand-neutral-800 rounded-2xl flex items-center justify-center p-6 shadow-lg border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-xl transition-all duration-500 hover:scale-110 relative overflow-hidden">
                      {/* Subtle background animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary-500/5 to-brand-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="max-w-full max-h-full object-contain filter dark:invert group-hover:scale-110 transition-transform duration-300 relative z-10"
                      />
                      {/* Floating particles effect */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-brand-primary-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-subtle"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-brand-secondary-500 rounded-full opacity-0 group-hover:opacity-100 animate-bounce-subtle animation-delay-200"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-8 opacity-60">
                {integrations.slice(0, 4).reverse().map((integration, index) => (
                  <div key={index} className="group">
                    <div className="w-24 h-24 bg-white dark:bg-brand-neutral-800 rounded-xl flex items-center justify-center p-4 shadow-sm border border-brand-neutral-200 dark:border-brand-neutral-700 hover:shadow-md transition-all duration-500 hover:scale-105">
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="max-w-full max-h-full object-contain filter dark:invert group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Background Elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-primary-500/5 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-brand-secondary-500/5 rounded-full blur-2xl animate-pulse-slow animation-delay-400"></div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 text-sm text-brand-neutral-500 dark:text-brand-neutral-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Certified Partners</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-200"></div>
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-400"></div>
                <span>Secure Integration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding gradient-bg">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 text-balance">
              {t.testimonials.title}
            </h2>
            <p className="text-xl text-brand-neutral-600 dark:text-brand-neutral-300 max-w-3xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary-500 to-brand-secondary-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-neutral-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-brand-neutral-600 dark:text-brand-neutral-300">
                      {testimonial.role}
                    </div>
                    <div className="text-sm font-medium text-brand-primary-600 dark:text-brand-primary-400">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-brand-neutral-600 dark:text-brand-neutral-300 leading-relaxed italic mb-4">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-brand-primary-600 to-brand-secondary-500">
        <div className="container-max text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-6 text-balance">
            {t.cta.title}
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-brand-primary-600 hover:bg-gray-100 h-12 px-8 shadow-large group">
              {t.cta.start}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-primary-600 h-12 px-8 group">
              {t.cta.contact}
              <Phone className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-neutral-900 text-brand-neutral-300 py-16">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src={corezaLogos.dark} 
                  alt="COREZA Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-brand-neutral-400 mb-6 leading-relaxed">
                {t.footer.tagline}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-brand-neutral-800 rounded-xl flex items-center justify-center hover:bg-brand-primary-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-6">Produit</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Modules</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tarifs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mises à jour</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-6">Ressources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-white mb-6">Entreprise</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partenaires</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="border-t border-brand-neutral-800 pt-8 mb-8">
            <div className="max-w-md">
              <h4 className="font-semibold text-white mb-2">{t.footer.newsletter}</h4>
              <p className="text-brand-neutral-400 mb-4">{t.footer.newsletterDesc}</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 px-4 py-3 bg-brand-neutral-800 border border-brand-neutral-700 rounded-l-xl text-white placeholder-brand-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-primary-500"
                />
                <button className="px-6 py-3 bg-brand-primary-600 hover:bg-brand-primary-700 text-white rounded-r-xl transition-colors">
                  {t.footer.subscribe}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-brand-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-neutral-400 text-sm">
              {(t.footer as any).copyright || '2025 COREZA. Tous droits réservés.'}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-brand-neutral-400 hover:text-white text-sm transition-colors">
                Confidentialité
              </a>
              <a href="#" className="text-brand-neutral-400 hover:text-white text-sm transition-colors">
                Conditions
              </a>
              <a href="#" className="text-brand-neutral-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}