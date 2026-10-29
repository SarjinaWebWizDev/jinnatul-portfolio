const P = (f) => `/images/projects/${f}.webp`
const C = (f) => `/images/certificates/${f}.webp`

export const links = [['About','about'],['Research','research'],['Skills','skills'],['Education','education'],['Certificates','certificates'],['Contact','contact']]

export const interests = ['Microbiology','Molecular biology','Laboratory research','Microbial biotechnology','Antimicrobial resistance','Plant–microbe interactions','Environmental microbiology']

export const projects = [
  { n:'01', cat:'Molecular biology / Laboratory project', short:'Plasmid transformation of bacteria, screened by blue-white colony colour on X-gal / IPTG plates.', title:'Bacterial Transformation & Transformation Efficiency', span:'md:col-span-7', pos:'center 60%',
    desc:'Performed bacterial transformation using plasmid DNA, plated cells on LB agar containing X-gal, IPTG, and antibiotic, and applied blue-white screening to distinguish colony phenotypes. Transformation efficiency was calculated as part of the work.',
    tech:['Plasmid DNA','LB + X-gal / IPTG / antibiotic','Blue-white screening','Transformation efficiency'],
    imgs:[{src:P('transformation-blue-white-plate'),alt:'LB agar plate with X-gal, IPTG and antibiotic showing blue-green colonies',cap:'Test plate (50 µL), as labelled'}] },
  { n:'02', cat:'Water microbiology / Laboratory project', short:'Presumptive, confirmed and completed MPN tests on pond and Aquaguard water, plus membrane filtration.', title:'Water Microbiology: MPN & Membrane Filtration', span:'md:col-span-5', pos:'center',
    desc:'Conducted presumptive, confirmed, and completed MPN testing on water samples from a pond and an Aquaguard water purifier. Applied membrane filtration for microbiological water analysis.',
    tech:['MPN presumptive test','Confirmed & completed tests','Membrane filtration','EMB agar'],
    imgs:[
      {src:P('mpn-emb-plate-1'),alt:'Culture streaked on a dark red agar plate with a metallic green sheen',cap:'Plate culture on selective agar'},
      {src:P('mpn-emb-plate-2'),alt:'Second agar plate with metallic green sheen colonies',cap:'Plate culture on selective agar'},
      {src:P('mpn-presumptive-aquaguard'),alt:'Rows of MPN test tubes in blue racks, Aquaguard water presumptive test',cap:'MPN presumptive test, Aquaguard water (as labelled)'},
      {src:P('mpn-presumptive-pond'),alt:'Rows of MPN test tubes in blue racks, pond water presumptive test',cap:'MPN presumptive test, pond water (as labelled)'}] },
  { n:'03', cat:'Antimicrobial testing / Laboratory project', short:'Agar cup diffusion assays comparing four antibiotics against E. coli and Bacillus.', title:'Antibiotic Sensitivity Testing', span:'md:col-span-5', pos:'center',
    desc:'Performed agar cup/well diffusion assays using streptomycin, ampicillin, azithromycin, and kanamycin with a control. Measured and marked inhibition zones to compare antibiotic susceptibility in E. coli and Bacillus species.',
    tech:['Agar cup / well diffusion','Zone of inhibition','E. coli','Bacillus'],
    imgs:[
      {src:P('antibiotic-ecoli-plates'),alt:'Five agar plates with E. coli and marked zones of inhibition',cap:'E. coli plates. A: streptomycin, B: ampicillin, C: azithromycin, D: kanamycin'},
      {src:P('antibiotic-bacillus-plates'),alt:'Five agar plates with Bacillus and marked zones of inhibition',cap:'Bacillus plates. A: streptomycin, B: ampicillin, C: azithromycin, D: kanamycin'}] },
  { n:'04', cat:'Microbial biotechnology / Laboratory project', short:'Rhizobium isolation from soil and carrier-based biofertiliser production in the college laboratory.', title:'Rhizobium Isolation & Biofertiliser Production', span:'md:col-span-7', pos:'center',
    desc:'Worked on Rhizobium isolation from soil samples and participated in carrier-based Rhizobium biofertiliser production in the college laboratory (Semester VII).',
    tech:['Rhizobium isolation','Soil samples','Carrier-based biofertiliser','Staining & microscopy'],
    imgs:[{src:P('rhizobium-stained-smear'),alt:'Stained bacterial smear viewed under a light microscope',cap:'Stained preparation under light microscopy'}] },
  { n:'05', cat:'Protein analysis / Laboratory project', short:'Protein separation by molecular weight alongside a marker, then gel staining and band analysis.', title:'SDS-PAGE Analysis', span:'md:col-span-12', pos:'center 45%',
    desc:'Separated protein samples according to molecular weight alongside a protein marker, stained the gel, and analysed banding patterns to compare samples.',
    tech:['SDS-PAGE','Protein marker','Gel staining','Banding-pattern analysis'],
    imgs:[
      {src:P('sds-page-apparatus'),alt:'SDS-PAGE electrophoresis tank with a running gel',cap:'Electrophoresis in progress'},
      {src:P('sds-page-stained-gel'),alt:'Stained polyacrylamide gel in a dish showing protein bands',cap:'Stained gel'}] },
]

export const skills = [
  ['Microbiology & Culture',['Nutrient agar','Blood agar','Chocolate agar','EMB agar','MacConkey agar','Nutrient broth','Lactose broth','Culture preservation','Rhizobium isolation','Isolation of spoilage microorganisms']],
  ['Staining & Microscopy',['Gram staining','Simple staining','LPCB staining','Acid-fast staining','Light microscopy']],
  ['Water & Antimicrobial Testing',['MPN testing','Membrane filtration','Agar cup/well diffusion assay','Antibiotic susceptibility testing']],
  ['Molecular Biology',['Bacterial transformation','Blue-white screening','Transformation efficiency calculation','SDS-PAGE','Genomic DNA isolation']],
  ['Food & Dairy Biochemistry',['Probiotic foods: kanji and dahi','MBRT of milk','Alkaline phosphatase testing','Carbohydrate estimation','Protein and vitamin C estimation']],
  ['Aseptic Practice & Biosafety',['Aseptic technique','Autoclave and hot-air oven sterilisation','Filtration of heat-sensitive materials','Laminar airflow cabinet','Incubator','Laboratory biosafety']],
  ['Data & Computer Skills',['Inhibition-zone measurement','SDS-PAGE banding-pattern analysis','Primer design and in-silico validation','MS Word','MS Excel','MS PowerPoint']],
]

export const certs = [
  { title:'One-Day Intensive Workshop on PCR and Primer Designing with In-Silico Validation', by:'Flavin Labs Pvt. Ltd.', date:'July 2025', type:'Workshop', src:C('flavin-pcr-primer-designing') },
  { title:'Hands-on Training on “Basics of Molecular Biology”', by:'Oriental Institute of Science and Technology (Vidyasagar University)', date:'May 2025', type:'Training', src:C('oist-basics-molecular-biology') },
  { title:'Three-Day Online Workshop on Mushroom Spawn Production', by:'Flavin Labs Pvt. Ltd.', date:'September 2025', type:'Workshop', src:C('flavin-mushroom-spawn-production') },
]

export const steps = [
  ['Observe','Pay attention to samples, experimental conditions, and scientific details.'],
  ['Investigate','Apply relevant laboratory techniques and follow established procedures.'],
  ['Document','Maintain careful observations, records, and organised experimental notes.'],
  ['Analyse','Interpret available observations thoughtfully and understand the limitations of experimental results.'],
]

export const contact = {
  email:'shaikhjinnatul@gmail.com', phone:'7810877905',
  linkedin:'https://www.linkedin.com/in/shaikh-jinnatul-93b701327',
}
