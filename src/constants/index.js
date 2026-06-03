import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  spark,
  airflow,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Engineer",
    icon: web,
  },
  {
    title: "Cloud & Big Data",
    icon: mobile,
  },
  {
    title: "ETL & Pipeline Design",
    icon: backend,
  },
  {
    title: "Research & Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Apache Spark",
    icon: spark,
  },
  {
    name: "Apache Airflow",
    icon: airflow,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
];

const experiences = [
  {
    title: "Data Engineer",
    company_name: "TO THE NEW - Noida, India",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "January 2026 – Present",
    points: [
      "Designed and implemented cloud-based data pipelines on AWS using S3, EC2, Glue, EMR, Lambda, Athena, and PySpark to optimize big data processing and cloud data warehousing.",
      "Developed scalable ETL pipelines using Apache Airflow to automate complex data ingestion, transformation, and workflow scheduling.",
      "Built real-time Kafka streaming architecture evaluating GPS and sensor telemetry data against geofences and speed limits for driver safety strike penalties.",
      "Automated daily fuel consumption auditing and monthly rate-deduction reports using Apache Airflow orchestrating Egress pipelines from S3 Delta layers into PostgreSQL.",
    ],
  },
  {
    title: "VCIS Intern",
    company_name: "University of Delhi - Dean Students' Welfare",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Authored and designed the official Culture Council Annual Report documenting University centenary events.",
      "Presented the report to the Vice Chancellor and published it on the DU website.",
      "Developed and maintained the official website for the Culture Council Department.",
      "Managed department dataset and assisted in processing data for over 6,500+ applicants during the ECA Admission cycle.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Tushar demonstrated exceptional skills in both technical development and research during his time with us.",
    name: "Prof.\tRavinder\tKumar",
    designation: "Dean",
    company: "Culture Council Department",
  },
  {
    testimonial:
      "An outstanding student who combines academic excellence with practical innovation in software development.",
    name: "Prof. Veenu Bhasin",
    designation: "Computer Science Department",
    company: "P.G.D.A.V. College",
  },
  {
    testimonial:
      "Tushar's published research and award-winning achievements reflect his dedication to excellence.",
    name: "Dr. Hemant Verma",
    designation: "Joint Dean",
    company: "Culture Council Department",
  },
];

const projects = [
  {
    name: "OmniRoute: Smart Logistics Engine",
    description:
      "Enterprise-grade Data Lakehouse architecture for ingesting and processing high-velocity telemetry data from a global fleet of delivery vehicles. Features batch pipelines with SCD Type 2 logic, real-time Kafka streaming for driver safety, and automated fuel auditing with Airflow-orchestrated egress into PostgreSQL.",
    tags: [
      {
        name: "pyspark",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "green-text-gradient",
      },
      {
        name: "airflow",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tushar-1800/Omniroute",
  },
  {
    name: "Nimbus Data Accelerator",
    description:
      "Robust data validation, profiling, and quality check framework as part of an enterprise data accelerator pipeline. Features EMR-based PySpark workflows with Amazon Deequ for automated data quality audits, automated S3 report management, Slack notifications, and comprehensive JSON/HTML profiling reports.",
    tags: [
      {
        name: "pyspark",
        color: "blue-text-gradient",
      },
      {
        name: "airflow",
        color: "green-text-gradient",
      },
      {
        name: "aws-emr",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/tushar-1800",
  },
  {
    name: "Lung Disease Prediction",
    description:
      "Machine Learning project for heart disease prediction with 13 features. Implemented preprocessing, EDA, and trained Logistic Regression, Decision Tree, Naive Bayes, and SVM models with up to 91% accuracy.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "matplotlib",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://drive.google.com/file/d/1RBuVv7THN1iJ-iZbh-hsg4IHvVJDMLm5/view",
  },
  {
    name: "College Society Website (Parikalan.in)",
    description:
      "Comprehensive website for P.G.D.A.V. (M) College Computer Science Society. Serves as a platform for students to explore programming, design, networking through clubs, hackathons, workshops, and competitions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.parikalan.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
