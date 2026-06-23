export default function Contact() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-3 text-slate-700">Email: <a href="mailto:rvrnihal@gmail.com" className="text-blue-600">rvrnihal@gmail.com</a></p>
      <div className="mt-4">
        <form className="grid grid-cols-1 gap-3 max-w-xl">
          <input placeholder="Your name" className="p-3 border rounded" />
          <input placeholder="Your email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded h-28" />
          <button className="px-4 py-2 bg-slate-900 text-white rounded">Send</button>
        </form>
      </div>
    </section>
  )
}
