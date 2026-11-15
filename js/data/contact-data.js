/**
 * LegalEase - Centralized Contact & Branch Data Configuration
 * File: js/data/contact-data.js
 * 
 * Provides single source of truth for contact information, support channels,
 * and office consultation spaces. Easily editable for future branches or updates.
 */

window.LEGALEASE_CONTACT_DATA = {
  // Primary Organization Details
  organization: {
    name: "LegalEase Documentation Services",
    tagline: "Your Legal Journey Starts With a Conversation",
    trustLine: "Clear Guidance. Reliable Documentation. Professional Assistance.",
    establishedYear: 2021
  },

  // Primary Contact Channels
  channels: {
    phone: {
      primary: "+91 (011) 4567 8900",
      primaryTel: "+9101145678900",
      tollFree: "+91 1800-362-7327",
      tollFreeTel: "+9118003627327",
      availability: "Mon – Sat, 9:30 AM – 6:30 PM IST",
      label: "Direct Advisory Helpline"
    },
    email: {
      consultations: "consultations@legalease.in",
      support: "support@legalease.in",
      responseTime: "Response within 3 business hours",
      label: "Electronic Enquiries"
    },
    location: {
      building: "LegalEase Chambers, 4th Floor, Statesman House",
      street: "Barakhamba Road, Connaught Place",
      city: "New Delhi",
      state: "Delhi",
      postalCode: "110001",
      country: "India",
      formattedAddress: "LegalEase Chambers, 4th Floor, Statesman House, Connaught Place, New Delhi – 110001, India",
      landmark: "Near Barakhamba Road Metro Station (Gate No. 2)",
      directionsUrl: "https://maps.google.com/?q=Connaught+Place+New+Delhi+India"
    },
    hours: {
      weekday: "Monday – Friday: 9:30 AM – 6:30 PM IST",
      saturday: "Saturday: 10:00 AM – 4:00 PM IST",
      sunday: "Sunday: Closed (Pre-booked Virtual Consultations Only)",
      emergencyNote: "Digital draft reviews remain operational 24/7."
    }
  },

  // Verified Office & Consultation Spaces
  offices: [
    {
      id: "delhi-central",
      name: "Central Advisory Chambers – New Delhi",
      badge: "Headquarters & Documentation Center",
      isPrimary: true,
      image: "assets/images/about-hero-consultation.jpg",
      address: "4th Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi – 110001",
      phone: "+91 (011) 4567 8900",
      phoneTel: "+9101145678900",
      email: "delhi@legalease.in",
      hours: "Mon – Sat: 9:30 AM – 6:30 PM IST",
      availability: "In-Person Consultation & Document Execution by Prior Appointment",
      transit: "Connected via Barakhamba Road & Rajiv Chowk Metro Stations",
      directionsUrl: "https://maps.google.com/?q=Connaught+Place+New+Delhi+India"
    }
  ],

  // Process Steps: What happens after you contact us
  processSteps: [
    {
      step: "01",
      title: "Share Your Requirement",
      desc: "Submit your inquiry with details about your required agreement, sworn declaration, or business registration needs."
    },
    {
      step: "02",
      title: "Understand Your Needs",
      desc: "A documentation specialist reviews your inquiry within 3 business hours to identify statutory needs and required documents."
    },
    {
      step: "03",
      title: "Get the Right Guidance",
      desc: "Receive clear procedural guidance, a structured quote, and transparent timelines to proceed with complete confidence."
    }
  ]
};
