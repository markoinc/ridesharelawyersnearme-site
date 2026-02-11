export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishDate: string;
}

export const articles: Article[] = [
  // UBER ACCIDENTS & LIABILITY (25 articles)
  {
    slug: "who-is-liable-in-rideshare-accident",
    title: "Who Is Liable in an Rideshare Accident?",
    description: "Understanding liability in rideshare accidents: when the driver, Uber, or other parties may be responsible for your injuries and damages.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2025-01-15"
  },
  {
    slug: "uber-driver-vs-company-liability",
    title: "Uber Driver vs. Company Liability Explained",
    description: "Learn the difference between driver liability and Uber's corporate liability, and how it affects your accident claim.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-01-16"
  },
  {
    slug: "suing-uber-after-accident",
    title: "Can You Sue Uber After an Accident?",
    description: "Understanding your legal options for suing Uber directly after a rideshare accident, including when Uber can be held liable.",
    category: "Liability",
    readTime: "9 min",
    publishDate: "2025-01-17"
  },
  {
    slug: "uber-vicarious-liability",
    title: "Vicarious Liability in Rideshare Accident Cases",
    description: "How vicarious liability applies to rideshare accidents and when Uber can be held responsible for driver negligence.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2025-01-18"
  },
  {
    slug: "uber-independent-contractor-status",
    title: "How Uber's Independent Contractor Status Affects Claims",
    description: "The impact of rideshare driver classification as independent contractors on accident liability and your legal options.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-01-19"
  },
  {
    slug: "multiple-party-rideshare-accident",
    title: "Multi-Party Liability in Uber Crashes",
    description: "When multiple parties are liable in a rideshare accident: drivers, Uber, other vehicles, and third parties.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2025-01-20"
  },
  {
    slug: "rideshare-accident-fault-determination",
    title: "How Fault Is Determined in Rideshare Accidents",
    description: "The process of determining fault in rideshare accidents and how it affects your compensation claim.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-01-21"
  },
  {
    slug: "rideshare-accident-police-report",
    title: "Police Reports in Rideshare Accident Claims",
    description: "The importance of police reports in rideshare accident cases and how they impact liability determination.",
    category: "Liability",
    readTime: "6 min",
    publishDate: "2025-01-22"
  },
  {
    slug: "uber-driver-background-check-failures",
    title: "Uber Background Check Failures & Liability",
    description: "When inadequate background checks make Uber liable for accidents caused by unqualified drivers.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-01-23"
  },
  {
    slug: "uber-driver-fatigue-accidents",
    title: "Fatigued Uber Driver Accidents",
    description: "Driver fatigue is a major cause of rideshare accidents. Learn about Uber's policies and driver liability.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2025-01-24"
  },
  {
    slug: "rideshare-distracted-driving-accidents",
    title: "Distracted Driving Rideshare Accidents",
    description: "How app usage and distractions cause rideshare accidents and who is liable for distracted driving injuries.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-01-25"
  },
  {
    slug: "drunk-uber-driver-accidents",
    title: "Drunk Uber Driver Accident Claims",
    description: "Your legal options when injured by an intoxicated rideshare driver, including criminal and civil remedies.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2025-01-26"
  },
  {
    slug: "uber-driver-speeding-accidents",
    title: "Speeding Uber Driver Accident Liability",
    description: "Liability issues when rideshare drivers speed to complete more rides and cause serious accidents.",
    category: "Liability",
    readTime: "6 min",
    publishDate: "2025-01-27"
  },
  {
    slug: "uber-driver-running-red-lights",
    title: "Uber Drivers Running Red Lights",
    description: "Traffic violations by rideshare drivers and liability for accidents caused by running red lights or stop signs.",
    category: "Liability",
    readTime: "6 min",
    publishDate: "2025-01-28"
  },
  {
    slug: "uber-wrong-way-accidents",
    title: "Wrong-Way Rideshare Accidents",
    description: "Liability and claims when GPS errors or driver mistakes cause wrong-way rideshare accidents.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-01-29"
  },
  {
    slug: "uber-rear-end-collisions",
    title: "Rear-End Collisions Involving Uber",
    description: "Common rear-end accidents with Uber vehicles: liability issues and compensation for injuries.",
    category: "Liability",
    readTime: "6 min",
    publishDate: "2025-01-30"
  },
  {
    slug: "uber-sideswipe-accidents",
    title: "Uber Sideswipe Accident Claims",
    description: "Understanding liability in sideswipe accidents involving Uber vehicles and lane change errors.",
    category: "Liability",
    readTime: "6 min",
    publishDate: "2025-01-31"
  },
  {
    slug: "uber-intersection-accidents",
    title: "Rideshare Accidents at Intersections",
    description: "Intersection crashes are among the most dangerous. Learn about liability when Uber is involved.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-02-01"
  },
  {
    slug: "uber-highway-accidents",
    title: "Rideshare Accidents on Highways and Interstates",
    description: "High-speed highway accidents involving Uber: unique liability issues and severe injury claims.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2025-02-02"
  },
  {
    slug: "uber-parking-lot-accidents",
    title: "Rideshare Accidents in Parking Lots",
    description: "Liability issues in parking lot accidents with Uber vehicles during pickup and dropoff.",
    category: "Liability",
    readTime: "6 min",
    publishDate: "2025-02-03"
  },
  {
    slug: "uber-airport-accidents",
    title: "Rideshare Accidents at Airports",
    description: "Airport rideshare accidents: unique liability issues and claims involving airport ground transportation.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-02-04"
  },
  {
    slug: "rideshare-passenger-assault-liability",
    title: "Uber Liability for Passenger Assault",
    description: "When rideshare drivers assault passengers: Uber's liability and your legal options for compensation.",
    category: "Liability",
    readTime: "8 min",
    publishDate: "2025-02-05"
  },
  {
    slug: "uber-vehicle-defect-accidents",
    title: "Vehicle Defects in Rideshare Accidents",
    description: "When mechanical failures or vehicle defects cause rideshare accidents: manufacturer and driver liability.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-02-06"
  },
  {
    slug: "uber-weather-related-accidents",
    title: "Weather-Related Rideshare Accidents",
    description: "Liability in rideshare accidents caused by rain, snow, ice, or fog. When weather doesn't excuse negligence.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-02-07"
  },
  {
    slug: "uber-road-hazard-accidents",
    title: "Road Hazard Rideshare Accidents",
    description: "When potholes, debris, or road construction cause rideshare accidents: government and driver liability.",
    category: "Liability",
    readTime: "7 min",
    publishDate: "2025-02-08"
  },

  // UBER INSURANCE (25 articles)
  {
    slug: "rideshare-insurance-coverage-explained",
    title: "Uber Insurance Coverage: Complete Guide",
    description: "Understanding Uber's three-tier insurance system and how coverage applies during different ride phases.",
    category: "Insurance",
    readTime: "10 min",
    publishDate: "2025-02-09"
  },
  {
    slug: "uber-app-off-insurance",
    title: "Insurance When Uber App Is Off",
    description: "What insurance applies when a rideshare driver causes an accident with the app turned off.",
    category: "Insurance",
    readTime: "6 min",
    publishDate: "2025-02-10"
  },
  {
    slug: "uber-waiting-for-ride-insurance",
    title: "Uber Insurance: Waiting for Ride Requests",
    description: "Coverage details for accidents during Period 1 when drivers are waiting for ride requests.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-11"
  },
  {
    slug: "uber-en-route-to-pickup-insurance",
    title: "Insurance When Uber Is En Route to Pickup",
    description: "Period 2 insurance coverage: what applies when rideshare drivers are heading to pick up passengers.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-12"
  },
  {
    slug: "rideshare-passenger-in-car-insurance",
    title: "Uber Insurance With Passenger in Vehicle",
    description: "Period 3 coverage: the $1 million insurance policy that protects Uber passengers during rides.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-13"
  },
  {
    slug: "uber-one-million-dollar-policy",
    title: "Uber's $1 Million Liability Policy Explained",
    description: "Everything you need to know about Uber's $1 million commercial liability insurance policy.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2025-02-14"
  },
  {
    slug: "uber-uninsured-motorist-coverage",
    title: "Uber's Uninsured Motorist Coverage",
    description: "Protection when uninsured drivers hit Uber vehicles: understanding UM/UIM coverage.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-15"
  },
  {
    slug: "uber-underinsured-motorist-claims",
    title: "Underinsured Motorist Claims Against Uber",
    description: "When the at-fault driver's insurance isn't enough: tapping into Uber's underinsured coverage.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-16"
  },
  {
    slug: "uber-personal-injury-protection",
    title: "Personal Injury Protection in Uber Claims",
    description: "How PIP coverage works in rideshare accident claims in no-fault insurance states.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-17"
  },
  {
    slug: "uber-med-pay-coverage",
    title: "Medical Payments Coverage in Rideshare Accidents",
    description: "Understanding MedPay and how it provides quick payment for rideshare accident medical bills.",
    category: "Insurance",
    readTime: "6 min",
    publishDate: "2025-02-18"
  },
  {
    slug: "uber-driver-personal-insurance",
    title: "Uber Driver's Personal Insurance Gaps",
    description: "Why personal auto insurance often doesn't cover rideshare driving and what it means for claims.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-19"
  },
  {
    slug: "rideshare-insurance-exclusions",
    title: "Common Uber Insurance Exclusions",
    description: "Situations where Uber's insurance may not cover your accident and what to do about it.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2025-02-20"
  },
  {
    slug: "rideshare-insurance-claim-process",
    title: "How to File a rideshare Insurance Claim",
    description: "Step-by-step guide to filing an insurance claim after a rideshare accident, including required documentation.",
    category: "Insurance",
    readTime: "9 min",
    publishDate: "2025-02-21"
  },
  {
    slug: "rideshare-insurance-denial-appeal",
    title: "What to Do When Uber Insurance Denies Claim",
    description: "Steps to take if Uber's insurance company denies your accident claim, including appeals and legal options.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2025-02-22"
  },
  {
    slug: "rideshare-insurance-bad-faith",
    title: "Bad Faith Insurance Practices by Uber",
    description: "Recognizing and fighting bad faith tactics used by Uber's insurance company to minimize your claim.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2025-02-23"
  },
  {
    slug: "uber-deductible-responsibility",
    title: "Who Pays the Deductible in Rideshare Accidents?",
    description: "Understanding deductibles in rideshare accident claims and who is responsible for paying them.",
    category: "Insurance",
    readTime: "6 min",
    publishDate: "2025-02-24"
  },
  {
    slug: "uber-property-damage-coverage",
    title: "Property Damage Coverage in Rideshare Accidents",
    description: "Getting compensation for vehicle damage, personal property, and other property losses in Uber crashes.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-25"
  },
  {
    slug: "uber-rental-car-coverage",
    title: "Rental Car Coverage After Rideshare Accidents",
    description: "Getting a rental car while yours is being repaired after a rideshare accident: coverage options.",
    category: "Insurance",
    readTime: "6 min",
    publishDate: "2025-02-26"
  },
  {
    slug: "uber-total-loss-claims",
    title: "Total Loss Vehicle Claims in Rideshare Accidents",
    description: "When your vehicle is totaled in a rideshare accident: understanding actual cash value and gap coverage.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-02-27"
  },
  {
    slug: "uber-commercial-insurance-requirements",
    title: "Commercial Insurance Requirements for Uber",
    description: "State-by-state commercial insurance requirements for rideshare companies like Uber.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2025-02-28"
  },
  {
    slug: "rideshare-insurance-vs-lyft",
    title: "Uber vs. Lyft Insurance Coverage",
    description: "Comparing insurance coverage between Uber and Lyft: similarities and differences for accident claims.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2025-03-01"
  },
  {
    slug: "uber-rideshare-insurance-gap",
    title: "The Rideshare Insurance Gap Problem",
    description: "Understanding the coverage gaps between personal insurance and commercial rideshare policies.",
    category: "Insurance",
    readTime: "7 min",
    publishDate: "2025-03-02"
  },
  {
    slug: "uber-james-river-insurance",
    title: "James River Insurance: Uber's Carrier",
    description: "Understanding James River Insurance Company, Uber's primary liability insurance carrier.",
    category: "Insurance",
    readTime: "6 min",
    publishDate: "2025-03-03"
  },
  {
    slug: "rideshare-insurance-limits-by-state",
    title: "Uber Insurance Limits by State",
    description: "State-specific minimum insurance requirements for Uber and how they affect your claim value.",
    category: "Insurance",
    readTime: "9 min",
    publishDate: "2025-03-04"
  },
  {
    slug: "stacking-insurance-rideshare-accidents",
    title: "Stacking Insurance in Rideshare Accident Claims",
    description: "How to maximize compensation by stacking multiple insurance policies in rideshare accident cases.",
    category: "Insurance",
    readTime: "8 min",
    publishDate: "2025-03-05"
  },

  // PASSENGER RIGHTS (15 articles)
  {
    slug: "rideshare-passenger-rights-overview",
    title: "Uber Passenger Rights: What You Need to Know",
    description: "A comprehensive overview of your rights as a rideshare passenger before, during, and after a ride.",
    category: "Passenger Rights",
    readTime: "9 min",
    publishDate: "2025-03-06"
  },
  {
    slug: "injured-rideshare-passenger-compensation",
    title: "Compensation for Injured Uber Passengers",
    description: "What compensation Uber passengers can receive after being injured in a rideshare accident.",
    category: "Passenger Rights",
    readTime: "8 min",
    publishDate: "2025-03-07"
  },
  {
    slug: "rideshare-passenger-seatbelt-injuries",
    title: "Seatbelt Injuries for Uber Passengers",
    description: "Ca rideshare passengers recover damages if they weren't wearing a seatbelt during an accident?",
    category: "Passenger Rights",
    readTime: "7 min",
    publishDate: "2025-03-08"
  },
  {
    slug: "rideshare-passenger-minor-claims",
    title: "Rideshare Accident Claims for Minor Passengers",
    description: "Special considerations when children are injured as Uber passengers: legal guardians and claims.",
    category: "Passenger Rights",
    readTime: "7 min",
    publishDate: "2025-03-09"
  },
  {
    slug: "rideshare-passenger-sexual-assault",
    title: "Sexual Assault by Uber Drivers",
    description: "Legal options for Uber passengers who experience sexual assault or harassment by drivers.",
    category: "Passenger Rights",
    readTime: "8 min",
    publishDate: "2025-03-10"
  },
  {
    slug: "rideshare-passenger-kidnapping",
    title: "Uber Driver Kidnapping and False Imprisonment",
    description: "Your legal rights when a rideshare driver deviates from the route or refuses to let you out.",
    category: "Passenger Rights",
    readTime: "7 min",
    publishDate: "2025-03-11"
  },
  {
    slug: "rideshare-passenger-stolen-property",
    title: "Stolen Property During Uber Rides",
    description: "Recovering compensation when belongings are stolen during Uber rides or left behind.",
    category: "Passenger Rights",
    readTime: "6 min",
    publishDate: "2025-03-12"
  },
  {
    slug: "rideshare-passenger-discrimination",
    title: "Discrimination by Uber Drivers",
    description: "Your legal rights when rideshare drivers discriminate based on race, disability, or other protected characteristics.",
    category: "Passenger Rights",
    readTime: "7 min",
    publishDate: "2025-03-13"
  },
  {
    slug: "rideshare-passenger-ada-rights",
    title: "ADA Rights for Uber Passengers",
    description: "Americans with Disabilities Act protections for Uber passengers with disabilities.",
    category: "Passenger Rights",
    readTime: "8 min",
    publishDate: "2025-03-14"
  },
  {
    slug: "rideshare-passenger-rating-system",
    title: "How Uber's Rating System Affects Passengers",
    description: "Understanding how passenger ratings work and your rights regarding the rating system.",
    category: "Passenger Rights",
    readTime: "6 min",
    publishDate: "2025-03-15"
  },
  {
    slug: "rideshare-passenger-terms-of-service",
    title: "Uber Terms of Service: Passenger Impact",
    description: "How Uber's terms of service affect your rights as a passenger, including arbitration clauses.",
    category: "Passenger Rights",
    readTime: "8 min",
    publishDate: "2025-03-16"
  },
  {
    slug: "uber-pool-shared-ride-accidents",
    title: "Uber Pool and Shared Ride Accidents",
    description: "Special considerations for accidents during Uber Pool/Share rides with multiple passengers.",
    category: "Passenger Rights",
    readTime: "7 min",
    publishDate: "2025-03-17"
  },
  {
    slug: "rideshare-passenger-emotional-distress",
    title: "Emotional Distress Claims for Uber Passengers",
    description: "Recovering compensation for PTSD, anxiety, and emotional trauma after rideshare accidents.",
    category: "Passenger Rights",
    readTime: "7 min",
    publishDate: "2025-03-18"
  },
  {
    slug: "rideshare-passenger-witness-duties",
    title: "Uber Passenger Witness Responsibilities",
    description: "What to do as a passenger witness when your Uber is involved in an accident.",
    category: "Passenger Rights",
    readTime: "6 min",
    publishDate: "2025-03-19"
  },
  {
    slug: "rideshare-passenger-wrongful-death",
    title: "Wrongful Death Claims: Uber Passenger Fatalities",
    description: "Legal options for families when Uber passengers are killed in rideshare accidents.",
    category: "Passenger Rights",
    readTime: "9 min",
    publishDate: "2025-03-20"
  },

  // THIRD-PARTY CLAIMS (10 articles)
  {
    slug: "hit-by-uber-driver-claims",
    title: "Hit by a rideshare Driver? Your Legal Options",
    description: "What to do if you're hit by a rideshare driver while driving, walking, or cycling.",
    category: "Third-Party Claims",
    readTime: "8 min",
    publishDate: "2025-03-21"
  },
  {
    slug: "pedestrian-hit-by-rideshare",
    title: "Pedestrian Hit by Uber: Legal Rights",
    description: "Compensation options for pedestrians injured by Uber vehicles, including crosswalk accidents.",
    category: "Third-Party Claims",
    readTime: "8 min",
    publishDate: "2025-03-22"
  },
  {
    slug: "cyclist-hit-by-uber",
    title: "Cyclist Hit by Uber Vehicle Claims",
    description: "Legal options for bicyclists injured in collisions with rideshare drivers.",
    category: "Third-Party Claims",
    readTime: "7 min",
    publishDate: "2025-03-23"
  },
  {
    slug: "other-driver-rideshare-accident",
    title: "Claims Against Uber as Another Driver",
    description: "Your legal options when a rideshare driver causes an accident that damages your vehicle.",
    category: "Third-Party Claims",
    readTime: "7 min",
    publishDate: "2025-03-24"
  },
  {
    slug: "uber-hit-and-run-claims",
    title: "Uber Hit and Run Accidents",
    description: "What to do if a rideshare driver hits you and flees the scene, and how to track them down.",
    category: "Third-Party Claims",
    readTime: "8 min",
    publishDate: "2025-03-25"
  },
  {
    slug: "rideshare-accident-property-owner-claims",
    title: "Property Damage Claims Against Uber",
    description: "Recovering compensation when rideshare drivers damage your property: fences, buildings, and more.",
    category: "Third-Party Claims",
    readTime: "6 min",
    publishDate: "2025-03-26"
  },
  {
    slug: "rideshare-accident-motorcycle-riders",
    title: "Motorcyclists Hit by Uber Vehicles",
    description: "Special considerations for motorcycle accident claims involving rideshare drivers.",
    category: "Third-Party Claims",
    readTime: "7 min",
    publishDate: "2025-03-27"
  },
  {
    slug: "rideshare-accident-scooter-riders",
    title: "Electric Scooter Riders Hit by Uber",
    description: "Legal options for e-scooter riders injured by Uber vehicles in urban areas.",
    category: "Third-Party Claims",
    readTime: "6 min",
    publishDate: "2025-03-28"
  },
  {
    slug: "rideshare-accident-bus-passengers",
    title: "Bus Passengers Injured in Uber Crashes",
    description: "Claims options when Uber vehicles collide with public buses and injure bus passengers.",
    category: "Third-Party Claims",
    readTime: "7 min",
    publishDate: "2025-03-29"
  },
  {
    slug: "rideshare-accident-bystander-claims",
    title: "Bystander Claims in Rideshare Accidents",
    description: "Compensation for bystanders injured when Uber vehicles lose control or jump curbs.",
    category: "Third-Party Claims",
    readTime: "6 min",
    publishDate: "2025-03-30"
  },

  // UBER DRIVER CLAIMS (10 articles)
  {
    slug: "uber-driver-injured-rights",
    title: "Injured Uber Driver Rights and Options",
    description: "Legal options for rideshare drivers injured while transporting passengers or waiting for rides.",
    category: "Driver Claims",
    readTime: "8 min",
    publishDate: "2025-03-31"
  },
  {
    slug: "uber-driver-workers-comp",
    title: "Workers' Compensation for Uber Drivers",
    description: "Ca rideshare drivers get workers' compensation? Understanding the gig worker insurance landscape.",
    category: "Driver Claims",
    readTime: "7 min",
    publishDate: "2025-04-01"
  },
  {
    slug: "uber-driver-deactivation-after-accident",
    title: "Uber Driver Deactivation After Accidents",
    description: "What happens when Uber deactivates drivers after accidents and your legal options.",
    category: "Driver Claims",
    readTime: "7 min",
    publishDate: "2025-04-02"
  },
  {
    slug: "uber-driver-at-fault-liability",
    title: "Uber Driver Liability When At Fault",
    description: "Personal liability exposure for rideshare drivers who cause accidents.",
    category: "Driver Claims",
    readTime: "8 min",
    publishDate: "2025-04-03"
  },
  {
    slug: "uber-driver-vehicle-damage",
    title: "Uber Driver Vehicle Damage Claims",
    description: "Getting compensation for vehicle damage when your car is damaged while driving for Uber.",
    category: "Driver Claims",
    readTime: "7 min",
    publishDate: "2025-04-04"
  },
  {
    slug: "uber-driver-lost-income-claims",
    title: "Lost Income Claims for Injured Uber Drivers",
    description: "Recovering lost earnings when injuries prevent you from driving for Uber.",
    category: "Driver Claims",
    readTime: "7 min",
    publishDate: "2025-04-05"
  },
  {
    slug: "uber-driver-health-insurance",
    title: "Health Insurance Options for Uber Drivers",
    description: "Understanding health insurance options for rideshare drivers after accident injuries.",
    category: "Driver Claims",
    readTime: "8 min",
    publishDate: "2025-04-06"
  },
  {
    slug: "uber-driver-safety-features",
    title: "Uber Driver Safety Features and Protection",
    description: "Safety features Uber provides drivers and how they impact accident claims.",
    category: "Driver Claims",
    readTime: "6 min",
    publishDate: "2025-04-07"
  },
  {
    slug: "uber-driver-carjacking-claims",
    title: "Uber Driver Carjacking and Crime Victims",
    description: "Legal options for rideshare drivers who are victims of carjacking or assault.",
    category: "Driver Claims",
    readTime: "7 min",
    publishDate: "2025-04-08"
  },
  {
    slug: "uber-driver-prop-22-benefits",
    title: "Prop 22 Benefits for Injured Uber Drivers",
    description: "Understanding California Prop 22 benefits for injured gig workers including rideshare drivers.",
    category: "Driver Claims",
    readTime: "8 min",
    publishDate: "2025-04-09"
  },

  // LEGAL PROCESS (15 articles)
  {
    slug: "rideshare-accident-statute-of-limitations",
    title: "Statute of Limitations for Rideshare Accidents",
    description: "Time limits for filing rideshare accident lawsuits by state - don't miss your deadline.",
    category: "Legal Process",
    readTime: "8 min",
    publishDate: "2025-04-10"
  },
  {
    slug: "rideshare-accident-lawsuit-timeline",
    title: "Rideshare Accident Lawsuit Timeline",
    description: "What to expect during a rideshare accident lawsuit: from filing to settlement or trial.",
    category: "Legal Process",
    readTime: "9 min",
    publishDate: "2025-04-11"
  },
  {
    slug: "uber-arbitration-clause",
    title: "Uber's Mandatory Arbitration Clause",
    description: "How Uber's arbitration clause affects your ability to sue and what you can do about it.",
    category: "Legal Process",
    readTime: "8 min",
    publishDate: "2025-04-12"
  },
  {
    slug: "uber-class-action-lawsuits",
    title: "Class Action Lawsuits Against Uber",
    description: "Major class action lawsuits against Uber and whether you may be part of one.",
    category: "Legal Process",
    readTime: "8 min",
    publishDate: "2025-04-13"
  },
  {
    slug: "finding-rideshare-accident-lawyer",
    title: "How to Find an Rideshare Accident Lawyer",
    description: "Tips for finding and choosing the right attorney for your rideshare accident claim.",
    category: "Legal Process",
    readTime: "7 min",
    publishDate: "2025-04-14"
  },
  {
    slug: "rideshare-accident-contingency-fees",
    title: "Contingency Fees in Rideshare Accident Cases",
    description: "How attorney fees work in rideshare accident cases - you pay nothing unless you win.",
    category: "Legal Process",
    readTime: "6 min",
    publishDate: "2025-04-15"
  },
  {
    slug: "rideshare-accident-evidence-collection",
    title: "Collecting Evidence After Rideshare Accidents",
    description: "Critical evidence to gather after a rideshare accident to strengthen your claim.",
    category: "Legal Process",
    readTime: "8 min",
    publishDate: "2025-04-16"
  },
  {
    slug: "uber-app-data-evidence",
    title: "Using Uber App Data as Evidence",
    description: "How to obtain and use Uber app data (trip history, GPS, timestamps) in your case.",
    category: "Legal Process",
    readTime: "7 min",
    publishDate: "2025-04-17"
  },
  {
    slug: "rideshare-accident-expert-witnesses",
    title: "Expert Witnesses in Rideshare Accident Cases",
    description: "Types of expert witnesses used in rideshare accident litigation and their roles.",
    category: "Legal Process",
    readTime: "7 min",
    publishDate: "2025-04-18"
  },
  {
    slug: "rideshare-accident-discovery-process",
    title: "Discovery in Rideshare Accident Lawsuits",
    description: "The discovery process in Uber litigation: depositions, document requests, and interrogatories.",
    category: "Legal Process",
    readTime: "8 min",
    publishDate: "2025-04-19"
  },
  {
    slug: "rideshare-accident-mediation",
    title: "Mediation in Rideshare Accident Cases",
    description: "How mediation works in rideshare accident disputes and whether it's right for your case.",
    category: "Legal Process",
    readTime: "7 min",
    publishDate: "2025-04-20"
  },
  {
    slug: "rideshare-accident-settlement-negotiations",
    title: "Settling Your Rideshare Accident Claim",
    description: "How rideshare accident settlements are negotiated and when to accept or reject offers.",
    category: "Legal Process",
    readTime: "8 min",
    publishDate: "2025-04-21"
  },
  {
    slug: "rideshare-accident-trial-preparation",
    title: "Preparing for an Rideshare Accident Trial",
    description: "What to expect if your rideshare accident case goes to trial instead of settling.",
    category: "Legal Process",
    readTime: "9 min",
    publishDate: "2025-04-22"
  },
  {
    slug: "rideshare-accident-appeals",
    title: "Appealing Rideshare Accident Case Decisions",
    description: "When and how to appeal unfavorable decisions in rideshare accident litigation.",
    category: "Legal Process",
    readTime: "7 min",
    publishDate: "2025-04-23"
  },
  {
    slug: "rideshare-accident-judgement-collection",
    title: "Collecting Rideshare Accident Judgements",
    description: "Turning your rideshare accident court victory into actual compensation payment.",
    category: "Legal Process",
    readTime: "6 min",
    publishDate: "2025-04-24"
  },

  // DAMAGES & SETTLEMENTS (10 articles)
  {
    slug: "rideshare-accident-damages-types",
    title: "Types of Damages in Rideshare Accident Cases",
    description: "All the damages you can recover in a rideshare accident claim: economic, non-economic, and punitive.",
    category: "Damages",
    readTime: "9 min",
    publishDate: "2025-04-25"
  },
  {
    slug: "rideshare-accident-medical-expenses",
    title: "Medical Expense Recovery in Uber Claims",
    description: "Getting compensation for medical bills, future treatment, and healthcare costs.",
    category: "Damages",
    readTime: "8 min",
    publishDate: "2025-04-26"
  },
  {
    slug: "rideshare-accident-lost-wages",
    title: "Lost Wages in Rideshare Accident Claims",
    description: "Recovering lost income, reduced earning capacity, and future wage losses.",
    category: "Damages",
    readTime: "7 min",
    publishDate: "2025-04-27"
  },
  {
    slug: "rideshare-accident-pain-suffering",
    title: "Pain and Suffering in Uber Claims",
    description: "How pain and suffering damages are calculated in rideshare accident cases.",
    category: "Damages",
    readTime: "7 min",
    publishDate: "2025-04-28"
  },
  {
    slug: "rideshare-accident-average-settlements",
    title: "Average Rideshare Accident Settlement Amounts",
    description: "What rideshare accident settlements typically look like and factors affecting value.",
    category: "Damages",
    readTime: "8 min",
    publishDate: "2025-04-29"
  },
  {
    slug: "rideshare-accident-settlement-factors",
    title: "Factors Affecting Uber Settlement Value",
    description: "What makes some rideshare accident settlements worth more than others.",
    category: "Damages",
    readTime: "8 min",
    publishDate: "2025-04-30"
  },
  {
    slug: "rideshare-accident-punitive-damages",
    title: "Punitive Damages in Uber Cases",
    description: "When you can recover punitive damages against Uber or grossly negligent drivers.",
    category: "Damages",
    readTime: "7 min",
    publishDate: "2025-05-01"
  },
  {
    slug: "rideshare-accident-structured-settlements",
    title: "Structured Settlements for Rideshare Accidents",
    description: "Pros and cons of structured vs. lump sum settlements in rideshare accident cases.",
    category: "Damages",
    readTime: "7 min",
    publishDate: "2025-05-02"
  },
  {
    slug: "rideshare-accident-settlement-taxes",
    title: "Taxes on Rideshare Accident Settlements",
    description: "What portion of your rideshare accident settlement is taxable and what isn't.",
    category: "Damages",
    readTime: "7 min",
    publishDate: "2025-05-03"
  },
  {
    slug: "rideshare-accident-liens-subrogation",
    title: "Medical Liens in Uber Settlements",
    description: "How health insurance liens and subrogation affect your Uber settlement amount.",
    category: "Damages",
    readTime: "7 min",
    publishDate: "2025-05-04"
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter(a => a.category === category);
}

export function getCategories(): string[] {
  return [...new Set(articles.map(a => a.category))];
}

export function getRecentArticles(limit: number = 10): Article[] {
  return articles
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}
