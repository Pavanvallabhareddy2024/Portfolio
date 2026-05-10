import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  User,
  MessageSquare,
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import AnimatedButton from '../common/AnimatedButton';
import { personal } from '../../data/portfolioData';

const Field = ({
  label,
  icon: Icon,
  as = 'input',
  type = 'text',
  rows = 4,
  ...rest
}) => {
  const Tag = as === 'textarea' ? 'textarea' : 'input';
  return (
    <label className="block">
      <span className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-white/65">
        {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
        {label}
      </span>
      <Tag
        type={type}
        rows={as === 'textarea' ? rows : undefined}
        className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-all focus:border-neon-cyan/50 focus:bg-white/[0.07] focus:ring-2 focus:ring-neon-cyan/30"
        {...rest}
      />
    </label>
  );
};

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const subject = String(fd.get('subject') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      '',
      message,
    ].join('\n');

    const url = `https://wa.me/${personal.whatsappWaMe}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container-app">
        <SectionTitle
          eyebrow="Contact"
          title={
            <>
              Let&apos;s build something{' '}
              <span className="text-gradient">remarkable</span>
            </>
          }
          description="I'm open to full-stack roles, freelance projects and collaborations. Reach out and I'll get back within 24 hours."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <GlassCard variant="strong" className="h-full p-7">
              <h3 className="font-display text-xl font-semibold md:text-2xl">
                Get in touch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                Prefer email or LinkedIn? Pick your channel — I respond fast.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href={`mailto:${personal.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-neon-cyan/40 hover:bg-white/[0.07]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan/30 to-neon-cyan/0 ring-1 ring-white/10">
                    <Mail className="h-5 w-5 text-neon-cyan" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-[11px] uppercase tracking-wider text-white/55">
                      Email
                    </div>
                    <div className="truncate text-sm font-medium text-white group-hover:text-neon-cyan">
                      {personal.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-neon-violet/40 hover:bg-white/[0.07]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-neon-violet/30 to-neon-violet/0 ring-1 ring-white/10">
                    <Phone className="h-5 w-5 text-neon-violet" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] uppercase tracking-wider text-white/55">
                      Phone
                    </div>
                    <div className="text-sm font-medium text-white group-hover:text-neon-violet">
                      {personal.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-neon-blue/40 hover:bg-white/[0.07]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-neon-blue/30 to-neon-blue/0 ring-1 ring-white/10">
                    <Linkedin className="h-5 w-5 text-neon-blue" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="text-[11px] uppercase tracking-wider text-white/55">
                      LinkedIn
                    </div>
                    <div className="truncate text-sm font-medium text-white group-hover:text-neon-blue">
                      pavan-vallabhareddy
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-neon-teal/30 to-neon-teal/0 ring-1 ring-white/10">
                    <MapPin className="h-5 w-5 text-neon-teal" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[11px] uppercase tracking-wider text-white/55">
                      Location
                    </div>
                    <div className="text-sm font-medium text-white">
                      {personal.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-xs text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Available for new opportunities
              </div>
            </GlassCard>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard variant="strong" hover={false} className="p-7 md:p-8">
              <h3 className="font-display text-xl font-semibold md:text-2xl">
                Send a message
              </h3>
              <p className="mt-2 text-sm text-white/65">
                Tell me a bit about your project, role, or idea.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field
                  name="name"
                  label="Your name"
                  icon={User}
                  placeholder="Jane Doe"
                  autoComplete="name"
                  required
                />
                <Field
                  name="email"
                  label="Email"
                  icon={Mail}
                  type="email"
                  placeholder="jane@company.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div className="mt-4">
                <Field
                  name="subject"
                  label="Subject"
                  icon={MessageSquare}
                  placeholder="Full Stack role / Project / Collaboration"
                  required
                />
              </div>
              <div className="mt-4">
                <Field
                  name="message"
                  as="textarea"
                  label="Message"
                  icon={MessageSquare}
                  placeholder="Tell me what you're building..."
                  rows={5}
                  required
                />
              </div>

              <div className="mt-6 flex justify-end">
                <AnimatedButton type="submit" variant="primary" iconRight={Send}>
                  Send Message
                </AnimatedButton>
              </div>
            </GlassCard>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
