export interface CaseType {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  commonInjuries: string[];
  liabilityFactors: string[];
  averageSettlement: string;
  keyEvidence: string[];
}

export const caseTypes: CaseType[] = [
  {
    slug: "rideshare-passenger-accident",
    title: "Rideshare Passenger Accident Claims",
    shortTitle: "Passenger Accidents",
    description: "Claims for passengers injured while riding in a rideshare vehicle, whether from collisions, sudden stops, or driver negligence.",
    commonInjuries: ["Whiplash", "Head injuries", "Broken bones", "Spinal injuries", "Soft tissue damage", "Concussions"],
    liabilityFactors: ["Driver negligence", "Third-party driver fault", "Vehicle defects", "Road conditions"],
    averageSettlement: "$50,000 - $500,000+",
    keyEvidence: ["Uber trip receipt", "Dash cam footage", "Medical records", "Police report", "Witness statements"]
  },
  {
    slug: "uber-driver-accident",
    title: "Rideshare Driver Accident Claims",
    shortTitle: "Driver Accidents",
    description: "Claims for rideshare drivers injured while on the job, including accidents during rides, while waiting for requests, or en route to pickups.",
    commonInjuries: ["Back injuries", "Neck injuries", "PTSD", "Chronic pain", "Carpal tunnel", "Knee injuries"],
    liabilityFactors: ["Other driver negligence", "Passenger behavior", "Vehicle maintenance", "Company policies"],
    averageSettlement: "$25,000 - $300,000+",
    keyEvidence: ["App status at time of crash", "Insurance coverage tier", "Medical documentation", "Lost earnings records"]
  },
  {
    slug: "pedestrian-hit-by-rideshare",
    title: "Pedestrians Hit by Rideshare Vehicles",
    shortTitle: "Pedestrian Accidents",
    description: "Claims for pedestrians struck by Uber vehicles in crosswalks, parking lots, or while walking near roadways.",
    commonInjuries: ["Traumatic brain injury", "Broken legs/hips", "Internal bleeding", "Spinal cord injuries", "Fatalities"],
    liabilityFactors: ["Driver distraction", "Speeding", "Failure to yield", "App-related distraction", "Right of way violations"],
    averageSettlement: "$100,000 - $1,000,000+",
    keyEvidence: ["Traffic camera footage", "Uber app data", "Crosswalk location", "Driver phone records", "Eyewitness accounts"]
  },
  {
    slug: "cyclist-hit-by-uber",
    title: "Cyclists Hit by Rideshare Vehicles",
    shortTitle: "Cyclist Accidents",
    description: "Claims for bicyclists injured in collisions with Uber vehicles, including dooring accidents and right-hook crashes.",
    commonInjuries: ["Road rash", "Broken clavicle", "Head trauma", "Spinal injuries", "Knee/leg fractures", "Facial injuries"],
    liabilityFactors: ["Dooring", "Right hooks", "Lane encroachment", "Driver distraction", "Failure to check mirrors"],
    averageSettlement: "$75,000 - $750,000+",
    keyEvidence: ["Bike camera footage", "Helmet damage", "Street layout", "Driver admission", "Medical records"]
  },
  {
    slug: "other-driver-uber-crash",
    title: "Other Drivers in Rideshare Collisions",
    shortTitle: "Other Driver Claims",
    description: "Claims for drivers of other vehicles when rideshare drivers cause collisions through negligence or traffic violations.",
    commonInjuries: ["Whiplash", "Back injuries", "Airbag injuries", "Seat belt injuries", "Broken bones", "Concussions"],
    liabilityFactors: ["rideshare driver traffic violations", "Speeding", "Distracted driving", "Aggressive driving"],
    averageSettlement: "$30,000 - $400,000+",
    keyEvidence: ["Police report", "Traffic camera footage", "Uber trip data", "Insurance documentation", "Vehicle damage photos"]
  },
  {
    slug: "uber-airport-accident",
    title: "Rideshare Airport Accidents",
    shortTitle: "Airport Accidents",
    description: "Accidents occurring at airport rideshare pickup/dropoff zones, parking garages, and airport access roads.",
    commonInjuries: ["Luggage-related injuries", "Slip and falls", "Vehicle collisions", "Pedestrian strikes"],
    liabilityFactors: ["Congested pickup zones", "Unfamiliar airport layout", "Time pressure", "Heavy luggage handling"],
    averageSettlement: "$25,000 - $250,000+",
    keyEvidence: ["Airport security footage", "Uber pickup timestamp", "Witness statements", "Airport incident reports"]
  },
  {
    slug: "uber-drunk-driver",
    title: "Accidents with Drunk Rideshare Drivers",
    shortTitle: "Drunk Driver Accidents",
    description: "Claims when rideshare drivers operate vehicles while intoxicated, including both alcohol and drug impairment.",
    commonInjuries: ["Severe trauma", "Fatalities", "Catastrophic injuries", "Multiple fractures", "Brain injuries"],
    liabilityFactors: ["DUI", "Background check failures", "rideshare company's duty of care", "Criminal negligence"],
    averageSettlement: "$200,000 - $2,000,000+",
    keyEvidence: ["BAC test results", "Police arrest records", "Prior DUI history", "rideshare driver screening records"]
  },
  {
    slug: "uber-sexual-assault",
    title: "Rideshare Sexual Assault Claims",
    shortTitle: "Sexual Assault",
    description: "Claims for passengers who experience sexual assault, harassment, or inappropriate conduct by rideshare drivers.",
    commonInjuries: ["PTSD", "Anxiety", "Depression", "Physical assault injuries", "Emotional trauma"],
    liabilityFactors: ["Inadequate background checks", "Prior complaints ignored", "Corporate negligence", "Safety feature failures"],
    averageSettlement: "$100,000 - $5,000,000+",
    keyEvidence: ["Police reports", "Prior driver complaints", "Uber safety reports", "Therapy records", "Criminal proceedings"]
  },
  {
    slug: "rideshare-wrongful-death",
    title: "Rideshare Wrongful Death Claims",
    shortTitle: "Wrongful Death",
    description: "Claims brought by families when loved ones are killed in rideshare accidents, whether as passengers, drivers, or third parties.",
    commonInjuries: ["Fatal injuries", "Survival damages"],
    liabilityFactors: ["Gross negligence", "Reckless driving", "DUI", "Vehicle defects", "Corporate policy failures"],
    averageSettlement: "$500,000 - $10,000,000+",
    keyEvidence: ["Accident reconstruction", "Medical examiner reports", "Loss of income documentation", "Family impact statements"]
  },
  {
    slug: "uber-hit-and-run",
    title: "Rideshare Hit and Run Accidents",
    shortTitle: "Hit and Run",
    description: "Claims when rideshare drivers flee the scene after causing accidents, and how to identify and pursue claims.",
    commonInjuries: ["Varies widely based on accident type"],
    liabilityFactors: ["Driver identification", "Uninsured motorist coverage", "rideshare company's responsibility"],
    averageSettlement: "$40,000 - $400,000+",
    keyEvidence: ["Dash cam footage", "License plate images", "Uber trip matching", "Witness descriptions", "Traffic cameras"]
  },
  {
    slug: "uber-rear-end-collision",
    title: "Rideshare Rear-End Collisions",
    shortTitle: "Rear-End Accidents",
    description: "Claims involving rear-end crashes where Uber vehicles either strike or are struck by other vehicles.",
    commonInjuries: ["Whiplash", "Cervical spine injuries", "Lower back injuries", "Headaches", "Disc herniations"],
    liabilityFactors: ["Following too closely", "Distracted driving", "Sudden stops for pickups", "App-related distraction"],
    averageSettlement: "$20,000 - $200,000+",
    keyEvidence: ["Impact damage photos", "Medical imaging", "Point of impact analysis", "Driver statements"]
  },
  {
    slug: "uber-intersection-accident",
    title: "Rideshare Intersection Accidents",
    shortTitle: "Intersection Crashes",
    description: "T-bone and other intersection crashes involving Uber vehicles running red lights, failing to yield, or violating traffic signals.",
    commonInjuries: ["Side impact injuries", "Broken ribs", "Hip fractures", "Internal organ damage", "Head trauma"],
    liabilityFactors: ["Running red lights", "Failure to yield", "GPS distraction", "Rush to complete rides"],
    averageSettlement: "$50,000 - $600,000+",
    keyEvidence: ["Traffic light timing", "Intersection cameras", "Witness accounts", "Accident reconstruction"]
  },
  {
    slug: "uber-pool-accident",
    title: "Rideshare Pool/Share Accidents",
    shortTitle: "Pool/Share Accidents",
    description: "Special considerations for accidents during Uber Pool or shared rides with multiple passengers.",
    commonInjuries: ["All standard vehicle accident injuries", "Passenger-on-passenger injuries"],
    liabilityFactors: ["Driver distraction with multiple pickups", "Overcrowding", "Passenger behavior"],
    averageSettlement: "$30,000 - $350,000+",
    keyEvidence: ["Pool ride documentation", "Multiple passenger statements", "Pickup/dropoff timeline"]
  },
  {
    slug: "rideshare-distracted-driver",
    title: "Distracted Rideshare Driver Accidents",
    shortTitle: "Distracted Driving",
    description: "Accidents caused by rideshare drivers distracted by the app, GPS, phone calls, or other distractions.",
    commonInjuries: ["Varies based on accident severity"],
    liabilityFactors: ["Cell phone use", "App interaction", "GPS distraction", "Passenger interaction"],
    averageSettlement: "$40,000 - $500,000+",
    keyEvidence: ["Phone records", "App usage data", "Dash cam footage", "Witness testimony about driver behavior"]
  },
  {
    slug: "uber-autonomous-vehicle",
    title: "Autonomous Rideshare Vehicle Accidents",
    shortTitle: "Self-Driving Car Accidents",
    description: "Claims involving rideshare autonomous vehicle program, including the complex liability issues with driverless cars.",
    commonInjuries: ["Severe trauma", "Fatalities", "Catastrophic injuries"],
    liabilityFactors: ["Software failures", "Sensor malfunctions", "Safety driver negligence", "Testing protocols"],
    averageSettlement: "Case-dependent, potentially millions",
    keyEvidence: ["Vehicle data logs", "Sensor recordings", "Testing protocols", "Safety driver actions", "Prior incidents"]
  }
];

export function getCaseTypeBySlug(slug: string): CaseType | undefined {
  return caseTypes.find(ct => ct.slug === slug);
}
