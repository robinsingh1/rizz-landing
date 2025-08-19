export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="text-2xl font-bold">RIZZ</div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
          <a href="#download" className="hover:text-purple-400 transition-colors">Download</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Transform Your<br />
          <span className="text-purple-500">Dating Journey</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
          RIZZ is the AI assistant that generates engaging openers and helps you build meaningful connections
        </p>
        
        {/* Rating */}
        <div className="flex items-center mb-8">
          <div className="flex text-yellow-400 mr-2">
            {'★'.repeat(5)}
          </div>
          <span className="text-gray-300">4.8/5 from 51,255 ratings</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Download for iOS
          </button>
          <button className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-colors">
            Download for Android
          </button>
        </div>

        {/* App Preview */}
        <div className="w-80 h-96 bg-gray-800 rounded-3xl flex items-center justify-center">
          <div className="text-gray-400">App Screenshot</div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-purple-500">RIZZ</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                🤖
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Messages</h3>
              <p className="text-gray-300">
                Generate personalized, engaging conversation starters that match your style
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-4">Instant Suggestions</h3>
              <p className="text-gray-300">
                Get real-time conversation ideas and response suggestions
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-4">Better Matches</h3>
              <p className="text-gray-300">
                Improve your success rate with data-driven conversation strategies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Level Up Your Game?
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Join thousands of users who have transformed their dating experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-colors">
              Download Now
            </button>
            <button className="border border-purple-600 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl font-bold mb-4 md:mb-0">RIZZ</div>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
