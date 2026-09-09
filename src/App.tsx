import { useState } from "react";
const posts=[{slug:"hello-cream",title:"Hello Cream",excerpt:"Write in Notion, publish in cream.",date:"2026-09-01"}];
export default function App(){
  const [q,setQ]=useState("");
  const filtered=posts.filter(p=>p.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <main className="bg-[#fdfcfa] min-h-screen text-[#1a1a1a]">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <h1 className="text-2xl font-light">notion-blog-engine</h1>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search posts" className="mt-4 w-full rounded-xl border border-[#ebe7e0] px-3 py-2 text-sm" />
        <div className="mt-6 space-y-3">
          {filtered.map(p=>(
            <article key={p.slug} className="rounded-2xl border border-[#ebe7e0] bg-white p-6">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-[#5a5754]">{p.excerpt}</p>
              <span className="text-xs text-[#9a9590]">{p.date}</span>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
