import Card from "./components/Card";



const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/aws.amazon.com",
    companyName: "AWS",
    datePosted: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$70/hr",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoom.us",
    companyName: "Zoom",
    datePosted: "1 week ago",
    post: "Video Infrastructure Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "San Jose, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/paypal.com",
    companyName: "PayPal",
    datePosted: "5 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "2 weeks ago",
    post: "Frontend Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "8 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Stockholm, Sweden"
  },
  {
    brandLogo: "https://logo.clearbit.com/linkedin.com",
    companyName: "LinkedIn",
    datePosted: "10 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    datePosted: "3 weeks ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/shopify.com",
    companyName: "Shopify",
    datePosted: "12 days ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://logo.clearbit.com/slack.com",
    companyName: "Slack",
    datePosted: "6 days ago",
    post: "Product Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://logo.clearbit.com/disney.com",
    companyName: "Disney",
    datePosted: "2 days ago",
    post: "Video Graphics Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "California, USA"
  }
];

return(
  <div className='parent'>
    {jobOpenings.map(function(elem,index){
      return  <div key={index}>
         <Card company={elem.companyName} date={elem.datePosted}
       brand={elem.brandLogo} loc={elem.location} pay={elem.pay}
        post={elem.post} tag1={elem.tag1} tag2={elem.tag2} />
      </div>
    })}
  </div>
)
};

export default App;
