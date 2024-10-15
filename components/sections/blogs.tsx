import React from "react";
import SectionTitle from "@/components/SectionTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";

type BlogPost = {
  date: string;
  category: string;
  title: string;
  description: string;
  author: {
    img: string;
    name: string;
    role: string;
  };
};

const Blogs = () => {
  const blogs: BlogPost[] = [
    {
      date: "October 10, 2024",
      category: "Tech Leadership",
      title: "Building High-Performance Developer Teams",
      description:
        "Creating and scaling high-performance developer teams is key to delivering top-tier software solutions. Learn how to find, nurture, and retain the best talent in the industry.",
      author: {
        img: "/images/wbs22.jpg",
        name: "John Stevens",
        role: "CEO & Co-Founder",
      },
    },
    {
      date: "September 28, 2024",
      category: "Software Architecture",
      title: "Optimizing Software Scalability with Microservices",
      description:
        "Explore the advantages of microservices architecture and how it can help your software scale efficiently as your business grows.",
      author: {
        img: "/images/wbs11.jpg",
        name: "Rebecca Nguyen",
        role: "Lead Software Architect",
      },
    },
    {
      date: "August 16, 2024",
      category: "DevOps",
      title: "DevOps Strategies for Faster Software Delivery",
      description:
        "Discover how implementing DevOps practices accelerates your software delivery pipeline while maintaining the quality of your code.",
      author: {
        img: "/images/wbs33.jpg",
        name: "Carlos Mendez",
        role: "DevOps Engineer",
      },
    },
  ];

  return (
    <section
      id="blogs"
      className="relative flex flex-col gap-4 bg-slate-50 px-6 py-16 sm:px-10"
    >
      <div className="mx-auto flex max-w-[1220px] flex-col gap-5">
        <SectionTitle>
          <h1 className="text-center text-4xl leading-normal">
            Take expert advice from <br /> <strong>Our Blog</strong>
          </h1>
        </SectionTitle>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.title} />
          ))}
        </div>
        <Button
          variant="none"
          className="ml-auto items-center gap-1.5 bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text px-0 text-transparent"
        >
          See all <ArrowRight className="text-pink-700" size={16} />
        </Button>
      </div>
    </section>
  );
};

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  return (
    <div className="blog-card flex flex-col gap-5 border-b border-slate-200 py-5">
      {/* Date and Category */}
      <div className="flex flex-row items-center text-sm text-slate-500">
        <span>{blog.date}</span>
        <Dot size={24} className="text-slate-500" />
        <span className="rounded-md bg-slate-200 px-2 py-1 text-xs text-slate-500">
          {blog.category}
        </span>
      </div>

      <h3 className="text-lg font-semibold">{blog.title}</h3>

      <p className="leading-normal text-slate-500">{blog.description}</p>

      <div className="mt-auto flex items-center gap-5">
        <Avatar>
          <AvatarFallback>
            {blog.author.name.slice(0, 2).toUpperCase()}
          </AvatarFallback>
          <AvatarImage src={blog.author.img} className="object-cover" />
        </Avatar>
        <div className="">
          <p className="font-medium">{blog.author.name}</p>
          <p className="text-sm text-slate-500">{blog.author.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
