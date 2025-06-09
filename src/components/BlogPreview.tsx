import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title:
      "The Art of Leather Tanning: Traditional Methods Meet Modern Techniques",
    excerpt:
      "Explore how we combine centuries-old leather tanning methods with innovative approaches to create sustainable, premium quality products.",
    date: "2023-05-15",
    imageUrl: "images/blog-preview-manufacturing.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "From Hide to Handbag: The Journey of Leather Craftsmanship",
    excerpt:
      "Follow the fascinating process of transforming raw leather into beautifully crafted bags, from selection of materials to final stitching.",
    date: "2023-04-22",
    imageUrl: "images/blog-preview-craftsmanship.jpg",
    readTime: "7 min read",
  },
  {
    id: 3,
    title:
      "Sustainability in Leather Production: Our Commitment to Ethical Practices",
    excerpt:
      "Learn about our environmentally conscious approaches to leather manufacturing and how we're reducing our ecological footprint.",
    date: "2023-03-10",
    imageUrl: "images/custom-leather-crafting-process.jpg",
    readTime: "6 min read",
  },
];

const BlogCard = ({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100 + index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={() =>
        window.open("https://devainternational.medium.com", "_blank")
      }
    >
      <div className="overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-xs text-leather-dark/60 mb-3">
          <span>{formattedDate}</span>
          <span className="mx-2">•</span>
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-serif font-medium mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-leather-dark/70 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <button className="inline-flex items-center text-leather hover:text-leather-dark font-medium text-sm transition-colors">
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const BlogPreview = () => {
  return (
    <section className="py-20 bg-leather-tan/10">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1 mb-4 bg-leather/10 rounded-full">
            <p className="text-xs font-medium tracking-widest text-leather-dark">
              OUR JOURNAL
            </p>
          </span>
          <h2 className="section-title">Latest From Our Blog</h2>
          <p className="text-leather-dark/70 text-lg max-w-2xl mx-auto">
            Discover insights into the world of premium leather craftsmanship,
            industry trends, and behind-the-scenes glimpses of our manufacturing
            process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() =>
              window.open("https://devainternational.medium.com", "_blank")
            }
            className="btn-secondary inline-flex items-center"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
