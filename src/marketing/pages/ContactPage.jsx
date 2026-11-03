import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Seo from "../components/Seo";
import { PageIntro, PhotoFrame } from "../components/Media";
import { WORKBENCH_LINKS } from "../../lib/site";
import { track } from "../../lib/analytics";

const TOPICS = [
  ["info", "Request information"],
  ["product", "Ask a product question"],
  ["issue", "Report an issue"],
  ["feature", "Suggest a feature"],
  ["sales", "Commercial Workshop sales"],
  ["pilot", "Pilot shop"],
];

export default function ContactPage() {
  const [params] = useSearchParams();
  const initial = TOPICS.some(([id]) => id === params.get("topic")) ? params.get("topic") : "info";
  const [topic, setTopic] = useState(initial);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  const endpoint = import.meta.env.VITE_FORMS_WEBHOOK_URL || "";

  const title = useMemo(() => TOPICS.find(([id]) => id === topic)?.[1] || "Contact", [topic]);

  const submit = async (event) => {
    event.preventDefault();
    const nextErrors = {};
    if (name.trim().length < 2) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email.";
    if (message.trim().length < 12) nextErrors.message = "Add a few more details.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    if (company) {
      setResult({ ok: false, text: "The message was not sent." });
      return;
    }

    track("contact_submit", { topic });

    if (!endpoint) {
      setResult({
        ok: false,
        text: "This marketing site has no form endpoint. The message was not delivered. Use the support form inside the Workbench, which is the existing submission path.",
      });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message, source: "marketing-contact" }),
      });
      if (!response.ok) throw new Error("Request failed");
      setResult({ ok: true, text: "The form endpoint accepted the message." });
      setMessage("");
    } catch {
      setResult({ ok: false, text: "The form endpoint did not accept the message. It was not delivered." });
    }
  };

  return (
    <>
      <Seo
        title="Contact RodStack Workbench"
        description="Ask about RodStack Workbench Assistant, report an issue, or request Commercial Workshop information. Messages send only when a form endpoint is configured."
        path="/contact"
      />
      <PageIntro kicker="Contact" title={title} lede="Tell us what you need from the workshop. If this page cannot reach a server, it will say so instead of pretending the note was received." />
      <div className="mx-auto grid max-w-page gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <form onSubmit={submit} className="relative space-y-4 rounded-3xl border border-slate-800 bg-workbench/80 p-5" noValidate>
          <label className="block text-sm">
            Topic
            <select className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2" value={topic} onChange={(event) => setTopic(event.target.value)}>
              {TOPICS.map(([id, label]) => (
                <option key={id} value={id}>{label}</option>
              ))}
            </select>
          </label>
          <Field label="Name" value={name} error={errors.name} onChange={setName} autoComplete="name" />
          <Field label="Email" value={email} error={errors.email} onChange={setEmail} type="email" autoComplete="email" />
          <label className="block text-sm">
            Message
            <textarea className="mt-1 min-h-32 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2" value={message} onChange={(event) => setMessage(event.target.value)} />
            {errors.message ? <span className="mt-1 block text-xs text-amber-200">{errors.message}</span> : null}
          </label>
          <div className="hidden" aria-hidden="true">
            <label>
              Company
              <input tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} />
            </label>
          </div>
          <button type="submit" className="rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950">
            Submit
          </button>
          {result ? <p className={`text-sm ${result.ok ? "text-emerald-300" : "text-amber-200"}`} role="status">{result.text}</p> : null}
          <p className="text-sm text-slate-400">
            Existing path: <a className="text-cyan-300" href={WORKBENCH_LINKS.support}>Workbench support form</a>
            {" · "}
            <a className="text-cyan-300" href={WORKBENCH_LINKS.featureRequest}>Feature request form</a>
          </p>
        </form>
        <PhotoFrame
          src="/marketing/photos/shop-workbench-panorama.webp"
          alt="Illustrated wide view of a custom rod bench."
          width="1800"
          height="730"
        />
      </div>
    </>
  );
}

function Field({ label, value, onChange, error, type = "text", autoComplete }) {
  return (
    <label className="block text-sm">
      {label}
      <input
        className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2"
        value={value}
        type={type}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <span className="mt-1 block text-xs text-amber-200">{error}</span> : null}
    </label>
  );
}
