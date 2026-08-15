import { useState } from 'react'
import './Contact.css'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        {/* Left */}
        <Reveal className="contact__left" delay={0.1}>
          <h2 className="contact__heading">Let's talk.</h2>
          <p className="contact__sub">Have a project or need help? Click the button to reach out directly.</p>
        </Reveal>

        {/* Right: WhatsApp Card */}
        <Reveal className="contact__card" delay={0.3}>
          <div className="contact__wa-box" style={{ padding: '20px 0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)',fontSize: '1.8rem', fontWeight: '700', marginBottom: '12px', color: '#fff' }}>
              Ready to collaborate?
            </h3>
            <p style={{ color: 'var(--ink-muted)', marginBottom: '32px', fontSize: '1rem', lineHeight: '1.5' }}>
              Skip the forms. Click the button below to message me directly on WhatsApp and let's get started.
            </p>
            <a 
              href="https://wa.me/918699145109?text=Hello%20Anudeep" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact__submit"
              style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.031 0C5.405 0 0 5.412 0 12.045c0 2.115.553 4.184 1.604 5.999L.436 23.51l5.632-1.478c1.742.955 3.689 1.458 5.679 1.458h.005c6.626 0 12.031-5.412 12.031-12.045S18.657 0 12.031 0zm0 21.464c-1.815 0-3.593-.487-5.148-1.408l-.369-.219-3.826 1.003 1.024-3.729-.24-.383A9.97 9.97 0 0 1 2.019 12.04c0-5.508 4.484-9.998 9.996-9.998s9.998 4.49 9.998 9.998-4.485 10.004-9.998 10.004h-.005zm5.492-7.508c-.301-.151-1.785-.882-2.061-.983-.277-.101-.479-.151-.68.151-.202.302-.782.983-.958 1.185-.176.201-.353.226-.654.075-1.758-.881-3.076-1.921-4.22-3.834-.176-.301-.019-.464.132-.614.136-.136.302-.352.453-.528.151-.176.202-.302.302-.503.101-.201.05-.377-.025-.528-.075-.151-.68-1.636-.933-2.239-.246-.589-.496-.51-.68-.52-.176-.01-.378-.01-.579-.01a1.11 1.11 0 0 0-.806.377c-.277.302-1.058 1.033-1.058 2.518s1.083 2.921 1.234 3.122c.151.201 2.128 3.248 5.155 4.555 2.138.922 2.913.882 3.442.757.579-.136 1.785-.73 2.037-1.434.252-.705.252-1.309.176-1.434-.076-.126-.277-.202-.579-.353z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
