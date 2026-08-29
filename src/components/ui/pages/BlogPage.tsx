import { motion } from 'motion/react';
import { Badge } from '../../ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/button';
import { ImageWithFallback } from '../../figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

export function BlogPage() {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt:
        'Learn how to structure and scale React applications effectively using modern patterns and architecture principles.',
      date: 'Nov 10, 2025',
      readTime: '8 min read',
      image:
        'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?auto=format&fit=crop&w=1080&q=80',
      category: 'Development',
      tags: ['React', 'Architecture', 'Best Practices'],
    },
    {
      id: 2,
      title: 'The Art of UI Animation: Creating Delightful Experiences',
      excerpt:
        'Explore how thoughtful animations can enhance user experience and make your applications more engaging.',
      date: 'Nov 5, 2025',
      readTime: '6 min read',
      image:
        'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?auto=format&fit=crop&w=1080&q=80',
      category: 'Design',
      tags: ['Animation', 'UX', 'Design'],
    },
    {
      id: 3,
      title: 'TypeScript Tips for Better Code Quality',
      excerpt:
        'Discover advanced TypeScript techniques that will help you write more maintainable and type-safe code.',
      date: 'Oct 28, 2025',
      readTime: '10 min read',
      image:
        'https://images.unsplash.com/photo-1603351130949-476794ec3dff?auto=format&fit=crop&w=1080&q=80',
      category: 'Development',
      tags: ['TypeScript', 'Code Quality', 'Tips'],
    },
    {
      id: 4,
      title: 'Modern CSS: Grid and Flexbox Mastery',
      excerpt:
        'Master modern CSS layout techniques to create responsive, flexible designs without the hassle.',
      date: 'Oct 20, 2025',
      readTime: '7 min read',
      image:
        'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=1080&q=80',
      category: 'CSS',
      tags: ['CSS', 'Layout', 'Responsive'],
    },
    {
      id: 5,
      title: 'Optimizing Web Performance: A Complete Guide',
      excerpt:
        "Learn practical strategies to improve your website's performance and deliver faster user experiences.",
      date: 'Oct 15, 2025',
      readTime: '12 min read',
      image:
        'https://images.unsplash.com/photo-1621743018966-29194999d736?auto=format&fit=crop&w=1080&q=80',
      category: 'Performance',
      tags: ['Performance', 'Optimization', 'Web'],
    },
    {
      id: 6,
      title: 'Design Systems: Building Consistency at Scale',
      excerpt:
        'How to create and maintain a design system that scales with your product and team.',
      date: 'Oct 8, 2025',
      readTime: '9 min read',
      image:
        'https://images.unsplash.com/photo-1750056393331-82e69d28c9d9?auto=format&fit=crop&w=1080&q=80',
      category: 'Design',
      tags: ['Design System', 'UI', 'Consistency'],
    },
  ];

  const categories = [
    'All',
    'Development',
    'Design',
    'CSS',
    'Performance',
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="mb-4 text-4xl md:text-5xl font-bold">
            Blog
          </h1>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights about web development,
            design, and technology.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={
                category === 'All'
                  ? 'rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                  : 'rounded-full hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-300'
              }
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl overflow-hidden border border-indigo-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-full min-h-[420px]">
                <ImageWithFallback
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <Badge className="absolute top-5 left-5 bg-indigo-600 text-white">
                  Featured
                </Badge>
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge
                  variant="secondary"
                  className="w-fit mb-4 bg-white"
                >
                  {posts[0].category}
                </Badge>

                <h2 className="mb-4 text-2xl md:text-3xl font-bold">
                  {posts[0].title}
                </h2>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{posts[0].date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>

                <Button className="w-fit bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-full">
                  Read Article
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 bg-white"
                >
                  {post.category}
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-600 mb-5 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-5 text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span className="text-sm">{post.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-slate-100 text-slate-600 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-indigo-50 group-hover:text-indigo-700"
                >
                  Read More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-center text-white shadow-xl"
        >
          <h2 className="mb-4 text-white text-3xl font-bold">
            Subscribe to My Newsletter
          </h2>

          <p className="mb-8 text-indigo-100 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and insights delivered
            straight to your inbox. No spam, unsubscribe anytime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            />

            <Button className="bg-white text-indigo-600 hover:bg-slate-100 rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
