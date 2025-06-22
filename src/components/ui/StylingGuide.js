"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiCheck, FiEye, FiCode } from 'react-icons/fi';

export default function StylingGuide() {
  const [copiedCode, setCopiedCode] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const CodeBlock = ({ code, title }) => (
    <div className="bg-gray-900 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-mono">{title}</span>
        <button
          onClick={() => copyToClipboard(code, title)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {copiedCode === title ? <FiCheck className="w-4 h-4" /> : <FiCopy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="text-gray-200 text-sm overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  return (
    <div className="container-custom section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-6">
          <span className="gradient-text">Styling Guide</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A comprehensive guide to all available styling utilities, components, and design patterns in your portfolio.
        </p>
      </motion.div>

      {/* Buttons Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Buttons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Primary Button</h3>
            <button className="btn-primary mb-4">Primary Button</button>
            <CodeBlock 
              code={'className="btn-primary"'}
              title="Primary Button Class"
            />
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Secondary Button</h3>
            <button className="btn-secondary mb-4">Secondary Button</button>
            <CodeBlock 
              code={'className="btn-secondary"'}
              title="Secondary Button Class"
            />
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Gradient Button</h3>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Gradient Button
            </button>
            <CodeBlock 
              code={'className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"'}
              title="Gradient Button Classes"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Glass Card</h3>
            <p className="text-gray-600 mb-4">A beautiful glass morphism card with backdrop blur.</p>
            <CodeBlock 
              code={'className="card"'}
              title="Glass Card Class"
            />
          </div>

          <div className="card-dark p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Dark Glass Card</h3>
            <p className="text-gray-300 mb-4">Perfect for dark themes and overlays.</p>
            <CodeBlock 
              code={'className="card-dark"'}
              title="Dark Glass Card Class"
            />
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Solid Card</h3>
            <p className="text-gray-600 mb-4">Traditional solid background card.</p>
            <CodeBlock 
              code={'className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"'}
              title="Solid Card Classes"
            />
          </div>
        </div>
      </section>

      {/* Gradients Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Gradients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="gradient-bg rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Light Gradient</h3>
            <p className="text-gray-700 mb-4">Soft, light gradient background.</p>
            <CodeBlock 
              code={'className="gradient-bg"'}
              title="Light Gradient Class"
            />
          </div>

          <div className="gradient-bg-dark rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Dark Gradient</h3>
            <p className="text-gray-300 mb-4">Rich, dark gradient background.</p>
            <CodeBlock 
              code={'className="gradient-bg-dark"'}
              title="Dark Gradient Class"
            />
          </div>

          <div className="gradient-bg-aurora rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">Aurora Gradient</h3>
            <p className="text-gray-100 mb-4">Vibrant, colorful gradient.</p>
            <CodeBlock 
              code={'className="gradient-bg-aurora"'}
              title="Aurora Gradient Class"
            />
          </div>
        </div>
      </section>

      {/* Text Effects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Text Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-2xl font-bold gradient-text mb-4">Gradient Text</h3>
            <p className="text-gray-600 mb-4">Beautiful gradient text effect.</p>
            <CodeBlock 
              code={'className="gradient-text"'}
              title="Gradient Text Class"
            />
          </div>

          <div className="card p-6">
            <h3 className="text-2xl font-bold text-shadow-lg mb-4">Text Shadow</h3>
            <p className="text-gray-600 mb-4">Text with subtle shadow effect.</p>
            <CodeBlock 
              code={'className="text-shadow-lg"'}
              title="Text Shadow Class"
            />
          </div>
        </div>
      </section>

      {/* Animations Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6">
            <div className="w-16 h-16 bg-purple-500 rounded-full animate-float mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-4 text-center">Float Animation</h3>
            <CodeBlock 
              code={'className="animate-float"'}
              title="Float Animation Class"
            />
          </div>

          <div className="card p-6">
            <div className="w-16 h-16 bg-pink-500 rounded-full animate-glow mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-4 text-center">Glow Animation</h3>
            <CodeBlock 
              code={'className="animate-glow"'}
              title="Glow Animation Class"
            />
          </div>

          <div className="card p-6">
            <div className="w-16 h-16 bg-blue-500 rounded-full animate-pulse-slow mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold mb-4 text-center">Slow Pulse</h3>
            <CodeBlock 
              code={'className="animate-pulse-slow"'}
              title="Slow Pulse Animation Class"
            />
          </div>
        </div>
      </section>

      {/* Interactive Effects Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Interactive Effects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-6 hover-lift cursor-pointer">
            <h3 className="text-lg font-semibold mb-4">Hover Lift</h3>
            <p className="text-gray-600 mb-4">Card lifts on hover.</p>
            <CodeBlock 
              code={'className="hover-lift"'}
              title="Hover Lift Class"
            />
          </div>

          <div className="card p-6 hover-scale cursor-pointer">
            <h3 className="text-lg font-semibold mb-4">Hover Scale</h3>
            <p className="text-gray-600 mb-4">Card scales on hover.</p>
            <CodeBlock 
              code={'className="hover-scale"'}
              title="Hover Scale Class"
            />
          </div>

          <div className="card p-6 hover-glow cursor-pointer">
            <h3 className="text-lg font-semibold mb-4">Hover Glow</h3>
            <p className="text-gray-600 mb-4">Card glows on hover.</p>
            <CodeBlock 
              code={'className="hover-glow"'}
              title="Hover Glow Class"
            />
          </div>
        </div>
      </section>

      {/* Layout Utilities Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Layout Utilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Container Custom</h3>
            <p className="text-gray-600 mb-4">Responsive container with custom max-width and padding.</p>
            <CodeBlock 
              code={'className="container-custom"'}
              title="Container Custom Class"
            />
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-4">Section Padding</h3>
            <p className="text-gray-600 mb-4">Consistent section padding for better spacing.</p>
            <CodeBlock 
              code={'className="section-padding"'}
              title="Section Padding Class"
            />
          </div>
        </div>
      </section>

      {/* Background Patterns Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Background Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-pattern-dots rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Dots Pattern</h3>
            <p className="text-gray-700 mb-4">Subtle dots background pattern.</p>
            <CodeBlock 
              code={'className="bg-pattern-dots"'}
              title="Dots Pattern Class"
            />
          </div>

          <div className="bg-pattern-grid rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-4">Grid Pattern</h3>
            <p className="text-gray-700 mb-4">Clean grid background pattern.</p>
            <CodeBlock 
              code={'className="bg-pattern-grid"'}
              title="Grid Pattern Class"
            />
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Usage Tips</h2>
        <div className="card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Use glass effects sparingly for important elements</li>
                <li>• Combine hover effects for better interactivity</li>
                <li>• Use gradient text for headings and CTAs</li>
                <li>• Apply animations to draw attention to key content</li>
                <li>• Use consistent spacing with section-padding utilities</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Performance Tips</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Limit the number of animated elements on screen</li>
                <li>• Use transform and opacity for smooth animations</li>
                <li>• Consider reducing motion for accessibility</li>
                <li>• Use will-change CSS property for complex animations</li>
                <li>• Optimize backdrop-blur usage on mobile devices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 