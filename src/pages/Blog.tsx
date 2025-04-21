
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Search, BookOpen, Tag, User, Calendar } from 'lucide-react';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Art of Leather Tanning: Traditional Methods Meet Modern Techniques",
    excerpt: "Explore how we combine centuries-old leather tanning methods with innovative approaches to create sustainable, premium quality products.",
    date: "2023-05-15",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    readTime: "5 min read",
    author: "Priya Mehta",
    category: "Craftsmanship"
  },
  {
    id: 2,
    title: "From Hide to Handbag: The Journey of Leather Craftsmanship",
    excerpt: "Follow the fascinating process of transforming raw leather into beautifully crafted bags, from selection of materials to final stitching.",
    date: "2023-04-22",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    readTime: "7 min read",
    author: "Vikram Patel",
    category: "Process"
  },
  {
    id: 3,
    title: "Sustainability in Leather Production: Our Commitment to Ethical Practices",
    excerpt: "Learn about our environmentally conscious approaches to leather manufacturing and how we're reducing our ecological footprint.",
    date: "2023-03-10",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    readTime: "6 min read",
    author: "Rajiv Sharma",
    category: "Sustainability"
  },
  {
    id: 4,
    title: "The Global Leather Market: Trends and Opportunities",
    excerpt: "An analysis of current trends in the global leather goods market and what they mean for manufacturers and consumers alike.",
    date: "2023-02-18",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    readTime: "8 min read",
    author: "Ananya Desai",
    category: "Industry"
  },
  {
    id: 5,
    title: "Caring for Your Leather: Tips to Extend the Life of Your Products",
    excerpt: "Practical advice on how to maintain and care for your leather bags and wallets to ensure they age beautifully and last for years.",
    date: "2023-01-25",
    imageUrl: "/lovable-uploads/d62b6da9-2c5d-4284-9cf7-2bede616c2ea.png",
    readTime: "4 min read",
    author: "Priya Mehta",
    category: "Maintenance"
  }
];

// Sample categories
const categories = [
  { name: "Craftsmanship", count: 8 },
  { name: "Sustainability", count: 5 },
  { name: "Industry", count: 4 },
  { name: "Process", count: 6 },
  { name: "Maintenance", count: 3 }
];

// Sample recent posts
const recentPosts = blogPosts.slice(0, 3);

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Blogs on Leather Good and Fashion | Deva International EXIM</title>
        <meta 
          name="description" 
          content="Explore the latest leather goods industry insight, news, craftsmanship insight, and sustainable leather trends on Deva International's fashion accessories blog."
        />
        <meta 
          name="keywords" 
          content="leather goods blog, leather fashion blog, leather goods industry news, leather craftsmanship insights, sustainable leather trends"
        />
      </Helmet>
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-leather-cream py-12 mb-10">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Our Blog</h1>
              <p className="text-xl text-leather-dark/80">
                Insights into leather craftsmanship, industry trends, and behind-the-scenes glimpses of our process.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 gap-10">
                {blogPosts.map((post) => {
                  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  });
                  
                  return (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <div className="flex flex-wrap items-center text-xs text-leather-dark/60 mb-3 gap-3">
                            <span className="flex items-center">
                              <Calendar className="h-3 w-3 mr-1" />
                              {formattedDate}
                            </span>
                            <span className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {post.author}
                            </span>
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime}
                            </span>
                            <span className="flex items-center">
                              <Tag className="h-3 w-3 mr-1" />
                              {post.category}
                            </span>
                          </div>
                          <h2 className="text-xl md:text-2xl font-serif font-medium mb-3">{post.title}</h2>
                          <p className="text-leather-dark/70 mb-4">{post.excerpt}</p>
                          <button className="inline-flex items-center text-leather hover:text-leather-dark font-medium transition-colors">
                            Read More
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
              
              {/* Pagination */}
              <div className="mt-10 flex justify-center">
                <div className="flex space-x-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-md bg-leather text-white">1</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-leather-tan/10">2</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-leather-tan/10">3</button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-leather-tan/10">→</button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-serif font-medium mb-4">Search</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="w-full py-2 pl-3 pr-10 border border-leather-tan/30 rounded-md focus:outline-none focus:ring-2 focus:ring-leather/50"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Search className="h-5 w-5 text-leather-dark/40" />
                    </button>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-serif font-medium mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button className="w-full text-left py-2 px-3 rounded-md hover:bg-leather-tan/10 transition-colors flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="bg-leather-tan/20 text-leather-dark text-xs rounded-full px-2 py-1">
                            {category.count}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-serif font-medium mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={`recent-${post.id}`} className="flex gap-3">
                        <div className="flex-shrink-0">
                          <BookOpen className="h-10 w-10 text-leather-light/70" />
                        </div>
                        <div>
                          <h4 className="font-medium text-leather-dark line-clamp-2 text-sm">{post.title}</h4>
                          <p className="text-xs text-leather mt-1">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="bg-leather p-6 rounded-lg shadow-md text-white">
                  <h3 className="text-xl font-serif font-medium mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-white/80 mb-4 text-sm">
                    Stay updated with our latest articles, product releases, and events.
                  </p>
                  <div className="space-y-3">
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full py-2 px-3 bg-white/10 border border-white/20 rounded-md placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                    />
                    <button className="w-full py-2 px-3 bg-white text-leather rounded-md font-medium hover:bg-white/90 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
