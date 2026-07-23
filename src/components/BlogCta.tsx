import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import { smooth } from "@/lib/motion";
import { BLOG_URL } from "@/data/nav";

/* Cross-link to my Linux blog. Mirrors the Contact CTA card (border-glow +
   bg-card/50) so it reads as a native part of the page, not a bolted-on banner. */
const BlogCta = () => {
  return (
    <section className="py-24">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto text-center p-10 rounded-2xl border-glow bg-card/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smooth()}
        >
          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm">
            <BookOpen className="w-4 h-4" />
            &lt;blog&gt;
          </span>
          <h2 className="text-2xl md:text-3xl font-bold font-mono mt-2 mb-4">
            I Write About{" "}
            <span className="text-gradient">Linux &amp; the Command Line</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Beyond the projects, I keep a personal blog where I write regularly
            about Linux, developer tooling, and hard-won lessons from the
            terminal — tutorials, deep dives, and notes from the field.
          </p>
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary hover:-translate-y-0.5 active:translate-y-0 transition-[transform,box-shadow] duration-200 group"
          >
            Read My Blog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogCta;
