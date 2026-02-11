export interface State {
  name: string;
  abbr: string;
  slug: string;
  statOfLimitations: string;
  faultSystem: string;
  minInsurance: string;
  rideshareRegulations: string;
  tncLaw: boolean;
  tncLawYear?: number;
  uberInsuranceTiers: {
    appOff: string;
    waitingForRide: string;
    enRoute: string;
  };
  uniqueLaws: string[];
  majorUberMarkets: string[];
  annualRideshareAccidents: number;
  uniqueFacts: string[];
}

export const states: State[] = [
  {
    name: "Alabama",
    abbr: "AL",
    slug: "alabama",
    statOfLimitations: "2 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2018",
    tncLaw: true,
    tncLawYear: 2018,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence can bar recovery if victim is 1% at fault", "TNC drivers must pass background checks", "Airport pickup regulations vary by city"],
    majorUberMarkets: ["Birmingham", "Montgomery", "Huntsville", "Mobile"],
    annualRideshareAccidents: 450,
    uniqueFacts: ["One of few contributory negligence states - critical for rideshare claims", "Uber launched in Alabama in 2014"]
  },
  {
    name: "Alaska",
    abbr: "AK",
    slug: "alaska",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "50/100/25",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Higher minimum insurance requirements than most states", "Cold weather creates unique rideshare hazards", "Limited Uber availability outside Anchorage"],
    majorUberMarkets: ["Anchorage", "Fairbanks"],
    annualRideshareAccidents: 85,
    uniqueFacts: ["Extreme weather conditions affect rideshare safety year-round", "Higher insurance minimums provide better protection"]
  },
  {
    name: "Arizona",
    abbr: "AZ",
    slug: "arizona",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Early adopter of rideshare regulations", "Self-driving vehicle testing hub", "Phoenix is major Uber testing ground"],
    majorUberMarkets: ["Phoenix", "Tucson", "Scottsdale", "Mesa", "Tempe", "Chandler"],
    annualRideshareAccidents: 2800,
    uniqueFacts: ["Home to Uber's self-driving car testing program", "First fatal autonomous rideshare accident occurred in Tempe (2018)", "Year-round warm weather means consistent rideshare demand"]
  },
  {
    name: "Arkansas",
    abbr: "AR",
    slug: "arkansas",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["3-year statute of limitations gives more time to file", "Cannot recover if more than 50% at fault"],
    majorUberMarkets: ["Little Rock", "Fayetteville", "Fort Smith"],
    annualRideshareAccidents: 380,
    uniqueFacts: ["Longer statute of limitations than neighboring states", "Growing Uber presence in university towns"]
  },
  {
    name: "California",
    abbr: "CA",
    slug: "california",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "15/30/5",
    rideshareRegulations: "First state to regulate TNCs (2013)",
    tncLaw: true,
    tncLawYear: 2013,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["AB5 law affects driver classification", "CPUC regulates rideshare companies", "Prop 22 allows drivers to remain contractors", "Strictest background check requirements"],
    majorUberMarkets: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Oakland", "Sacramento", "Long Beach"],
    annualRideshareAccidents: 15000,
    uniqueFacts: ["Uber was founded in San Francisco (2009)", "Highest rideshare usage in the nation", "AB5 and Prop 22 created landmark gig worker laws", "First state to establish TNC regulatory framework"]
  },
  {
    name: "Colorado",
    abbr: "CO",
    slug: "colorado",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    rideshareRegulations: "State-regulated since 2014",
    tncLaw: true,
    tncLawYear: 2014,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 125 established TNC regulations", "Denver International Airport has specific rideshare zones", "Mountain resort areas have special regulations"],
    majorUberMarkets: ["Denver", "Colorado Springs", "Aurora", "Boulder", "Fort Collins"],
    annualRideshareAccidents: 3200,
    uniqueFacts: ["Second state to pass comprehensive TNC legislation", "High rideshare demand for ski resort transportation", "Denver is one of Uber's top 10 markets"]
  },
  {
    name: "Connecticut",
    abbr: "CT",
    slug: "connecticut",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Late adopter of rideshare regulations", "High insurance requirements", "Bradley Airport has designated pickup zones"],
    majorUberMarkets: ["Hartford", "New Haven", "Stamford", "Bridgeport"],
    annualRideshareAccidents: 950,
    uniqueFacts: ["High commuter rideshare usage to NYC", "Strong consumer protection laws benefit accident victims"]
  },
  {
    name: "Delaware",
    abbr: "DE",
    slug: "delaware",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Small state with concentrated rideshare activity", "Philadelphia Airport serves many Delaware riders"],
    majorUberMarkets: ["Wilmington", "Newark", "Dover"],
    annualRideshareAccidents: 280,
    uniqueFacts: ["Many residents use rideshare to reach Philadelphia and Baltimore airports", "Corporate headquarters concentration drives business rideshare demand"]
  },
  {
    name: "District of Columbia",
    abbr: "DC",
    slug: "washington-dc",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/10",
    rideshareRegulations: "First jurisdiction to legalize rideshare (2014)",
    tncLaw: true,
    tncLawYear: 2014,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence makes claims difficult", "First to officially legalize Uber/Lyft", "Strict driver requirements"],
    majorUberMarkets: ["Washington DC"],
    annualRideshareAccidents: 2400,
    uniqueFacts: ["One of highest rideshare usage rates per capita", "Contributory negligence is a major hurdle for claims", "Government workers and tourists drive huge demand"]
  },
  {
    name: "Florida",
    abbr: "FL",
    slug: "florida",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "10/20/10",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["4-year statute of limitations (longest)", "No-fault PIP insurance required", "Theme park areas have high rideshare density"],
    majorUberMarkets: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "West Palm Beach"],
    annualRideshareAccidents: 12000,
    uniqueFacts: ["Second highest rideshare usage after California", "Tourism drives massive rideshare demand", "4-year statute of limitations is most favorable for victims", "No-fault insurance adds complexity to claims"]
  },
  {
    name: "Georgia",
    abbr: "GA",
    slug: "georgia",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 190 established TNC framework", "Atlanta airport is one of busiest for rideshare", "Rideshare insurance gaps addressed by law"],
    majorUberMarkets: ["Atlanta", "Savannah", "Augusta", "Athens"],
    annualRideshareAccidents: 5500,
    uniqueFacts: ["Atlanta Hartsfield-Jackson is world's busiest airport - massive rideshare demand", "Early adopter of comprehensive rideshare laws"]
  },
  {
    name: "Hawaii",
    abbr: "HI",
    slug: "hawaii",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/10",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["No-fault PIP insurance required", "Island geography limits service areas", "Tourism-heavy demand patterns"],
    majorUberMarkets: ["Honolulu", "Maui", "Kona"],
    annualRideshareAccidents: 650,
    uniqueFacts: ["Tourism drives nearly all rideshare demand", "Island geography creates unique accident patterns", "High cost of living means high rideshare fares"]
  },
  {
    name: "Idaho",
    abbr: "ID",
    slug: "idaho",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 195 established rideshare framework", "Rural areas have limited coverage"],
    majorUberMarkets: ["Boise", "Idaho Falls", "Meridian"],
    annualRideshareAccidents: 320,
    uniqueFacts: ["Rapidly growing Boise market", "Limited rideshare availability in rural areas"]
  },
  {
    name: "Illinois",
    abbr: "IL",
    slug: "illinois",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["City of Chicago has additional regulations", "O'Hare and Midway have designated pickup zones", "Strong consumer protection laws"],
    majorUberMarkets: ["Chicago", "Springfield", "Peoria", "Rockford", "Champaign"],
    annualRideshareAccidents: 8500,
    uniqueFacts: ["Chicago is one of Uber's largest markets globally", "O'Hare Airport is major rideshare hub", "City and state regulations sometimes conflict"]
  },
  {
    name: "Indiana",
    abbr: "IN",
    slug: "indiana",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SEA 117 established TNC rules", "Indianapolis Motor Speedway events create surge demand"],
    majorUberMarkets: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
    annualRideshareAccidents: 1800,
    uniqueFacts: ["Indy 500 creates massive annual rideshare demand", "Major college towns have high student rideshare usage"]
  },
  {
    name: "Iowa",
    abbr: "IA",
    slug: "iowa",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/15",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Rural coverage remains limited", "University towns have concentrated service"],
    majorUberMarkets: ["Des Moines", "Cedar Rapids", "Iowa City"],
    annualRideshareAccidents: 420,
    uniqueFacts: ["University of Iowa campus drives rideshare demand", "Weather creates seasonal usage patterns"]
  },
  {
    name: "Kansas",
    abbr: "KS",
    slug: "kansas",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 117 established TNC framework", "Kansas City metro spans state line"],
    majorUberMarkets: ["Kansas City (KS)", "Wichita", "Overland Park", "Lawrence"],
    annualRideshareAccidents: 580,
    uniqueFacts: ["Kansas City metro area shared with Missouri creates jurisdictional complexities", "University town demand in Lawrence"]
  },
  {
    name: "Kentucky",
    abbr: "KY",
    slug: "kentucky",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 86 established TNC rules", "Kentucky Derby creates massive annual surge", "No-fault PIP insurance required"],
    majorUberMarkets: ["Louisville", "Lexington", "Bowling Green"],
    annualRideshareAccidents: 980,
    uniqueFacts: ["Kentucky Derby is one of biggest rideshare events annually", "Louisville airport sees significant rideshare traffic", "Pure comparative negligence is favorable for victims"]
  },
  {
    name: "Louisiana",
    abbr: "LA",
    slug: "louisiana",
    statOfLimitations: "1 year",
    faultSystem: "Pure comparative negligence",
    minInsurance: "15/30/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["ONLY 1 YEAR statute of limitations - shortest in US", "Mardi Gras creates extreme surge demand", "French Quarter has special regulations"],
    majorUberMarkets: ["New Orleans", "Baton Rouge", "Shreveport"],
    annualRideshareAccidents: 2100,
    uniqueFacts: ["1-YEAR STATUTE OF LIMITATIONS - Act immediately!", "Mardi Gras is one of biggest rideshare events in US", "New Orleans has extremely high rideshare usage per capita", "Tourism and nightlife drive 24/7 demand"]
  },
  {
    name: "Maine",
    abbr: "ME",
    slug: "maine",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "50/100/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations - longest in US", "Higher insurance minimums", "Limited service in rural areas"],
    majorUberMarkets: ["Portland", "Bangor", "Lewiston"],
    annualRideshareAccidents: 180,
    uniqueFacts: ["6-year statute of limitations is most favorable in nation", "Tourism season creates summer surge demand", "Higher insurance minimums provide better coverage"]
  },
  {
    name: "Maryland",
    abbr: "MD",
    slug: "maryland",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "30/60/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence - extremely difficult to recover", "BWI Airport has designated rideshare zones", "DC metro area spans jurisdiction"],
    majorUberMarkets: ["Baltimore", "Bethesda", "Silver Spring", "Columbia"],
    annualRideshareAccidents: 2800,
    uniqueFacts: ["Contributory negligence makes claims very difficult", "High DC commuter rideshare usage", "Baltimore and DC metro create overlapping service areas"]
  },
  {
    name: "Massachusetts",
    abbr: "MA",
    slug: "massachusetts",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/5",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 4049 established comprehensive regulations", "Boston has additional city requirements", "Logan Airport has specific pickup procedures"],
    majorUberMarkets: ["Boston", "Cambridge", "Worcester", "Springfield"],
    annualRideshareAccidents: 4200,
    uniqueFacts: ["Boston is one of oldest and most established Uber markets", "High college student population drives demand", "No-fault PIP insurance adds complexity"]
  },
  {
    name: "Michigan",
    abbr: "MI",
    slug: "michigan",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "50/100/10",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["No-fault insurance state with unique rules", "Detroit is major Uber market", "Higher insurance minimums"],
    majorUberMarkets: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing"],
    annualRideshareAccidents: 3400,
    uniqueFacts: ["No-fault insurance creates unique claim procedures", "Detroit's auto industry connection to Uber partnerships", "University of Michigan drives Ann Arbor demand"]
  },
  {
    name: "Minnesota",
    abbr: "MN",
    slug: "minnesota",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "30/60/10",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations", "No-fault PIP insurance", "Minneapolis-St. Paul has high rideshare density"],
    majorUberMarkets: ["Minneapolis", "St. Paul", "Rochester", "Duluth"],
    annualRideshareAccidents: 1850,
    uniqueFacts: ["6-year statute gives maximum time to file claims", "Twin Cities are major Uber market", "Mall of America drives significant rideshare traffic"]
  },
  {
    name: "Mississippi",
    abbr: "MS",
    slug: "mississippi",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 1381 established TNC rules", "Limited urban areas for rideshare"],
    majorUberMarkets: ["Jackson", "Gulfport", "Biloxi"],
    annualRideshareAccidents: 380,
    uniqueFacts: ["Gulf Coast casinos drive rideshare demand", "Pure comparative negligence is favorable for victims", "Limited service outside metro areas"]
  },
  {
    name: "Missouri",
    abbr: "MO",
    slug: "missouri",
    statOfLimitations: "5 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["5-year statute of limitations", "Kansas City spans state line", "St. Louis has high rideshare density"],
    majorUberMarkets: ["St. Louis", "Kansas City", "Springfield", "Columbia"],
    annualRideshareAccidents: 2400,
    uniqueFacts: ["5-year statute is second longest in US", "Pure comparative negligence favors victims", "Two major metro areas drive rideshare demand"]
  },
  {
    name: "Montana",
    abbr: "MT",
    slug: "montana",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 390 established early regulations", "Very limited service outside cities", "Tourism creates seasonal demand"],
    majorUberMarkets: ["Billings", "Missoula", "Great Falls", "Bozeman"],
    annualRideshareAccidents: 120,
    uniqueFacts: ["Ski resort areas have seasonal rideshare spikes", "Glacier National Park tourism drives demand", "Very limited rural coverage"]
  },
  {
    name: "Nebraska",
    abbr: "NE",
    slug: "nebraska",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["4-year statute of limitations", "College football creates surge demand"],
    majorUberMarkets: ["Omaha", "Lincoln"],
    annualRideshareAccidents: 480,
    uniqueFacts: ["Nebraska football games create massive rideshare surges", "4-year statute is favorable for victims", "Omaha is growing market"]
  },
  {
    name: "Nevada",
    abbr: "NV",
    slug: "nevada",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Las Vegas is one of top rideshare markets globally", "McCarran Airport has massive rideshare volume", "24/7 demand from casinos and entertainment"],
    majorUberMarkets: ["Las Vegas", "Reno", "Henderson", "North Las Vegas"],
    annualRideshareAccidents: 6500,
    uniqueFacts: ["Las Vegas has highest rideshare usage per capita in US", "24/7 casino and entertainment demand", "Conventions and tourism drive massive volume", "McCarran Airport is one of busiest for rideshare pickups"]
  },
  {
    name: "New Hampshire",
    abbr: "NH",
    slug: "new-hampshire",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 302 established TNC rules", "Limited service outside southern NH"],
    majorUberMarkets: ["Manchester", "Nashua", "Concord"],
    annualRideshareAccidents: 220,
    uniqueFacts: ["Boston commuter demand drives southern NH usage", "Ski season creates winter surges", "Limited rural coverage"]
  },
  {
    name: "New Jersey",
    abbr: "NJ",
    slug: "new-jersey",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "15/30/5",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["A3695 established TNC framework", "No-fault PIP insurance", "NYC commuter traffic creates high demand", "Newark Airport has designated rideshare areas"],
    majorUberMarkets: ["Newark", "Jersey City", "Paterson", "Trenton", "Hoboken"],
    annualRideshareAccidents: 5200,
    uniqueFacts: ["NYC commuter demand drives massive rideshare usage", "No-fault insurance adds claim complexity", "One of most densely populated states"]
  },
  {
    name: "New Mexico",
    abbr: "NM",
    slug: "new-mexico",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 168 established TNC rules", "Limited coverage outside Albuquerque and Santa Fe"],
    majorUberMarkets: ["Albuquerque", "Santa Fe", "Las Cruces"],
    annualRideshareAccidents: 580,
    uniqueFacts: ["Tourism to Santa Fe drives rideshare demand", "Pure comparative negligence favors victims", "Limited rural coverage"]
  },
  {
    name: "New York",
    abbr: "NY",
    slug: "new-york",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$75,000 per person / $150,000 per accident",
      enRoute: "$1,250,000 liability coverage"
    },
    uniqueLaws: ["NYC has highest insurance requirements in nation", "TLC regulates NYC rideshare separately", "No-fault PIP insurance", "Congestion pricing affects rideshare costs"],
    majorUberMarkets: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    annualRideshareAccidents: 22000,
    uniqueFacts: ["NYC is largest Uber market in the world", "Highest insurance requirements in US ($1.25M)", "TLC adds extra regulatory layer in NYC", "No-fault insurance complicates claims"]
  },
  {
    name: "North Carolina",
    abbr: "NC",
    slug: "north-carolina",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "30/60/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence is harsh barrier", "HB 389 established TNC rules", "Charlotte is major banking center with high business rideshare"],
    majorUberMarkets: ["Charlotte", "Raleigh", "Durham", "Greensboro", "Wilmington"],
    annualRideshareAccidents: 3800,
    uniqueFacts: ["Contributory negligence makes claims very difficult", "Research Triangle has high tech worker rideshare usage", "Charlotte banking district drives business demand"]
  },
  {
    name: "North Dakota",
    abbr: "ND",
    slug: "north-dakota",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations", "No-fault insurance", "Very limited coverage outside cities"],
    majorUberMarkets: ["Fargo", "Bismarck", "Grand Forks"],
    annualRideshareAccidents: 95,
    uniqueFacts: ["6-year statute is most favorable for victims", "Oil boom areas had temporary rideshare surges", "Very limited service statewide"]
  },
  {
    name: "Ohio",
    abbr: "OH",
    slug: "ohio",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 237 established comprehensive TNC rules", "Multiple major metros with high rideshare density"],
    majorUberMarkets: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    annualRideshareAccidents: 4200,
    uniqueFacts: ["Columbus is one of fastest-growing Uber markets", "Ohio State football creates massive surges", "Multiple metro areas each have strong rideshare presence"]
  },
  {
    name: "Oklahoma",
    abbr: "OK",
    slug: "oklahoma",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 316 established TNC framework", "Oklahoma City and Tulsa are primary markets"],
    majorUberMarkets: ["Oklahoma City", "Tulsa", "Norman"],
    annualRideshareAccidents: 920,
    uniqueFacts: ["University of Oklahoma games drive Norma rideshare spikes", "Oil industry workers use rideshare frequently", "Limited rural coverage"]
  },
  {
    name: "Oregon",
    abbr: "OR",
    slug: "oregon",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 2995 established TNC rules", "Portland has very high rideshare usage", "Strong bicycle culture creates interaction risks"],
    majorUberMarkets: ["Portland", "Eugene", "Salem", "Bend"],
    annualRideshareAccidents: 2100,
    uniqueFacts: ["Portland is one of most rideshare-friendly cities", "Strong public transit integration", "Bicycle and rideshare conflicts are common"]
  },
  {
    name: "Pennsylvania",
    abbr: "PA",
    slug: "pennsylvania",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "15/30/5",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 164 established comprehensive TNC rules", "Philadelphia has high rideshare density", "PHL Airport has designated pickup zones", "No-fault insurance option"],
    majorUberMarkets: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"],
    annualRideshareAccidents: 5800,
    uniqueFacts: ["Philadelphia is major East Coast Uber market", "Pittsburgh has autonomous vehicle testing", "No-fault insurance can simplify claims"]
  },
  {
    name: "Rhode Island",
    abbr: "RI",
    slug: "rhode-island",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Small state with concentrated rideshare", "Providence is primary market"],
    majorUberMarkets: ["Providence", "Warwick", "Newport"],
    annualRideshareAccidents: 340,
    uniqueFacts: ["Smallest state but high rideshare per capita", "Pure comparative negligence favors victims", "Boston proximity increases demand"]
  },
  {
    name: "South Carolina",
    abbr: "SC",
    slug: "south-carolina",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["H 3525 established early TNC rules", "Charleston tourism drives demand", "Myrtle Beach has seasonal surges"],
    majorUberMarkets: ["Charleston", "Columbia", "Greenville", "Myrtle Beach"],
    annualRideshareAccidents: 1650,
    uniqueFacts: ["Charleston and Myrtle Beach tourism creates high seasonal demand", "Early adopter of rideshare regulations", "College towns have strong usage"]
  },
  {
    name: "South Dakota",
    abbr: "SD",
    slug: "south-dakota",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (slight)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 28 established TNC rules", "Very limited coverage statewide", "Sturgis Rally creates massive annual surge"],
    majorUberMarkets: ["Sioux Falls", "Rapid City"],
    annualRideshareAccidents: 85,
    uniqueFacts: ["Sturgis Motorcycle Rally creates one of biggest annual rideshare surges", "Very limited year-round service", "Tourism to Mount Rushmore drives Rapid City demand"]
  },
  {
    name: "Tennessee",
    abbr: "TN",
    slug: "tennessee",
    statOfLimitations: "1 year",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["ONLY 1 YEAR statute of limitations - same as Louisiana", "Nashville has extremely high rideshare usage", "Music industry drives 24/7 demand"],
    majorUberMarkets: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
    annualRideshareAccidents: 3200,
    uniqueFacts: ["1-YEAR STATUTE OF LIMITATIONS - Act immediately!", "Nashville is one of top bachelorette party destinations - massive rideshare demand", "Memphis and Nashville both have vibrant nightlife driving 24/7 usage"]
  },
  {
    name: "Texas",
    abbr: "TX",
    slug: "texas",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "30/60/25",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 100 established statewide rules", "Austin was early Uber battleground", "Multiple major metros with high density", "Higher insurance minimums than many states"],
    majorUberMarkets: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "El Paso"],
    annualRideshareAccidents: 14000,
    uniqueFacts: ["Second largest rideshare market after California", "Austin had famous Uber/Lyft departure and return", "Houston and Dallas are among largest US markets", "SXSW creates massive annual Austin surge"]
  },
  {
    name: "Utah",
    abbr: "UT",
    slug: "utah",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/65/15",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 389 established early regulations", "Salt Lake City is growing tech hub", "Ski resorts drive seasonal demand"],
    majorUberMarkets: ["Salt Lake City", "Provo", "Park City", "Ogden"],
    annualRideshareAccidents: 1200,
    uniqueFacts: ["4-year statute of limitations is favorable", "Ski season creates massive Park City demand", "Tech industry growth driving Salt Lake rideshare boom"]
  },
  {
    name: "Vermont",
    abbr: "VT",
    slug: "vermont",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 60 established TNC rules", "Very limited coverage outside Burlington"],
    majorUberMarkets: ["Burlington", "Montpelier"],
    annualRideshareAccidents: 75,
    uniqueFacts: ["Smallest rideshare market in US", "Ski season creates seasonal surges", "Burlington has majority of service"]
  },
  {
    name: "Virginia",
    abbr: "VA",
    slug: "virginia",
    statOfLimitations: "2 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence makes recovery extremely difficult", "DC metro area extends into VA", "Dulles and Reagan airports have high rideshare volume"],
    majorUberMarkets: ["Virginia Beach", "Norfolk", "Richmond", "Arlington", "Alexandria"],
    annualRideshareAccidents: 3400,
    uniqueFacts: ["Contributory negligence is major barrier to claims", "DC commuters create massive Northern Virginia demand", "Beach tourism drives Virginia Beach usage"]
  },
  {
    name: "Washington",
    abbr: "WA",
    slug: "washington",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 5550 established TNC framework", "Seattle has very high rideshare usage", "Sea-Tac Airport is major rideshare hub"],
    majorUberMarkets: ["Seattle", "Tacoma", "Spokane", "Bellevue"],
    annualRideshareAccidents: 4800,
    uniqueFacts: ["Seattle is one of top 10 Uber markets in US", "Tech industry drives high rideshare adoption", "Pure comparative negligence favors victims"]
  },
  {
    name: "West Virginia",
    abbr: "WV",
    slug: "west-virginia",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    rideshareRegulations: "State-regulated since 2016",
    tncLaw: true,
    tncLawYear: 2016,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 539 established TNC rules", "Very limited coverage outside Charleston and Morgantown"],
    majorUberMarkets: ["Charleston", "Morgantown", "Huntington"],
    annualRideshareAccidents: 180,
    uniqueFacts: ["WVU campus drives Morgantown rideshare demand", "Very limited rural coverage", "Mountain terrain creates unique driving hazards"]
  },
  {
    name: "Wisconsin",
    abbr: "WI",
    slug: "wisconsin",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    rideshareRegulations: "State-regulated since 2015",
    tncLaw: true,
    tncLawYear: 2015,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 278 established TNC framework", "Packers games create Green Bay surges", "Madison is major college market"],
    majorUberMarkets: ["Milwaukee", "Madison", "Green Bay"],
    annualRideshareAccidents: 1450,
    uniqueFacts: ["Packers football creates massive Green Bay surge demand", "UW-Madison campus has high student rideshare usage", "Winter weather affects year-round safety"]
  },
  {
    name: "Wyoming",
    abbr: "WY",
    slug: "wyoming",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/20",
    rideshareRegulations: "State-regulated since 2017",
    tncLaw: true,
    tncLawYear: 2017,
    uberInsuranceTiers: {
      appOff: "Driver's personal insurance",
      waitingForRide: "$50,000 per person / $100,000 per accident",
      enRoute: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Very limited coverage statewide", "Tourism to Yellowstone drives Jackson demand"],
    majorUberMarkets: ["Cheyenne", "Casper", "Jackson"],
    annualRideshareAccidents: 45,
    uniqueFacts: ["Smallest population state with very limited rideshare", "4-year statute of limitations is favorable", "Jackson Hole tourism creates seasonal spikes"]
  }
];

export function getStateBySlug(slug: string): State | undefined {
  return states.find(s => s.slug === slug);
}

export function getContributoryNegligenceStates(): State[] {
  return states.filter(s => s.faultSystem.toLowerCase().includes('contributory'));
}

export function getOneYearSOLStates(): State[] {
  return states.filter(s => s.statOfLimitations === '1 year');
}

export function getLongSOLStates(): State[] {
  return states.filter(s => {
    const years = parseInt(s.statOfLimitations);
    return years >= 4;
  });
}

export function getTopRideshareMarkets(): State[] {
  return states.filter(s => s.annualRideshareAccidents >= 5000).sort((a, b) => b.annualRideshareAccidents - a.annualRideshareAccidents);
}
