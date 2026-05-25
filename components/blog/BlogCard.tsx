import Image from "next/image";
import type { BlogPost } from "@/lib/blog-posts";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, oklch(0.12 0.02 60 / 0.45) 0%, transparent 60%)" }}
        />
      </div>

      {/* Content */}
      <div className="p-6 text-right">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3 justify-end">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold px-3 py-1 rounded-full border"
              style={{ color: "var(--earth)", borderColor: "var(--earth)", background: "oklch(0.97 0.01 145)" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          className="text-xl font-black mb-2 leading-tight transition-colors group-hover:opacity-75"
          style={{ color: "var(--deep-charcoal)" }}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "var(--muted-foreground)" }}>
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs" style={{ color: "var(--muted-foreground)" }}>
          <span className="font-semibold" style={{ color: "var(--earth)" }}>
            קרא עוד ←
          </span>
          <div className="flex items-center gap-3">
            <span>{post.readingTime}</span>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
