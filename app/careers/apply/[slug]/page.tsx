"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Upload, CheckCircle2, Briefcase, DollarSign, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { getRoleBySlug } from "../../data";

const RESTRICTED_STATES = ["NY", "MA"];
const RESTRICTED_LABELS: Record<string, string> = { NY: "New York", MA: "Massachusetts" };

const US_STATES = [
  ["AL","Alabama"],["AK","Alaska"],["AZ","Arizona"],["AR","Arkansas"],["CA","California"],
  ["CO","Colorado"],["CT","Connecticut"],["DE","Delaware"],["FL","Florida"],["GA","Georgia"],
  ["HI","Hawaii"],["ID","Idaho"],["IL","Illinois"],["IN","Indiana"],["IA","Iowa"],
  ["KS","Kansas"],["KY","Kentucky"],["LA","Louisiana"],["ME","Maine"],["MD","Maryland"],
  ["MA","Massachusetts"],["MI","Michigan"],["MN","Minnesota"],["MS","Mississippi"],["MO","Missouri"],
  ["MT","Montana"],["NE","Nebraska"],["NV","Nevada"],["NH","New Hampshire"],["NJ","New Jersey"],
  ["NM","New Mexico"],["NY","New York"],["NC","North Carolina"],["ND","North Dakota"],["OH","Ohio"],
  ["OK","Oklahoma"],["OR","Oregon"],["PA","Pennsylvania"],["RI","Rhode Island"],["SC","South Carolina"],
  ["SD","South Dakota"],["TN","Tennessee"],["TX","Texas"],["UT","Utah"],["VT","Vermont"],
  ["VA","Virginia"],["WA","Washington"],["WV","West Virginia"],["WI","Wisconsin"],["WY","Wyoming"],
] as const;

const levelColors: Record<string, string> = {
  Senior: "text-emerald-400 bg-emerald-950/60 border-emerald-800/50",
  Mid: "text-sky-400 bg-sky-950/60 border-sky-800/50",
  Lead: "text-amber-400 bg-amber-950/60 border-amber-800/50",
  Junior: "text-zinc-400 bg-zinc-800/60 border-zinc-700/60",
};

function Section({ title, items, accent = false }: { title: string; items: string[]; accent?: boolean }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border border-zinc-800 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-4 bg-zinc-900 hover:bg-zinc-800/60 transition-colors text-left"
      >
        <h3 className="text-white font-bold text-base">{title}</h3>
        {open ? <ChevronUp size={16} className="text-zinc-500" /> : <ChevronDown size={16} className="text-zinc-500" />}
      </button>
      {open && (
        <ul className="px-6 py-5 space-y-3 bg-zinc-950">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm leading-relaxed">
              <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${accent ? "bg-zinc-600" : "bg-green-500"}`} />
              <span className={accent ? "text-zinc-500" : "text-zinc-300"}>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function ApplyPage() {
  const params = useParams();
  const router = useRouter();
  const role = getRoleBySlug(params.slug as string);

  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", coverLetter: "", state: "", gender: "", hispanic: "", veteran: "", disability: "" });
  const isRestricted = RESTRICTED_STATES.includes(form.state);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [selfIdOpen, setSelfIdOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  if (!role) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-4">
        <p className="text-zinc-400">Role not found.</p>
        <Link href="/careers" className="text-green-400 hover:text-green-300 text-sm">← Back to Careers</Link>
      </div>
    );
  }

  const handleFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) { setError("File must be under 5 MB."); return; }
    setError("");
    setResumeFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.state) { setError("Please select your state of residence."); return; }
    if (isRestricted) { setError(`We are not currently accepting applicants from ${RESTRICTED_LABELS[form.state]}.`); return; }
    if (!resumeFile) { setError("Please attach your resume."); return; }
    setLoading(true);
    setError("");
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    fd.append("phone", form.phone);
    fd.append("linkedin", form.linkedin);
    fd.append("coverLetter", form.coverLetter);
    fd.append("roleTitle", role.title);
    fd.append("roleDepartment", role.department);
    fd.append("resume", resumeFile);
    fd.append("gender", form.gender);
    fd.append("hispanic", form.hispanic);
    fd.append("veteran", form.veteran);
    fd.append("disability", form.disability);
    try {
      const res = await fetch("/api/apply", { method: "POST", body: fd });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed");
      }
      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[700px] h-[300px] bg-green-900/10 blur-3xl rounded-full" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/careers" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-300 text-sm mb-8 transition-colors group">
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform" />
            All Positions
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-green-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">{role.department}</p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{role.title}</h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${levelColors[role.level] ?? levelColors.Mid}`}>
                {role.level}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-zinc-400 bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-full">
                <Briefcase size={12} /> {role.type}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-zinc-400">
                <MapPin size={12} className="text-zinc-500" /> {role.location}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-green-400 font-semibold">
                <DollarSign size={12} /> {role.salary}
              </span>
            </div>

            <div className="mt-6 flex items-start gap-3 bg-amber-950/30 border border-amber-800/50 rounded-xl px-4 py-3">
              <AlertTriangle size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-amber-300/80 text-xs leading-relaxed">
                <span className="font-semibold text-amber-300">Eligibility notice:</span> Applicants residing in New York or Massachusetts are not eligible for this position at this time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main */}
      <section className="pb-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Left — Job details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3 space-y-8"
            >
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
                <h2 className="text-white font-black text-lg mb-4">About the Role</h2>
                <p className="text-zinc-400 leading-relaxed text-sm">{role.overview}</p>
              </div>

              <Section title="What You'll Do" items={role.responsibilities} />
              <Section title="What You'll Bring" items={role.requirements} />
              <Section title="Nice to Have" items={role.niceToHave} accent />
            </motion.div>

            {/* Right — Application form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:col-span-2"
            >
              <div className="lg:sticky lg:top-28">
                {submitted ? (
                  <div className="bg-zinc-900 border border-green-800/60 rounded-2xl p-8 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center mx-auto mb-5"
                    >
                      <CheckCircle2 size={32} className="text-green-400" />
                    </motion.div>
                    <h3 className="text-white font-black text-xl mb-2">Application Received</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      Thanks, {form.name.split(" ")[0]}! We review all applications within 5 business days and will be in touch if there's a match.
                    </p>
                    <Link
                      href="/careers"
                      className="inline-block text-sm font-semibold text-green-400 border border-green-800 bg-green-950/40 px-5 py-2.5 rounded-xl hover:border-green-600 transition-colors"
                    >
                      ← Back to Careers
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7 space-y-5">
                    <h2 className="text-white font-black text-lg">Apply for this Role</h2>

                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Smith"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+1 (202) 555-0100"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">State of Residence *</label>
                      <select
                        required
                        value={form.state}
                        onChange={e => { setForm({ ...form, state: e.target.value }); setError(""); }}
                        className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors ${
                          isRestricted
                            ? "bg-red-950/40 border-red-700 text-red-300 focus:border-red-500"
                            : "bg-zinc-800 border-zinc-700 text-white focus:border-green-600"
                        }`}
                      >
                        <option value="">Select your state...</option>
                        {US_STATES.map(([code, name]) => (
                          <option key={code} value={code}>{name}</option>
                        ))}
                      </select>
                      {isRestricted && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1.5">
                          <AlertTriangle size={11} /> We are not currently accepting applicants from {RESTRICTED_LABELS[form.state]}.
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">LinkedIn URL</label>
                      <input
                        type="url"
                        value={form.linkedin}
                        onChange={e => setForm({ ...form, linkedin: e.target.value })}
                        placeholder="linkedin.com/in/yourprofile"
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Why are you a great fit?</label>
                      <textarea
                        rows={4}
                        value={form.coverLetter}
                        onChange={e => setForm({ ...form, coverLetter: e.target.value })}
                        placeholder="Tell us what makes you the right person for this role..."
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors placeholder-zinc-600 resize-none"
                      />
                    </div>

                    {/* Resume upload */}
                    <div>
                      <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Resume *</label>
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
                      />
                      <div
                        onClick={() => fileRef.current?.click()}
                        onDragOver={e => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={e => { e.preventDefault(); setIsDragging(false); const f = e.dataTransfer.files[0]; if (f) handleFile(f); }}
                        className={`cursor-pointer border-2 border-dashed rounded-xl p-6 text-center transition-all duration-200 ${
                          isDragging
                            ? "border-green-500 bg-green-950/30"
                            : resumeFile
                            ? "border-green-700 bg-green-950/20"
                            : "border-zinc-700 hover:border-zinc-500 bg-zinc-800/40"
                        }`}
                      >
                        {resumeFile ? (
                          <div>
                            <p className="text-green-400 font-semibold text-sm truncate">{resumeFile.name}</p>
                            <p className="text-zinc-500 text-xs mt-1">{(resumeFile.size / 1024 / 1024).toFixed(2)} MB · Click to change</p>
                          </div>
                        ) : (
                          <div>
                            <Upload size={24} className="mx-auto text-zinc-500 mb-2" />
                            <p className="text-zinc-300 text-sm font-medium">Drop your resume or click to browse</p>
                            <p className="text-zinc-600 text-xs mt-1">PDF, DOC, DOCX · Max 5 MB</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Voluntary Self-Identification */}
                    <div className="border border-zinc-700/60 rounded-xl overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setSelfIdOpen(o => !o)}
                        className="w-full flex items-center justify-between px-5 py-3.5 bg-zinc-800/50 hover:bg-zinc-800 transition-colors text-left"
                      >
                        <span className="text-white font-bold text-sm">Voluntary Self-Identification</span>
                        <ChevronDown size={15} className={`text-zinc-400 transition-transform duration-200 ${selfIdOpen ? "rotate-180" : ""}`} />
                      </button>

                      {selfIdOpen && (
                        <div className="px-5 py-5 space-y-5 bg-zinc-900/40">
                          <p className="text-zinc-400 text-xs leading-relaxed">
                            For government reporting purposes, we ask candidates to respond to the below self-identification survey. Completion of the form is entirely voluntary. Whatever your decision, it will not be considered in the hiring process or thereafter. Any information that you do provide will be recorded and maintained in a confidential file.
                          </p>
                          <p className="text-zinc-500 text-xs leading-relaxed">
                            As set forth in Aegis Interlink's Equal Employment Opportunity policy, we do not discriminate on the basis of any protected group status under any applicable law.
                          </p>

                          {/* Gender */}
                          <div>
                            <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Gender</label>
                            <select
                              value={form.gender}
                              onChange={e => setForm({ ...form, gender: e.target.value })}
                              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors"
                            >
                              <option value="">Select...</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Non-Binary</option>
                              <option>Decline to Self Identify</option>
                            </select>
                          </div>

                          {/* Hispanic/Latino */}
                          <div>
                            <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Are you Hispanic/Latino?</label>
                            <select
                              value={form.hispanic}
                              onChange={e => setForm({ ...form, hispanic: e.target.value })}
                              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors"
                            >
                              <option value="">Select...</option>
                              <option>Yes</option>
                              <option>No</option>
                              <option>Decline to Self Identify</option>
                            </select>
                          </div>

                          {/* Veteran Status */}
                          <div>
                            <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                              If you believe you belong to any of the categories of protected veterans listed below, please indicate by making the appropriate selection. As a government contractor subject to the Vietnam Era Veterans Readjustment Assistance Act (VEVRAA), we request this information in order to measure the effectiveness of the outreach and positive recruitment efforts we undertake pursuant to VEVRAA.
                            </p>
                            <div className="space-y-1.5 text-zinc-500 text-xs leading-relaxed mb-3">
                              <p><span className="text-zinc-400 font-semibold">Disabled veteran:</span> A veteran entitled to compensation under laws administered by the Secretary of Veterans Affairs, or discharged/released from active duty due to a service-connected disability.</p>
                              <p><span className="text-zinc-400 font-semibold">Recently separated veteran:</span> Any veteran during the three-year period beginning on the date of discharge or release from active duty.</p>
                              <p><span className="text-zinc-400 font-semibold">Active duty wartime or campaign badge veteran:</span> A veteran who served on active duty during a war or in a campaign for which a campaign badge has been authorized.</p>
                              <p><span className="text-zinc-400 font-semibold">Armed Forces service medal veteran:</span> A veteran who participated in a U.S. military operation for which an Armed Forces service medal was awarded pursuant to Executive Order 12985.</p>
                            </div>
                            <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Veteran Status</label>
                            <select
                              value={form.veteran}
                              onChange={e => setForm({ ...form, veteran: e.target.value })}
                              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors"
                            >
                              <option value="">Select...</option>
                              <option>I am not a protected veteran</option>
                              <option>I identify as one or more of the classifications of a protected veteran</option>
                              <option>I don't wish to answer</option>
                            </select>
                          </div>

                          {/* Disability */}
                          <div>
                            <p className="text-zinc-400 text-xs font-bold mb-1">Voluntary Self-Identification of Disability</p>
                            <p className="text-zinc-600 text-xs mb-3">Form CC-305 · OMB Control Number 1250-0005 · Expires 04/30/2026</p>
                            <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                              We are a federal contractor or subcontractor. The law requires us to provide equal employment opportunity to qualified people with disabilities. We have a goal of having at least 7% of our workers as people with disabilities. Completing this form is voluntary and confidential — it will not affect your application.
                            </p>
                            <p className="text-zinc-400 text-xs font-semibold mb-1.5">Disabilities include, but are not limited to:</p>
                            <ul className="text-zinc-500 text-xs leading-relaxed space-y-0.5 mb-4 columns-1 list-disc pl-4">
                              {["Alcohol or other substance use disorder (not currently using drugs illegally)","Autoimmune disorder (e.g. lupus, fibromyalgia, HIV/AIDS)","Blind or low vision","Cancer (past or present)","Cardiovascular or heart disease","Cerebral palsy","Deaf or serious difficulty hearing","Diabetes","Epilepsy or other seizure disorder","Gastrointestinal disorders (e.g. Crohn's Disease, IBS)","Intellectual or developmental disability","Mental health conditions (e.g. depression, bipolar, anxiety, PTSD)","Missing or partially missing limbs","Mobility impairment (wheelchair, walker, leg brace, etc.)","Nervous system condition (e.g. migraines, Parkinson's, MS)","Neurodivergence (e.g. ADHD, autism, dyslexia)","Partial or complete paralysis","Pulmonary or respiratory conditions","Short stature (dwarfism)","Traumatic brain injury"].map(d => (
                                <li key={d}>{d}</li>
                              ))}
                            </ul>
                            <label className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-2">Disability Status</label>
                            <select
                              value={form.disability}
                              onChange={e => setForm({ ...form, disability: e.target.value })}
                              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-green-600 transition-colors"
                            >
                              <option value="">Select...</option>
                              <option>Yes, I have a disability (or previously had one)</option>
                              <option>No, I don't have a disability</option>
                              <option>I don't wish to answer</option>
                            </select>
                            <p className="text-zinc-600 text-xs mt-3 leading-relaxed">
                              <span className="font-semibold">PUBLIC BURDEN STATEMENT:</span> According to the Paperwork Reduction Act of 1995, no persons are required to respond to a collection of information unless such collection displays a valid OMB control number. This survey should take about 5 minutes to complete.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {error && <p className="text-red-400 text-xs text-center">{error}</p>}

                    <button
                      type="submit"
                      disabled={loading || isRestricted}
                      className="w-full bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Submitting…
                        </>
                      ) : "Submit Application"}
                    </button>

                    <p className="text-zinc-600 text-xs text-center">
                      Questions? Email <a href="mailto:support@aegisinterlink.com" className="text-zinc-400 hover:text-zinc-300 transition-colors">support@aegisinterlink.com</a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
