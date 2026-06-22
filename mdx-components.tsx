import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold tracking-tight text-white mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-white mt-10 mb-3">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-zinc-300 mt-8 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-base leading-7 text-zinc-400 mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 mb-4 space-y-1 text-zinc-400">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1 text-zinc-400">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="text-base leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-accent pl-4 italic text-zinc-500 my-4">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-white/5 text-accent px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-black/40 text-zinc-300 p-4 rounded-lg overflow-x-auto mb-4 text-sm border border-white/5">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-white/10 text-sm">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="px-4 py-2 text-left font-semibold text-zinc-300 bg-white/5">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2 text-zinc-400 border-t border-white/5">
      {children}
    </td>
  ),
  hr: () => <hr className="my-8 border-white/10" />,
  strong: ({ children }) => (
    <strong className="font-semibold text-white">{children}</strong>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
