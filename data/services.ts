export interface BeforeAfterPair {
  before: string;
  after: string;
}

export interface ServiceDetail {
  oneTimeSetup: string[];
  growthPlan: string[];
  whatsIncluded: string[];
  beforeAfter: BeforeAfterPair[];
}

export interface Service {
  id: string;
  title: string;
  slogan?: string;
  details?: ServiceDetail;
  iconName: string; // Name of Lucide icon
}

export const services: Service[] = [
  {
    id: "patient-education",
    title: "Patient Education Videos",
    slogan: "Build unmatched trust in your community by educating patients through expert clinical video content.",
    iconName: "Play",
    details: {
      oneTimeSetup: [
        "Clinical topic mapping & content calendar",
        "Doctor interview script guidelines",
        "Confidentiality & HIPAA compliance review",
        "Camera/audio recording setup consultancy",
        "Channel branding and optimization"
      ],
      growthPlan: [
        "Monthly educational video reels & shorts production",
        "Maternity/General health guide explainers",
        "Social syndication & organic reach growth",
        "Trust index and engagement tracking",
        "Local audience message mapping"
      ],
      whatsIncluded: [
        "Patient-focused video scriptwriting",
        "Professional video editing & captioning",
        "Organic reels & YouTube shorts syndication",
        "Clinical brand storytelling guidance",
        "Local search optimized video titles & descriptions"
      ],
      beforeAfter: [
        {
          before: "Patients rely on generic, unverified articles online, leading to anxiety and misinformation.",
          after: "Doctors publish clear, verified health reels, establishing immediate clinical trust and authority."
        },
        {
          before: "Local community is unaware of the hospital's specialized medical departments and expert practitioners.",
          after: "Educational guide videos showcase specific specialists (e.g. maternity care explainers), driving patient preference."
        },
        {
          before: "Social channels are silent or contain dry, static graphics that generate zero patient interest.",
          after: "High-engagement, short-form explanation clips loop organic views, keeping the hospital top-of-mind locally."
        }
      ]
    }
  },
  {
    id: "local-ads",
    title: "Local Patient Acquisition Ads",
    slogan: "Drive high-intent patient inquiries and clinical bookings from your immediate geographical location.",
    iconName: "TrendingUp",
    details: {
      oneTimeSetup: [
        "Regional ad account configuration",
        "Geofencing and local radius targeting",
        "Booking pixel & conversion tracking setup",
        "HIPAA-compliant ad guidelines mapping",
        "Appointment inquiry landing page design"
      ],
      growthPlan: [
        "Geotargeted social media ad management",
        "Budget optimization for maximum inquiries",
        "Conversion rate optimization (CRO) on booking forms",
        "Competitor clinic ad footprint analysis",
        "Weekly patient lead quality audits"
      ],
      whatsIncluded: [
        "Local geofenced ad campaigns (FB/IG/Google)",
        "Ad creative design & copywriting",
        "Booking conversion track reports",
        "CRM & lead management setup",
        "Ad schedule and regional bid tuning"
      ],
      beforeAfter: [
        {
          before: "Spending high budget on print media, brochures, or outdoor hoardings with zero trackable conversion data.",
          after: "Every rupee spent is tracked to actual patient calls and appointment booking actions."
        },
        {
          before: "Clinic is losing potential patients in its immediate neighborhood to competitor hospitals.",
          after: "Geofenced hyper-local campaigns ensure families within 5-10km see the hospital when searching for care."
        },
        {
          before: "Inquiries are slow to process, with patients drop-off due to lack of immediate followup.",
          after: "Integrated ad forms sync directly with hospital CRM, sending instant notifications for booking coordination."
        }
      ]
    }
  },
  {
    id: "reputation-management",
    title: "Clinical Reputation & Listings",
    slogan: "Establish clinical authority by highlighting patient reviews and maintaining active local business profiles.",
    iconName: "Users",
    details: {
      oneTimeSetup: [
        "Google Business Profile (GBP) optimization",
        "Local healthcare citation listings sync",
        "Automated patient review collection workflow",
        "Reputation risk mitigation plan"
      ],
      growthPlan: [
        "Review velocity & response tracking",
        "Local Google Map Pack rankings growth",
        "Patient testimonial video marketing",
        "Negative review resolution strategy"
      ],
      whatsIncluded: [
        "Google Maps & local directory sync",
        "Testimonial assets creation templates",
        "Automated review request integrations",
        "GBP posts and local event updates"
      ],
      beforeAfter: [
        {
          before: "Google Maps listing is unoptimized with low ratings, making patients select other rated hospitals.",
          after: "Systematic positive reviews workflow lifts map rankings, making the clinic the top choice in search."
        },
        {
          before: "Disgruntled patient complaints go unanswered online, damaging the clinic's public image.",
          after: "Timely, professional, and compliant review responses show active care and protect clinical brand trust."
        },
        {
          before: "Clinic features zero social proof or verified patient success stories on its channels.",
          after: "Video testimonials and positive quotes are displayed as digital authority triggers to build trust."
        }
      ]
    }
  },
  {
    id: "growth-analytics",
    title: "Healthcare Growth Analytics",
    slogan: "Track calls, appointment volumes, and patient acquisition costs in a central, compliant dashboard.",
    iconName: "Activity",
    details: {
      oneTimeSetup: [
        "HIPAA-compliant Google Analytics 4 (GA4) config",
        "Call tracking phone number setup",
        "Appointment booking funnel mapping",
        "Central growth dashboard integration"
      ],
      growthPlan: [
        "Monthly clinic acquisition cost (CAC) tracking",
        "Call-to-appointment conversion rate audits",
        "Funnel drop-off and leak resolution",
        "Marketing ROI analytics reporting"
      ],
      whatsIncluded: [
        "Central analytics tracking dashboard",
        "Compliant call tracking platform setup",
        "Inquiry source attribution reports",
        "Weekly appointment growth analytics"
      ],
      beforeAfter: [
        {
          before: "No clear visibility on which social platforms or ads drive the actual pediatric or maternity bookings.",
          after: "Call tracking and UTM parameters attribute exact patient calls and appointments to campaigns."
        },
        {
          before: "Marketing budget is spent blindly without knowing the true cost per patient acquisition.",
          after: "Central dashboard computes active ROI, enabling the hospital to scale working channels and stop wasting funds."
        },
        {
          before: "Patient booking forms have a high dropout rate, but the bottlenecks are unknown.",
          after: "Funnel audits highlight form fields causing friction, boosting booking conversions by 20% to 40%."
        }
      ]
    }
  }
];
